// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import "./Municoin.sol";

contract MunicoinExchange {
    address admin;
    Municoin public municoin;
    uint256 public price;
    uint256 public tokensSold;

    event Sell(address _seller, uint256 indexed _amount);

    modifier isAdmin() {
        require(msg.sender == admin);
        _;
    }

    constructor(Municoin _municoin, uint256 _price) {
        admin = msg.sender;
        municoin = _municoin;
        price = _price;
    }

    function getPrice(uint256 _amount) private view returns (uint256) {
        return _amount * price;
    }

    function buy(uint256 _amount) public payable {
        require(msg.value >= getPrice(_amount));
        require(municoin.balanceOf(address(this)) >= _amount);
        require(municoin.transfer(msg.sender, _amount));

        tokensSold += _amount;

        emit Sell(msg.sender, _amount);
    }

    function closeExchange() public isAdmin {
        require(municoin.transfer(admin, municoin.balanceOf(address(this))));
        selfdestruct(payable(admin));
    }
}
