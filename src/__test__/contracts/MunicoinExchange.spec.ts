const MunicoinExchange = artifacts.require("MunicoinExchange");

contract("MunicoinExchange", ([admin, other, other2]) => {
  it("initalizes the contract with the correct values", async () => {
    const municoinExchange = await MunicoinExchange.deployed();
    assert.notEqual(municoinExchange.address, "0x0");
  });

  it("has the token contract set up", async () => {
    const municoinExchange = await MunicoinExchange.deployed();
    const municoinAddress = await municoinExchange.municoinAddress();
    assert.notEqual(municoinAddress, "0x0");
  });
});
