// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import "./Municoin.sol";

contract MunicoinExchange {
    address public admin;
    Municoin public municoinContract;

    constructor(Municoin _municoinContract) {
        admin = msg.sender;
        municoinContract = _municoinContract;
    }
}
