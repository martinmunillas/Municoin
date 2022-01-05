const Municoin = artifacts.require("Municoin");

contract("Municoin", ([admin, other, other2]) => {
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

  it("sets the symbol upon deployment", async () => {
    const municoin = await Municoin.deployed();
    const symbol = await municoin.symbol();
    assert.equal(symbol, "MUNI");
  });

  it("sets the admin balance to the totalSupply", async () => {
    const municoin = await Municoin.deployed();
    const adminBalance = await municoin.balanceOf(admin);
    assert.equal(adminBalance.toNumber(), 1_000_000);
  });

  it("allows to transfer tokens", async () => {
    const municoin = await Municoin.deployed();
    const transferAmount = 3;
    await municoin.transfer(other, transferAmount, { from: admin });
    const adminBalance = await municoin.balanceOf(admin);
    assert.equal(adminBalance.toNumber(), 1_000_000 - transferAmount);
    const otherBalance = await municoin.balanceOf(other);
    assert.equal(otherBalance.toNumber(), transferAmount);
  });

  it("allows to transfer tokens to the admin", async () => {
    const municoin = await Municoin.deployed();
    const transferAmount = 3;
    await municoin.transfer(admin, transferAmount, { from: other });
    const adminBalance = await municoin.balanceOf(admin);
    assert.equal(adminBalance.toNumber(), 1_000_000);
    const otherBalance = await municoin.balanceOf(other);
    assert.equal(otherBalance.toNumber(), 0);
  });

  it("doesn't allow to transfer more tokens than it has", async () => {
    const municoin = await Municoin.deployed();

    try {
      await municoin.transfer(admin, 10, { from: other });
      assert.fail();
    } catch (error) {
      if (error instanceof Error) {
        assert(error.message.includes("revert"));
      } else {
        assert.fail();
      }
    }
  });

  it("emits the transfer event whenever a token is sent", async () => {
    const municoin = await Municoin.deployed();
    const transferAmount = 3;
    const { logs } = await municoin.transfer(other, transferAmount, {
      from: admin,
    });
    assert.equal(logs.length, 1);
    assert.equal(logs[0].event, "Transfer");
    assert.equal(logs[0].args._from, admin);
    assert.equal(logs[0].args._to, other);
    assert.equal(logs[0].args._value.toNumber(), transferAmount);
  });

  it("returns true if the transaction is valid", async () => {
    const municoin = await Municoin.deployed();
    const isValid = await municoin.transfer.call(admin, 3, { from: other });
    assert.equal(isValid, true);
  });

  it("returns true when an approval is correct", async () => {
    const municoin = await Municoin.deployed();
    const isValid = await municoin.approve.call(other, 3, { from: admin });
    assert.equal(isValid, true);
  });

  it("emits the approve event whenever an approval is done", async () => {
    const municoin = await Municoin.deployed();
    const { logs } = await municoin.approve(other, 3, { from: admin });
    assert.equal(logs.length, 1);
    assert.equal(logs[0].event, "Approval");
    assert.equal(logs[0].args._owner, admin);
    assert.equal(logs[0].args._spender, other);
    assert.equal(logs[0].args._value.toNumber(), 3);
  });

  it("allowance should be set correctly", async () => {
    const municoin = await Municoin.deployed();
    const allowance = await municoin.allowance(admin, other);
    assert.equal(allowance.toNumber(), 3);
  });

  it("allows other to transfer from the owner to the other2", async () => {
    const municoin = await Municoin.deployed();
    const initialAdminBalance = (await municoin.balanceOf(admin)).toNumber();
    const initialOtherBalance = (await municoin.balanceOf(other)).toNumber();
    const initialOther2Balance = (await municoin.balanceOf(other2)).toNumber();
    const transferAmount = 3;
    await municoin.transferFrom(admin, other2, transferAmount, {
      from: other,
    });
    const adminBalance = await municoin.balanceOf(admin);
    assert.equal(adminBalance.toNumber(), initialAdminBalance - transferAmount);
    const otherBalance = await municoin.balanceOf(other);
    assert.equal(otherBalance.toNumber(), initialOtherBalance);
    const other2Balance = await municoin.balanceOf(other2);
    assert.equal(
      other2Balance.toNumber(),
      initialOther2Balance + transferAmount
    );
  });

  it("doesn't allow to transfer if allowance is less than transfer value", async () => {
    const municoin = await Municoin.deployed();
    try {
      await municoin.transferFrom(admin, other2, 4, { from: other });
      assert.fail();
    } catch (error) {
      if (error instanceof Error) {
        assert(error.message.includes("revert"));
      } else {
        assert.fail();
      }
    }
  });

  it("emits the transfer event when transferring from other account", async () => {
    const municoin = await Municoin.deployed();
    await municoin.approve(other, 3, { from: admin });
    const transferAmount = 3;
    const { logs } = await municoin.transferFrom(
      admin,
      other2,
      transferAmount,
      {
        from: other,
      }
    );
    assert.equal(logs.length, 1);
    assert.equal(logs[0].event, "Transfer");
    assert.equal(logs[0].args._from, admin);
    assert.equal(logs[0].args._to, other2);
    assert.equal(logs[0].args._value.toNumber(), transferAmount);
  });
});
