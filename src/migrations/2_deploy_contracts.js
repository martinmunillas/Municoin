const Municoin = artifacts.require("Municoin");
const MunicoinExchange = artifacts.require("MunicoinExchange");

module.exports = function (deployer) {
  deployer.deploy(Municoin, 1_000_000);
  deployer.deploy(MunicoinExchange);
};
