import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    mumbai: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: ["d36772eaa33265d6aa2d302794bacc2766124158acaaa5a5d45db4c78a1587f0"],
    },
  },
  etherscan: {
    apiKey: {
      polygonMumbai: '9MTPSJGQPEPPD3JVV8SR2PQTSVEI3B399B'
    }
  }
};

export default config;
