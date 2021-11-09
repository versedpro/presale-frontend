import { InjectedConnector } from '@web3-react/injected-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { BscConnector } from '@binance-chain/bsc-connector';
import getNodeUrl from './getRpcUrl';

const connectorNames = {
  Injected: 'Injected',
  BSC: 'bsc',
  WalletConnect: 'WalletConnect',
}

const POLLING_INTERVAL = 12000;
const REACT_APP_CHAIN_ID = 56;
const rpcUrl = getNodeUrl();
const chainId = parseInt(REACT_APP_CHAIN_ID, 10);

const injected = new InjectedConnector({ supportedChainIds: [chainId] });

const walletconnect = new WalletConnectConnector({
  rpc: { [chainId]: rpcUrl },
  bridge: 'https://bridge.walletconnect.org/',
  qrcode: true,
  pollingInterval: POLLING_INTERVAL,
});

const bscConnector = new BscConnector({ supportedChainIds: [chainId] });

export const connectorsByName = {
  [connectorNames.Injected]: injected,
  [connectorNames.WalletConnect]: walletconnect,
  [connectorNames.BSC]: bscConnector,
};

export const getLibrary = (provider) => {
  return provider;
};
