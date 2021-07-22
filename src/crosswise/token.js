import BigNumber from 'bignumber.js'
import { stakingContract, tokenContract } from './contracts'
import {callMethod, bnDivdedByDecimals} from './utils'
import { web3 } from './web3'

//Getters
export const getBalance = async (address) => {
    console.log("getbalance address", address)
    //const result = await callMethod(tokenContract.contract.methods['balanceOf'], [address]);
   const result = await tokenContract.contract.methods.balanceOf(address).call();
    return new web3.utils.toBN(result);
}

export const checkAllowance = async(owner, spender) => {
    const result = await tokenContract.contract.methods.allowance(owner, spender).call();
    return bnDivdedByDecimals(new BigNumber(result))
}

//Setters
export const Approve = async (spender, amount, address) => {
    const result = await tokenContract.contract.methods.approve(spender, amount).send({from: address})
    return result;
}


export const tokenGetBalance = async (address) => {
    
}


