// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract Municoin {
    string public name;
    uint256 public totalSupply;

    mapping(address => uint256) public balanceOf;

    constructor() {
        name = "Municoin";
        totalSupply = 1_000_000;
    }
}
