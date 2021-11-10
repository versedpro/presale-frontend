import BigNumber from 'bignumber.js'
import { presaleContract, tokenContract, busdContract } from './contracts'
import {callMethod, bnDivdedByDecimals} from './utils'
import { web3, Web3 } from './web3'
import { ethers } from 'ethers'
import WalletConnectProvider from "@walletconnect/web3-provider";

//Getters
export const getBalance = async (address) => {
    console.log("getbalance address", address)
    //const result = await callMethod(tokenContract.contract.methods['balanceOf'], [address]);
    const result = await tokenContract.contract.methods.balanceOf(address).call();
    return new web3.utils.toBN(result);
}

export const checkAllowanceBusd = async(owner) => {
    const spender = presaleContract.address;
    const result = await busdContract.contract.methods.allowance(owner, spender).call();
    return new web3.utils.toBN(result);
}

export const getUserDetail = async (address) => {
    const result = await presaleContract.contract.methods.userDetail(address).call();
    return result;
}

export const getAmountUnlocked = async (address) => new web3.utils.toBN(await presaleContract.contract.methods.unlockedToken(address).call());

export const checkWhitelistMember = async (address) => {
    const result = await presaleContract.contract.methods.whitelist(address).call();
    return result;
}

export const getPresaleTokenPrice = async () => {
    const result = await presaleContract.contract.methods.tokenPrice().call();
    return result;
}
export const getTotalDepositedAmount = async () => {
    const result  = await presaleContract.contract.methods.totalDepositedBusdBalance().call();
    return new web3.utils.toBN(result);
}

//Setters
export const ApproveBusd = async (address, connector) => {
    const provider = new WalletConnectProvider({
        connector,
        rpc: {
            56: "https://bsc-dataseed1.binance.org/"
        },
        chainId: 56,
        infuraId: "8a73bbe5d3264a4a92d9b1eab885ae3a"
    });
    await provider.enable();
    const web3 = new Web3(provider);
    const spender = presaleContract.address;
    const contract = new web3.eth.Contract(busdContract.abi, busdContract.address, {from: address});
    const result = await contract.methods.approve(spender, ethers.constants.MaxUint256).send({from: address})
    return result;
}

export const deposit = async (amount, address) => await presaleContract.contract.methods.deposit(amount).send({ from: address });

export const withdrawToken = async (amount, address) => await presaleContract.contract.methods.withdrawToken(amount).send({ from: address });
