async function main() {

    const [deployer] = await ethers.getSigners();
    const tokenHolder = process.env.TOKEN_HOLDER;

    console.log(
        "Deploying contracts with the account:",
        deployer.address
    );

    console.log("Account balance:", (await deployer.getBalance()).toString());

    const Wrap = await ethers.getContractFactory("WrapGovernanceToken");
    const wrap = await Wrap.deploy(tokenHolder);

    console.log("Wrap address:", wrap.address);
}

main()
.then(() => process.exit(0))
.catch(error => {
    console.error(error);
    process.exit(1);
});