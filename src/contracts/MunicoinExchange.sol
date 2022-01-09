// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import "./Municoin.sol";

struct Transaction {
    uint256 id;
    address owner;
    uint256 amount;
    uint256 price;
    uint256 amountSold;
}

contract MunicoinExchange {
    address admin;
    Municoin public municoin;
    uint256 public price;
    uint256 public available;
    uint256 public transactionCount;

    Transaction[] openTransactions;
    Transaction[] closedTransactions;

    modifier isAdmin() {
        require(msg.sender == admin);
        _;
    }

    constructor(Municoin _municoin) {
        admin = msg.sender;
        municoin = _municoin;
        price = 0;
        available = 0;
    }

    event Buy(address buyer, uint256 amount);
    event Close(uint256 indexed amount, uint256 indexed price);
    event PriceChange(uint256 indexed newPrice);

    function sell(uint256 _amount, uint256 _price) public {
        require(
            municoin.balanceOf(msg.sender) >= _amount,
            "Not enough balance"
        );
        require(
            municoin.allowance(msg.sender, address(this)) >= _amount,
            "Not enough allowance"
        );
        require(municoin.transferFrom(msg.sender, address(this), _amount));

        Transaction memory pending = Transaction({
            id: transactionCount,
            owner: msg.sender,
            amount: _amount,
            price: _price,
            amountSold: 0
        });

        handleNewTransactionSideEffects();

        openTransactions.push(pending);
    }

    function buy(uint256 _amount) public payable {
        require(available >= _amount, "Not enough tokens available");
        require(msg.value >= getPrice(_amount), "Not enough ETH");
        require(municoin.transfer(msg.sender, _amount));

        uint256 _pendingAmount = _amount;
        while (_pendingAmount > 0) {
            uint256 _transactionAvailable = openTransactions[0].amount -
                openTransactions[0].amountSold;

            if (_transactionAvailable > _pendingAmount) {
                openTransactions[0].amountSold += _pendingAmount;
                _pendingAmount = 0;
            } else {
                _pendingAmount -= _transactionAvailable;
                openTransactions[0].amountSold += _transactionAvailable;
                closeOpenTransactionAt(0);
            }
        }

        emit Buy(msg.sender, _amount);
    }

    function closeOpenTransactionAt(uint256 _index) private {
        require(_index < openTransactions.length);
        Transaction memory closed = openTransactions[_index];
        payable(closed.owner).transfer(closed.amountSold * closed.price);
        closedTransactions.push(closed);
        emit Close(closed.amountSold, closed.price);
        for (uint256 i = _index; i < openTransactions.length - 1; i++) {
            openTransactions[i] = openTransactions[i + 1];
        }
        openTransactions.pop();
    }

    function closeTransaction(uint256 id) public {
        for (uint256 i = 0; i < openTransactions.length; i++) {
            if (openTransactions[i].id == id) {
                require(openTransactions[i].owner == msg.sender, "Not owner");
                closeOpenTransactionAt(i);
                return;
            }
        }
    }

    function getPrice(uint256 _amount) private view returns (uint256) {
        return _amount * price;
    }

    function refreshPrice() private {
        uint256 _price = 0;
        uint256 _available = 0;
        for (uint256 i = 0; i < openTransactions.length; i++) {
            if (openTransactions[i].amountSold < openTransactions[i].amount) {
                _price =
                    ((openTransactions[i].price *
                        (openTransactions[i].amount -
                            openTransactions[i].amountSold)) +
                        _price *
                        _available) /
                    (openTransactions[i].amount -
                        openTransactions[i].amountSold +
                        _available);
                _available =
                    _available +
                    openTransactions[i].amount -
                    openTransactions[i].amountSold;
            }
        }
        if (_price != price) {
            emit PriceChange(_price);
            price = _price;
        }
        available = _available;
    }

    function sortTransactions() private {
        for (uint256 i = 0; i < openTransactions.length; i++) {
            for (uint256 j = i + 1; j < openTransactions.length; j++) {
                if (openTransactions[i].price > openTransactions[j].price) {
                    Transaction memory temp = openTransactions[i];
                    openTransactions[i] = openTransactions[j];
                    openTransactions[j] = temp;
                }
            }
        }
    }

    function handleNewTransactionSideEffects() private {
        refreshPrice();
        sortTransactions();
    }

    function closeExchange() public isAdmin {
        require(municoin.transfer(admin, municoin.balanceOf(address(this))));
        selfdestruct(payable(admin));
    }
}
