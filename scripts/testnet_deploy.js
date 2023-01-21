const hre = require("hardhat");

async function main() {
  const TipMe = await hre.ethers.getContractFactory("TipMe");
  const contract = await TipMe.deploy();

  await contract.deployed();
  console.log("Address of contract:", contract.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
