import BigNumber from 'bignumber.js'
import { presaleContract, tokenContract } from './contracts'
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

export const getUserDetail = async (address) => {
    const result = await presaleContract.contract.methods.userDetail(address).call();
    return result;
}

export const getAmountUnlocked = async (address) => new web3.utils.toBN(await presaleContract.contract.methods.unlockedToken(address).call());

//Setters
export const Approve = async (spender, amount, address) => {
    const result = await tokenContract.contract.methods.approve(spender, amount).send({from: address})
    return result;
}

export const deposit = async (amount, address) => await presaleContract.contract.methods.deposit(amount).send({ from: address });

export const withdrawToken = async (amount, address) => await presaleContract.contract.methods.withdrawToken(amount).send({ from: address });
