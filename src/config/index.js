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
        97: '0x63C50914D09FBD2E9e5362CE53DC175Ee97091d4'
      },
      emptyAddress: {
        56: '0x0000000000000000000000000000000000000001',
        97: '0x0000000000000000000000000000000000000001'
      }
    }
  }

  module.exports = config;
