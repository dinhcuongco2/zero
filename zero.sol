// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract zero {

    string public name = "zero";
    string public symbol = "zero";

    uint256 public totalSupply = 1000000000;

    address public owner;

    constructor() {
        owner = msg.sender;
    }

    function getOwner() public view returns(address) {
        return owner;
    }
}
