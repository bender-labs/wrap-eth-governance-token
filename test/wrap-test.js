const { expect } = require("chai");
const { BigNumber } = require("ethers");

describe("Wrap", function() {
  it("Should mint total supply to provided address", async function() {
    const WrapFactory = await ethers.getContractFactory("WrapGovernanceToken");
    const destination = "0x000000000000000000000000000000000000dead";
    const wrap = await WrapFactory.deploy(destination);

    await wrap.deployed();

    const totalSupply = await wrap.totalSupply();
    expect(totalSupply).to.equal(BigNumber.from("10000000000000000"));
    expect(await wrap.balanceOf(destination)).to.equal(totalSupply);
  });
});
