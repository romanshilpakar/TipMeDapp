// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.9.0;

contract TipMe {
    struct Tip {
        string name;
        string message;
        uint256 timestamp;
        address from;
    }

    Tip[] tips;
    address payable owner;

    constructor() {
        owner = payable(msg.sender);
    }

    function PayTip(string memory name, string memory message) public payable {
        require(msg.value > 0, "Please Tip greater than 0 ether");
        owner.transfer(msg.value);
        tips.push(Tip(name, message, block.timestamp, msg.sender));
    }

    function GetTips() public view returns (Tip[] memory) {
        return tips;
    }
}
