import metaMaskIcon from '../../assets/images/metamask-icon.svg';
import trueWalletIcon from '../../assets/images/truewallet-icon.svg';
import walletConnectIcon from '../../assets/images/walletconnect-icon.svg';

const connectorNames = {
  Injected: 'Injected',
  BSC: 'bsc',
  WalletConnect: 'WalletConnect',
}

const connectors = [
  {
    title: 'MetaMask',
    icon: metaMaskIcon,
    connectorId: connectorNames.Injected,
  },
  {
    title: 'TrustWallet',
    icon: trueWalletIcon,
    connectorId: connectorNames.Injected,
  },
  {
    title: 'WalletConnect',
    icon: walletConnectIcon,
    connectorId: connectorNames.WalletConnect,
  },
];

export default connectors;
export const connectorLocalStorageKey = 'connectorId';
