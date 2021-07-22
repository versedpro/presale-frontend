import { web3 } from './web3';
import config from '../config';
import official_pools from '../config/prizepools'

import stakingContractAbi from './abis/AMCStaking.json';
import tokenAbi from './abis/AMCToken.json';
import prizePoolAbi from './abis/PrizePool.json';
import multipleWinnersAbi from './abis/MultipleWinners.json';


const networkId = config.networkId;

const tokenContractAddress = config.contractAddress.amcToken[networkId];
const ITokenContract = new web3.eth.Contract(tokenAbi, tokenContractAddress);

const stakingContractAddress = config.contractAddress.staking[networkId];
const IStakingContractAddress = new web3.eth.Contract(stakingContractAbi, stakingContractAddress);


const ControlledTokenContractAddress = config.contractAddress.ControlledToken[networkId];

const emptyAddress = config.contractAddress.emptyAddress[networkId]

const tokenContract = {
    address: tokenContractAddress,
    abi: tokenAbi,
    contract: ITokenContract,
    decimals: 18
};

const stakingContract = {
    address: stakingContractAddress,
    abi: stakingContractAbi,
    contract: IStakingContractAddress,
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
    stakingContract,
    controlledTokenContract,
    emptyContract
}
