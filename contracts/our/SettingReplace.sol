pragma solidity ^0.4.0;

import "../interface/F3DexternalSettingsInterface.sol";

contract SettingReplace is F3DexternalSettingsInterface {

    function getFastGap() external returns (uint256){
        return 5;
    }

    function getLongGap() external returns (uint256){
        return 30;
    }

    function getFastExtra() external returns (uint256){
        return 60;
    }

    function getLongExtra() external returns (uint256){
        return 100;
    }

}
