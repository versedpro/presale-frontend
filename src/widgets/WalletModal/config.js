import metaMaskIcon from '../../assets/images/metamask-icon.svg';
import trueWalletIcon from '../../assets/images/truewallet-icon.svg';
import walletConnectIcon from '../../assets/images/walletconnect-icon.svg';

const connectorNames = {
  Injected: 'Injected',
  BSC: 'bsc',
  WalletConnect: 'WalletConnect',
}

export const connectors = [
  {
    title: 'MetaMask',
    desc: `Use with desktop or mobile MetaMask Dapp browser`,
    icon: metaMaskIcon,
    connectorId: connectorNames.Injected,
  },
  {
    title: 'TrustWallet',
    desc: `Use with TrustWallet Dapp browser only`,
    icon: trueWalletIcon,
    connectorId: connectorNames.Injected,
  },
  {
    title: 'WalletConnect',
    desc: `Use with mobile chrome to connect TrustWallet, Coinomi, Crypto.com & more`,
    icon: walletConnectIcon,
    connectorId: connectorNames.WalletConnect,
  },
];

export const connectorLocalStorageKey = 'connectorId';
