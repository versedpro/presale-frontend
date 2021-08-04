import { web3 } from './web3';
import config from '../config';
import official_pools from '../config/prizepools'

import presaleContractABI from './abis/Presale.json';
import tokenAbi from './abis/CRSSToken.json';
import prizePoolAbi from './abis/PrizePool.json';
import multipleWinnersAbi from './abis/MultipleWinners.json';

const networkId = config.networkId;

const tokenContractAddress = config.contractAddress.crssToken[networkId];
const ITokenContract = new web3.eth.Contract(tokenAbi, tokenContractAddress);

const presaleContractAddress = config.contractAddress.presale[networkId];
const IPresaleContractAddress = new web3.eth.Contract(presaleContractABI, presaleContractAddress);

const ControlledTokenContractAddress = config.contractAddress.ControlledToken[networkId];

const emptyAddress = config.contractAddress.emptyAddress[networkId]

const tokenContract = {
    address: tokenContractAddress,
    abi: tokenAbi,
    contract: ITokenContract,
    decimals: 18
};

const presaleContract = {
    address: presaleContractAddress,
    abi: presaleContractABI,
    contract: IPresaleContractAddress,
}


const controlledTokenContract = {
    address: ControlledTokenContractAddress
}

const emptyContract = {
    address: emptyAddress
}

export {
    networkId,
    tokenContract,
    presaleContract,
    controlledTokenContract,
    emptyContract
}
