import { connectorLocalStorageKey } from './config';

const WalletCard = ({ login, walletConfig, setWallletOpen }) => {
  const { title, icon } = walletConfig;
  return (
    <div
      className="modalContent wallet-item"
      onClick={() => {
        login(walletConfig.connectorId);
        window.localStorage.setItem(
          connectorLocalStorageKey,
          walletConfig.connectorId
        );
        setWallletOpen(false);
      }}
      id={`wallet-connect-${title.toLocaleLowerCase()}`}
      role="button"
      tabIndex={0}
    >
      <div className="ModalBtn">
        <img src={icon} alt="" />
      </div>
      <span className="modalBtnText">{title}</span>
    </div>
  );
};

export default WalletCard;
