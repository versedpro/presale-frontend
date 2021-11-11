import WalletConnect from "@walletconnect/client";
import QRCodeModal from "@walletconnect/qrcode-modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3 from 'web3';
import { config, connectorNames } from '../config';
import { connectorLocalStorageKey } from "../widgets/WalletModal/config";
import Cookies from 'universal-cookie';

const providerUrl = config.web3Provider;
const web3 = new Web3(window.ethereum || providerUrl);

const connector = new WalletConnect({
  bridge: "https://bridge.walletconnect.org", // Required
  qrcodeModal: QRCodeModal,
});

const getWeb3 = async () => {
  const cookies = new Cookies();
  const connectorId = cookies.get(connectorLocalStorageKey);
  const chainId = parseInt(process.env.REACT_APP_NETWORK_ID, 10);
  
  if (
    connectorId === connectorNames.WalletConnect &&
    connector.accounts.length > 0
  ) {
    const provider = new WalletConnectProvider({
      connector,
      rpc: {
        56: providerUrl
      },
      chainId: 56,

      infuraId: "8a73bbe5d3264a4a92d9b1eab885ae3a"
    });
    await provider.enable();
    return new Web3(provider);
  } else {
    return web3;
  }
}

export {
  Web3,
  providerUrl,
  web3,
  connector,
  getWeb3
};
