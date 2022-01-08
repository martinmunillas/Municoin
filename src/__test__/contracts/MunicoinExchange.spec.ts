const MunicoinExchange = artifacts.require("MunicoinExchange");

contract("MunicoinExchange", () => {
  it("initalizes the contract with the correct values", async () => {
    const municoinExchange = await MunicoinExchange.deployed();
    assert.notEqual(municoinExchange.address, "0x0");
  });

  it("has the token contract set up", async () => {
    const municoinExchange = await MunicoinExchange.deployed();
    const municoinAddress = await municoinExchange.municoin();
    assert.notEqual(municoinAddress, "0x0");
  });

  it("has a 0.0001 eth price", async () => {
    const municoinExchange = await MunicoinExchange.deployed();
    const price = (await municoinExchange.price()).toString();
    assert.equal(price, web3.utils.toWei("0.0001", "ether"));
  });
});
