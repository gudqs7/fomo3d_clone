var FoMo3Dlong = artifacts.require("./FoMo3Dlong.sol");

var SafeMath = artifacts.require("./library/SafeMath.sol");
var F3Ddatasets = artifacts.require("./library/F3Ddatasets.sol");
var MSFun = artifacts.require("./library/MSFun.sol");
var NameFilter = artifacts.require("./library/NameFilter.sol");
var UintCompressor = artifacts.require("./library/UintCompressor.sol");
var F3DKeysCalcLong = artifacts.require("./library/F3DKeysCalcLong.sol");

var TeamJustInterface = artifacts.require("./interface/TeamJustInterface.sol");
var DiviesInterface = artifacts.require("./interface/DiviesInterface.sol");
var F3DexternalSettingsInterface = artifacts.require("./interface/F3DexternalSettingsInterface.sol");
var otherFoMo3D = artifacts.require("./interface/otherFoMo3D.sol");
var PlayerBookInterface = artifacts.require("./interface/PlayerBookInterface.sol");
var PlayerBookReceiverInterface = artifacts.require("./interface/PlayerBookReceiverInterface.sol");

var OtherF3DReplace = artifacts.require("./our/OtherF3DReplace.sol");
var P3DReplace = artifacts.require("./our/P3DReplace.sol");
var SettingReplace = artifacts.require("./our/SettingReplace.sol");

var F3Devents = artifacts.require("./F3Devents.sol");
var PlayerBook = artifacts.require("./PlayerBook.sol");
var TeamJust = artifacts.require("./TeamJust.sol");
var modularLong = artifacts.require("./modularLong.sol");


module.exports = function (deployer, network, accounts) {

    deployer.deploy(SafeMath);
    deployer.deploy(F3Ddatasets);
    deployer.deploy(MSFun);
    deployer.deploy(NameFilter);
    deployer.deploy(UintCompressor);
    deployer.deploy(F3DKeysCalcLong);

    deployer.deploy(F3Devents);

    //
    // deployer.link(SafeMath, TeamJust);
    // deployer.link(NameFilter, TeamJust);
    // deployer.link(MSFun, TeamJust);
    // deployer.link(P3DReplace, TeamJust);
    // deployer.deploy(TeamJust);
    //
    // deployer.link(SafeMath, PlayerBook);
    // deployer.link(NameFilter, PlayerBook);
    // deployer.link(MSFun, PlayerBook);
    // deployer.link(P3DReplace, PlayerBook);
    // deployer.link(TeamJust, PlayerBook);
    // deployer.deploy(PlayerBook);

    deployer.link(SafeMath, FoMo3Dlong);
    deployer.link(NameFilter, FoMo3Dlong);
    deployer.link(MSFun, FoMo3Dlong);
    deployer.link(F3DKeysCalcLong, FoMo3Dlong);
    deployer.link(F3Ddatasets, FoMo3Dlong);
    deployer.link(F3Devents, FoMo3Dlong);
    // deployer.link(PlayerBook, FoMo3Dlong);
    // deployer.link(TeamJust, FoMo3Dlong);
    //
    deployer.deploy(FoMo3Dlong);

};
