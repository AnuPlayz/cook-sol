import { ethers } from "hardhat";

async function main() {
  const admin = "0xc9B0b0075CC479B277f721C76dAca7A9adc3f023"

  const add = await ethers.deployContract("sum");
  await add.waitForDeployment();

  let addr = await add.getAddress()
  console.log("Add deployed to:", addr);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
