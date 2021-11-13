import metaMaskIcon from '../../assets/images/metamask-icon.svg';
import trueWalletIcon from '../../assets/images/truewallet-icon.svg';
import walletConnectIcon from '../../assets/images/walletconnect-icon.svg';

const connectorNames = {
  Injected: 'Injected',
  BSC: 'bsc',
  WalletConnect: 'WalletConnect',
}

export const desktopConnectors = [
  {
    title: 'MetaMask',
    desc: `The web's favorite wallet, get yours [<a href="https://google.com" __blank>here</a>]`,
    icon: metaMaskIcon,
    connectorId: connectorNames.Injected,
  },
  // {
  //   title: 'TrustWallet',
  //   desc: `TrustWallet`,
  //   icon: trueWalletIcon,
  //   connectorId: connectorNames.Injected,
  // },
  {
    title: 'WalletConnect',
    desc: `Use Trust Wallet, Coinomi, Crypto.com & more...`,
    icon: walletConnectIcon,
    connectorId: connectorNames.WalletConnect,
  },
];

export const mobileConnectors = [
  {
    title: 'WalletConnect',
    desc: `Use Trust Wallet, Coinomi, Crypto.com & more...`,
    icon: walletConnectIcon,
    connectorId: connectorNames.WalletConnect,
  },
];

export const connectorLocalStorageKey = 'connectorId';
