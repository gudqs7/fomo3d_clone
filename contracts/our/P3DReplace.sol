pragma solidity ^0.4.0;

import "../interface/DiviesInterface.sol";

contract P3DReplace is DiviesInterface {

    function deposit() external payable {
        // do no things, received the ether
    }

    function() payable public {

    }


    function getBalance() public view returns (uint){
        return address(this).balance;
    }

}
