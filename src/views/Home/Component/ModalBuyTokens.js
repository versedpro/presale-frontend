import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Col } from 'reactstrap';
import { useSelector } from 'react-redux';

const ModalBuyTokens = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const address = useSelector(state => state.authUser.address);

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button onClick={toggle} className="btn btn_primary buy-token-button">{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Buy Tokens</ModalHeader>
        <ModalBody>
          <p>Wallet address</p>
          <div className="wallet-address" style={{ marginBottom: "20px" }}>
            <span>{address}</span>
          </div>
          <p>Amount</p>
          <div className="input-group">
            <input type="text" className="form-control buy-token-amount" />
            <div className="input-group-append">
              <span className="input-group-text buy-token-currency">
                <p>USD</p>
                <img src="assets/images/us-dollar@2x.png" className="rounded-circle" style={{ width: "20px", height: "20px" }} />
              </span>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <p>All transactions are private and secure</p>
          <Button className="btn btn_primary buy-tokens" onClick={toggle}>Buy Tokens</Button>{' '}
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalBuyTokens;