require('dotenv').config();

const web3Provider = process.env.REACT_APP_NETWORK_ID === '56'
  ? process.env.REACT_APP_BSC_WEB3_PROVIDER
  : process.env.REACT_APP_BSC_TEST_WEB3_PROVIDER

  const config = {
      web3Provider: web3Provider,
      networkId: process.env.REACT_APP_NETWORK_ID,
      contractAddress: {
          amcToken: {
              56:'0x9375234c503dfa829D7645393DDeE939d0f52100',
              97:'0x9375234c503dfa829D7645393DDeE939d0f52100'
          },
          staking: {
              56: '0x0DA8828375344f8Ec56c5540e6BDE79dA51b82A9',
              97: '0x0DA8828375344f8Ec56c5540e6BDE79dA51b82A9'
          },
          ControlledToken: {
              56: '0x143214091af38ddc3007ea6ba264124ab0298627',
              97: '0x143214091af38ddc3007ea6ba264124ab0298627'
          },
          emptyAddress: {
              56: '0x0000000000000000000000000000000000000001',
              97: '0x0000000000000000000000000000000000000001'
          }

      }
  }

  module.exports = config;
