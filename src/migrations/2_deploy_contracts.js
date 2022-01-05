const Municoin = artifacts.require("Municoin");

module.exports = function (deployer) {
  deployer.deploy(Municoin, 1_000_000);
};
