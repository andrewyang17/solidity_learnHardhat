/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require("@nomiclabs/hardhat-waffle");

const INFURA_URL = 'your project url in infura';
const PRIVATE_KEY = 'your wallet private key';

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: INFURA_URL,
      accounts: [`0x${PRIVATE_KEY}`]
    }
  }
};
