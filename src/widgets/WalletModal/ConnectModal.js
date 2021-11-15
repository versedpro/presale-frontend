import { useRef } from 'react';
import { Modal } from 'react-responsive-modal';
import { isMobile } from 'react-device-detect';

import "react-responsive-modal/styles.css";

import modalCloseBtn from "../../assets/images/modalCloseBtn.svg"


import WalletCard from './WalletCard';
import { connectors } from './config';

const ConnectModal = ({ login, wallletOpen, setWallletOpen }) => {

  const modalRef = useRef(null);

  return (
    <Modal
      open={wallletOpen}
      onClose={() => setWallletOpen(false)}
      center
      container={modalRef.current}
      closeIcon={
        <button className="navbar-toggler">
          <span className="navbar-toggler-icon toogle-bar-icon"><i className="fas fa-times"></i></span>
        </button>
      }
      className={"wallet-modal"}
    >
      <h1 className={"modalHeading"}>CONNECT WALLET</h1>
      <p className={"modalSlug"}>Connect with your favorite wallet.</p>
      <div className={"ModalBtnWrapper"}>
        {connectors.map((entry, index) => (
          <WalletCard
            key={entry.title}
            desc={entry.desc}
            login={login}
            walletConfig={entry}
            setWallletOpen={setWallletOpen}
            mb={index < connectors.length - 1 ? '8px' : '0'}
          />
        ))}
      </div>
    </Modal>
  );
};

export default ConnectModal;
