require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
const mnemonic = process.env.MNEMONIC;
const token = process.env.INFURA_TOKEN;
const etherscan = process.env.ETHERSCAN_API_KEY;

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.7.6",
  networks: {
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${token}`,
      accounts: {
        mnemonic
      }
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/${token}`,
      accounts: {
        mnemonic
      }
    }
  },
  etherscan: {
    apiKey: etherscan
  }
};

