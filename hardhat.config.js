require("@nomiclabs/hardhat-waffle");

// The next line is part of the sample project, you don't need it in your
// project. It imports a Hardhat task definition, that can be used for
// testing the frontend.
require('dotenv').config() 
require('@nomiclabs/hardhat-ethers');
require("@nomiclabs/hardhat-etherscan");
// const fs = require("fs");
// const privatekey = fs.readFileSync(".secret").toString().trim();

module.exports = {
  solidity: "0.6.6",
  networks: {
    matic: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts : [process.env.PRIVKEY]
    },
    bsctest: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      chainId: 97,
      gasPrice: 20000000000,
      accounts : [process.env.PRIVKEY]
    },
    ropsten: {
  		url: "https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
  		accounts : [process.env.PRIVKEY]
  	}
  },
  etherscan: {
    apiKey: process.env.BSCSCAN_API_KEY
  }
};
