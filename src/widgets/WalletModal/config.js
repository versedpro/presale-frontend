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
    desc: `The web's favorite wallet, get yours <a href='https://metamask.io/download.html' target='_blank'>here</a>`,
    icon: metaMaskIcon,
    connectorId: connectorNames.Injected,
  },
  {
    title: 'TrustWallet',
    desc: `Binance's popular mobile wallet, get yours <a href='https://trustwallet.com/' target='_blank'>here</a>`,
    icon: trueWalletIcon,
    connectorId: connectorNames.Injected,
  },
  {
    title: 'WalletConnect',
    desc: `Use Trust Wallet, Coinomi, Crypto.com & more...`,
    icon: walletConnectIcon,
    connectorId: connectorNames.WalletConnect,
  },
];

export const connectorLocalStorageKey = 'connectorId';
