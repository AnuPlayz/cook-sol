import { ethers } from "hardhat";

async function main() {
  const admin = "0xc9B0b0075CC479B277f721C76dAca7A9adc3f023"

  const Test = await ethers.deployContract("sum");
  await Test.waitForDeployment();

  let addr = await Test.getAddress()
  console.log("Test deployed to:", addr);

  let num1 = await Test.firstNoSet(10);
  console.log("Number 1 set as 10");

  let num2 = await Test.secondNoSet(20);
  console.log("Number 2 set as 20");

  let sum = await Test.add();
  console.log("Sum of numbers is ")
  console.log(sum);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
