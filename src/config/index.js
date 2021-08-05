require('dotenv').config();

const web3Provider = process.env.REACT_APP_NETWORK_ID === '56'
  ? process.env.REACT_APP_BSC_WEB3_PROVIDER
  : process.env.REACT_APP_BSC_TEST_WEB3_PROVIDER

  const config = {
    web3Provider: web3Provider,
    networkId: process.env.REACT_APP_NETWORK_ID,
    contractAddress: {
      crssToken: {
        56:'',
        97:'0x68C8fFd07EAA55b1faA7e0016016C372E381B2d2'
      },
      presale: {
        56: '',
        97: '0x178cc6C22b9699D262a1511106D46F77D6bEAeAE'
      }
    }
  }

  module.exports = config;
