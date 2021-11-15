import Cookies from 'universal-cookie';
import { connectorLocalStorageKey } from './config';

const WalletCard = ({ login, walletConfig, setWallletOpen }) => {

  const cookies = new Cookies();
  const { title, icon, desc } = walletConfig;

  const handleClick = () => {
    login(walletConfig.connectorId);
    cookies.set(
      connectorLocalStorageKey,
      walletConfig.connectorId
      , { path: '/' });
    setWallletOpen(false);
  }

  return (
    <div
      className="modalContent wallet-item"
      id={`wallet-connect-${title.toLocaleLowerCase()}`}
      role="button"
      tabIndex={0}
    >
      <div className="ModalBtn" onClick={handleClick}>
        <img src={icon} alt="" />
      </div>
      <span className="modalBtnText" onClick={handleClick}>{title}</span>
      <span className="modalBtnText2" dangerouslySetInnerHTML={{ __html: desc }}></span>
    </div>
  );
};

export default WalletCard;
