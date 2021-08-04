import React, { Component, Fragment, useState, useContext, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import { Container } from 'reactstrap';
import 'react-accessible-accordion/dist/fancy-example.css';
import { Row, Col } from 'reactstrap';
import BigNumber from 'bignumber.js';
import '../css/style.css'
import { ThemeContext } from "../../../contexts/ThemeContext";
import styled from "styled-components";
import "react-step-progress-bar/styles.css";
import { useForm } from "react-hook-form";
import backgroundCloud from '../../../assets/images/crosswise/backgroud-could.png';
import Planet8 from '../../../assets/images/crosswise/planet-8.png';
import { web3 } from "../../../crosswise/web3";
import { getUserDetail, getAmountUnlocked, deposit, withdrawToken } from "../../../crosswise/token";

const Section = styled.div`
`;

const SectionHeader = (props) => {
  const address = useSelector(state => state.authUser.address);
  const { isDark, toggleTheme } = useContext(ThemeContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [amountToDeposit, setAmountToDeposit] = useState();

  const [totalRewardAmount, setTotalRewardAmount] = useState(new BigNumber(0));
  const [withdrawAmount, setWithdrawAmount] = useState(new BigNumber(0));
  const [depositTime, setDepositTime] = useState();
  const [depositAmount, setDepositAmount] = useState(new BigNumber(0));
  const [unlockedAmount, setUnlockedAmount] = useState(new BigNumber(0));

  useEffect(() => {
     loadUserDetail();
  }, [address]);

  const loadUserDetail = useCallback(async () => {
    const result = await getUserDetail(address);
    setTotalRewardAmount(web3.utils.fromWei(web3.utils.toBN(result.totalRewardAmount)));
    setWithdrawAmount(web3.utils.fromWei(web3.utils.toBN(result.withdrawAmount)));
    setDepositTime(new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(result.depositTime));
    setDepositAmount(web3.utils.fromWei(web3.utils.toBN(result.depositAmount)));

    const amountUnlocked = await getAmountUnlocked(address);
    setUnlockedAmount(web3.utils.fromWei(amountUnlocked));
  });

  const buyTokens = async () => {
    try {
      const result = await deposit(web3.utils.toWei(amountToDeposit), address);
    } catch (error) {
      console.log(error);
      alert('Transaction has been reverted by the EVM. Please take a look at broswer console and refresh page.');
    }
  }

  const claimToken = async () => {
    const result = await withdrawToken(unlockedAmount, address);
  }

  return (
      
    <Section className="header_section section-presale" style={isDark? {backgroundImage: 'url('+ backgroundCloud +')'}: {}}>
      <Container>
        <Row>
          <div className="presale-info">
            <p>Wallet address</p>
            <div className="wallet-address" style={{ marginBottom: "20px" }}>
              <span>{address}</span>
            </div>
            <form onSubmit={handleSubmit(buyTokens)}>
              <p>Amount</p>
              <div className="input-group">
                <input {...register('amount', { pattern: /\d+/ })} className="form-control buy-token-amount" value={amountToDeposit} onChange={event => setAmountToDeposit(event.target.value)} />
                <div className="input-group-append">
                  <span className="input-group-text buy-token-currency">
                    <p>USD</p>
                    <img src="assets/images/us-dollar@2x.png" className="rounded-circle" style={{ width: "20px", height: "20px" }} />
                  </span>
                </div>
              </div>
              {errors.amount && <p style={{ color: "red" }}>Please enter number for amount.</p>}
              <div className="buy-tokens">
                <p>All transactions are private and secure</p>
                <button className="btn btn_primary" type="submit">Buy Tokens</button>
              </div>
            </form>
            <Row className="presale_info">
              <Col className="rectangle">
                <p>Total Reward Amount</p>
                <h6>{totalRewardAmount.toString()}</h6>
              </Col>
              <Col className="rectangle">
                <p>Withdraw Amount</p>
                <h6>{withdrawAmount.toString()}</h6>
              </Col>
            </Row>
            <Row>
              <Col className="rectangle">
                <p>Deposit Amount</p>
                <h6>{depositAmount.toString()} USD</h6>
              </Col>
              <Col className="rectangle">
                <p>Deposit Time</p>
                <h6>{depositTime}</h6>
              </Col>
            </Row>
            <Row>
              <Col className="rectangle">
                <p>Unlocked Token Amount</p>
                <h6>{unlockedAmount.toString()}</h6>
              </Col>
              <Col>
                <button className="btn btn_primary claim-button" onClick={claimToken}>Claim</button>
              </Col>
            </Row>
          </div>
          <img src={Planet8} className="planet8_img shadow"/>
        </Row>
      </Container>
    </Section>
  );
}

export default SectionHeader;