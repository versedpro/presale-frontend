import { ConnectorNames } from '@pancakeswap/uikit';

import metaMaskIcon from '../../assets/images/metamask-icon.svg';
import trueWalletIcon from '../../assets/images/truewallet-icon.svg';
import walletConnectIcon from '../../assets/images/walletconnect-icon.svg';

const connectors = [
  {
    title: 'MetaMask',
    icon: metaMaskIcon,
    connectorId: ConnectorNames.Injected,
  },
  {
    title: 'TrustWallet',
    icon: trueWalletIcon,
    connectorId: ConnectorNames.Injected,
  },
  {
    title: 'WalletConnect',
    icon: walletConnectIcon,
    connectorId: ConnectorNames.WalletConnect,
  },
];

export default connectors;
export const connectorLocalStorageKey = 'connectorId';
