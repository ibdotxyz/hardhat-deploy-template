import 'dotenv/config';
import {HardhatUserConfig} from 'hardhat/types';
import 'hardhat-deploy';
import '@nomiclabs/hardhat-ethers';
import '@nomiclabs/hardhat-etherscan';

 const config: HardhatUserConfig = {
  defaultNetwork: 'hardhat',
  solidity: {
    version: '0.8.10',
    settings: {
      optimizer: {
        enabled: true
      },
      outputSelection: {
        "*": {
          "*": [
            "evm.methodIdentifiers", "abi"
          ]
        },
      }
    },
  },
  namedAccounts: {
    deployer: 0,
    multisig: {
      hardhat: 0,
      mainnet: '0xA5fC0BbfcD05827ed582869b7254b6f141BA84Eb',
      ftm: '0xA5fC0BbfcD05827ed582869b7254b6f141BA84Eb',
      avax: '0xf3472A93B94A17dC20F9Dc9D0D48De42FfbD14f4'
    }
  },
  networks: {
    hardhat: {
      forking: {
        url: `https://rpc.ftm.tools/`
      }
    },
    mainnet: {
      url: `https://rpc.ankr.com/eth`,
      accounts:
        process.env.DEPLOY_PRIVATE_KEY == undefined ? [] : [`0x${process.env.DEPLOY_PRIVATE_KEY}`]
    },
    avax: {
      url: 'https://api.avax.network/ext/bc/C/rpc',
      chainId: 43114,
      accounts:
        process.env.DEPLOY_PRIVATE_KEY == undefined ? [] : [`0x${process.env.DEPLOY_PRIVATE_KEY}`]
    },
    ftm: {
      url: 'https://rpc.ftm.tools/',
      accounts:
        process.env.DEPLOY_PRIVATE_KEY == undefined ? [] : [`0x${process.env.DEPLOY_PRIVATE_KEY}`]
    }
  }
};

export default config;
