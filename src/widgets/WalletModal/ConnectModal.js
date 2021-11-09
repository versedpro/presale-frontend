import { useRef } from 'react';
import { Modal } from 'react-responsive-modal';

import "react-responsive-modal/styles.css";

import modalCloseBtn from "../../assets/images/modalCloseBtn.svg"


import WalletCard from './WalletCard';
import config from './config';

const ConnectModal = ({ login, wallletOpen, setWallletOpen }) => {
  
  const modalRef = useRef(null);

  return (
    <Modal
      open={wallletOpen}
      onClose={() => setWallletOpen(false)}
      center
      container={modalRef.current}
      closeIcon={<img src={modalCloseBtn} />}
    >
      <h1 className={'modalHeading'}>CONNECT WALLET</h1>
      <p className={'modalSlug'}>Connect with your favorite wallet.</p>
      <div className="ModalBtnWrapper">
        {config.map((entry, index) => (
          <WalletCard
            key={entry.title}
            login={login}
            walletConfig={entry}
            setWallletOpen={setWallletOpen}
            mb={index < config.length - 1 ? '8px' : '0'}
          />
        ))}
      </div>
    </Modal>
  );
};

export default ConnectModal;
