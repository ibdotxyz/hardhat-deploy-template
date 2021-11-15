import 'dotenv/config';
import {HardhatUserConfig} from 'hardhat/types';
import 'hardhat-deploy';
import '@nomiclabs/hardhat-ethers';
import '@nomiclabs/hardhat-etherscan';

 const config: any = {
  defaultNetwork: 'hardhat',
  solidity: {
    version: '0.8.9',
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
    admin: {
      hardhat: '0x197939c1ca20C2b506d6811d8B6CDB3394471074',
      avalanche: '0x197939c1ca20C2b506d6811d8B6CDB3394471074',
      fuji: '0x197939c1ca20C2b506d6811d8B6CDB3394471074'
    }
  },
  networks: {
    hardhat: {
      forking: {
        url: `https://mainnet-eth.compound.finance`
      }
    },
    mainnet: {
      url: `https://mainnet-eth.compound.finance`,
      accounts: [`0x${process.env.DEPLOY_PRIVATE_KEY}`]
    },
    arbitrum: {
      url: 'https://arb1.arbitrum.io/rpc',
      accounts: [`0x${process.env.DEPLOY_PRIVATE_KEY}`]
    },
    fuji: {
      url: 'https://api.avax-test.network/ext/bc/C/rpc',
      gasPrice: 225000000000,
      chainId: 43113,
      accounts: [`0x${process.env.DEPLOY_PRIVATE_KEY}`]
    },
    avalanche: {
      url: 'https://api.avax.network/ext/bc/C/rpc',
      gasPrice: 225000000000,
      chainId: 43114,
      accounts: [`0x${process.env.DEPLOY_PRIVATE_KEY}`]
    }
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY
  }
};

export default config;
