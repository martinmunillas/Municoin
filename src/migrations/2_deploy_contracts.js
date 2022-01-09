const Municoin = artifacts.require("Municoin");
const MunicoinExchange = artifacts.require("MunicoinExchange");

module.exports = async function (deployer) {
  await deployer.deploy(Municoin, 1_000_000);
  await deployer.deploy(MunicoinExchange, Municoin.address);
};
