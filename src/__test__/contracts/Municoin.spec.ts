const Municoin = artifacts.require("Municoin");

contract("Municoin", ([]) => {
  it("sets the total supply upon deployment", async () => {
    const municoin = await Municoin.deployed();
    const totalSupply = await municoin.totalSupply();
    assert.equal(totalSupply.toNumber(), 1_000_000);
  });

  it("sets the name upon deployment", async () => {
    const municoin = await Municoin.deployed();
    const name = await municoin.name();
    assert.equal(name, "Municoin");
  });
});
