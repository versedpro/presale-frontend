import React, { useState, useContext, useEffect, useCallback } from "react";
import { format } from 'date-fns';
import { useSelector } from "react-redux";
import { Container, Tooltip } from 'reactstrap';
import CopyToClipboard from "react-copy-to-clipboard";
import 'react-accessible-accordion/dist/fancy-example.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Row, Col } from 'reactstrap';
import BigNumber from 'bignumber.js';
import useRefresh from '../../../redux/useRefresh'
import '../css/style.css'
import { ThemeContext } from "../../../contexts/ThemeContext";
import "react-step-progress-bar/styles.css";
import { useForm } from "react-hook-form";
import { web3 } from "../../../crosswise/web3";
import {
  getUserDetail,
  getUserDetail2,
  getAmountUnlocked,
  getAmountUnlocked2,
  getTotalDepositedAmount,
  getTotalDepositedAmount2,
  getTotalRewardAmount,
  getTotalRewardAmount2,
  deposit2,
  withdrawToken,
  withdrawToken2,
  checkAllowanceBusd2,
  approveBusd2,
  checkWhitelistMember2,
} from "../../../crosswise/token";
import getTimePeriods from "../../../widgets/getTimePeriods";
import useCountDown from "../../../widgets/useCountDown";

const SectionHeader = (props) => {
  const address = useSelector(state => state.authUser.address);
  const { isDark, toggleTheme } = useContext(ThemeContext);
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const [copyText, setCopytext] = useState('Click to copy.');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { fastRefresh } = useRefresh()
  const [amountToDeposit, setAmountToDeposit] = useState();
  const [crssAllowrance, setCrssAllowrance] = useState(web3.utils.toBN(0));
  
  const [depositTime, setDepositTime] = useState(0);
  const [depositAmount, setDepositAmount] = useState(new BigNumber(0));
  const [unlockedAmount, setUnlockedAmount] = useState(new BigNumber(0));
  const [rewardAmount, setRewardAmount] = useState(new BigNumber(0));
  const [withdrawAmount, setWithdrawAmount] = useState(new BigNumber(0));
  const [totalDepositedBusdBalance, setTotalDepositedBusdBalance] = useState(new BigNumber(0));
  const [totalRewardAmount, setTotalRewardAmount] = useState(new BigNumber(0));

  const [depositTime2, setDepositTime2] = useState(0);
  const [depositAmount2, setDepositAmount2] = useState(new BigNumber(0));
  const [unlockedAmount2, setUnlockedAmount2] = useState(new BigNumber(0));
  const [rewardAmount2, setRewardAmount2] = useState(new BigNumber(0));
  const [withdrawAmount2, setWithdrawAmount2] = useState(new BigNumber(0));
  const [totalDepositedBusdBalance2, setTotalDepositedBusdBalance2] = useState(new BigNumber(0));
  const [totalRewardAmount2, setTotalRewardAmount2] = useState(new BigNumber(0));

  const secondsRemaining = useCountDown(depositTime + 2629800);
  const { days, hours } = getTimePeriods(secondsRemaining);
  
  const secondsRemaining2 = useCountDown(depositTime2 + 2629800);
  const { days: days2, hours: hours2 } = getTimePeriods(secondsRemaining2);

  const toggle = () => {
    setTooltipOpen(!tooltipOpen);
  }

  useEffect(() => {
    loadUserDetail();
  }, [address, fastRefresh]);

  const loadUserDetail = useCallback(async () => {
    const tokenAllowrance = await checkAllowanceBusd2(address);
    
    setCrssAllowrance(tokenAllowrance);
    
    const result = await getUserDetail(address);
    const amountUnlocked = await getAmountUnlocked(address);
    setRewardAmount(web3.utils.fromWei(web3.utils.toBN(result.totalRewardAmount)));
    setWithdrawAmount(web3.utils.fromWei(web3.utils.toBN(result.withdrawAmount)));
    setDepositAmount(web3.utils.fromWei(web3.utils.toBN(result.depositAmount)));
    setUnlockedAmount(web3.utils.fromWei(amountUnlocked));
    setDepositTime(parseInt(result.depositTime, 10));
    setTotalDepositedBusdBalance(web3.utils.fromWei(web3.utils.toBN(await getTotalDepositedAmount())));
    setTotalRewardAmount(web3.utils.fromWei(web3.utils.toBN(await getTotalRewardAmount())));

    const result2 = await getUserDetail2(address);
    const amountUnlocked2 = await getAmountUnlocked2(address);
    setRewardAmount2(web3.utils.fromWei(web3.utils.toBN(result2.totalRewardAmount)));
    setWithdrawAmount2(web3.utils.fromWei(web3.utils.toBN(result2.withdrawAmount)));
    setDepositAmount2(web3.utils.fromWei(web3.utils.toBN(result2.depositAmount))); 
    setUnlockedAmount2(web3.utils.fromWei(amountUnlocked2));
    setDepositTime2(parseInt(result2.depositTime, 10));
    setTotalDepositedBusdBalance2(web3.utils.fromWei(web3.utils.toBN(await getTotalDepositedAmount2())));
    setTotalRewardAmount2(web3.utils.fromWei(web3.utils.toBN(await getTotalRewardAmount2())));
  }, [address]);

  const approveTokens = async () => {
    await approveBusd2(address);
  }

  const buyTokens = async () => {
    if (amountToDeposit < 1) return;
    const checkWhitelist = await checkWhitelistMember2(address);
    if (!checkWhitelist) {
      alert("Your wallet is not yet whitelisted. Please click on \"Get Whitelisted\" on our homepage to whitelist your wallet, or wait for confirmation if you have already done so. ");
      return;
    }
    try {
      await deposit2(web3.utils.toWei(amountToDeposit), address);
    } catch (error) {
      console.log(error);
      alert('Transaction has been reverted by the EVM. Please take a look at browser console and refresh page.');
    }
  }

  const claimToken2 = async () => {
    if (parseFloat(unlockedAmount2.toString()) < 1) {
      alert('You currently do not have any unlocked tokens to withdraw.');
      return;
    }

    await withdrawToken2(unlockedAmount2, address);
  }

  const claimToken = async () => {
    if (parseFloat(unlockedAmount.toString()) < 1) {
      alert('You currently do not have any unlocked tokens to withdraw.');
      return;
    }

    await withdrawToken(unlockedAmount, address);
  }

  return (
    <section className="header_section section-presale h-100">
      <Tooltip placement="top" isOpen={tooltipOpen} target="address-tooltip" toggle={toggle}>
        {copyText}
      </Tooltip>

      <Container className="buy-token-container">
        <Row className="w-100">
          <div className="presale-wrap w-100 mt-3">
            <div className="presale-info">
              <h5 className="title"> Buy Tokens (Round 2)</h5>
              <p>Wallet address</p>
              <div className="wallet-address">
                <span>{address}</span>
              </div>
              <form onSubmit={(crssAllowrance > web3.utils.toBN(100))
                ? handleSubmit(buyTokens)
                : handleSubmit(approveTokens)}
              >
                <p>Amount</p>
                <div className="input-group custom-address-section">
                  <input
                    {...register('amount', { required: true, pattern: /\d+/ })}
                    className="form-control buy-token-amount"
                    value={amountToDeposit}
                    onChange={event => setAmountToDeposit(event.target.value)}
                  />
                  <div className="input-group-append">
                    <span className="input-group-text buy-token-currency">
                      <p>BUSD</p>
                      <img
                        src="assets/images/busdsm.png"
                        className="rounded-circle"
                        style={{ width: "20px", height: "20px" }}
                        alt=""
                      />
                    </span>
                  </div>
                </div>
                {crssAllowrance.toString() !== "0"
                  ? (
                      errors.amount && <p style={{ color: "red" }}>
                      Please enter the amount of BUSD you wish to invest.</p>
                    ) : (<p></p>)}
                <div className="buy-tokens">
                  {
                    crssAllowrance.toString() === "0" ? (<button className="btn btn_primary presale-btns" onClick={approveTokens}>
                      Approve Contract </button>) :
                      (
                        <button className="btn btn_primary buy-token-btn presale-btns" type="submit">
                          Buy Tokens
                        </button>
                      )
                  }
                </div>
              </form>
            </div>

            <div className="presale-sub-desc">
              <p>
                Transactions are anonymous and secure. Tokens are vested within <b className="textBlue">5</b> months linearly, with <b className="textBlue">20%</b> unlocked every <b className="textBlue">30</b> days, starting from time of purchase. That means every <b className="textBlue">30</b> days, <b className="textBlue">20%</b> of that batch of tokens will be unlocked and ready to withdraw to your wallet. Please add our token address to your wallet so that your tokens are visible in your assets when you withdraw them:
              </p>
              <p className="presale-address mt-3">
                <CopyToClipboard
                  text={'0x0999ba9aEA33DcA5B615fFc9F8f88D260eAB74F1'}
                  id="address-tooltip"
                  onCopy={() => {
                    setCopytext('Copied');
                  }}
                  onMouseOut={() => {
                    setCopytext('Click to copy.');
                  }}
                >
                  <b className="textBlue">0x0999ba9aEA33DcA5B615fFc9F8f88D260eAB74F1</b>
                </CopyToClipboard>
              </p>
              <p>
                We recommend leaving your tokens until we launch in December. At that point you can withdraw the unlocked balance and use it to farm or provide liquidity to earn more <b className="textBlue">CRSS</b>!
              </p>
            </div>
          </div>
          <div className="d-flex flex-row justify-content-center flex-wrap w-100">
            <div className="d-flex flex-column align-items-center presale-column">
              <div className="presale-info mobile">
                <h5 className="title">
                  {`My Tokens (Round 2)`}
                </h5>
                <div className="presale_round2">
                  <div className="presale_info carousel-first">
                    <div className="rectangle">
                      <p>Total Deposited</p>
                      <h6>{parseFloat(depositAmount2.toString()).toFixed(2)} BUSD</h6>
                    </div>
                    <div className="rectangle">
                      <p>Total Received</p>
                      <h6>{parseFloat(rewardAmount2.toString()).toFixed(2)} CRSS</h6>
                    </div>
                  </div>

                  <div className="presale_info carousel-second">
                    <div className="rectangle">
                      <p>Unlocked Tokens</p>
                      <h6>{parseFloat(unlockedAmount2.toString()).toFixed(2)} CRSS</h6>
                    </div>
                    <div className="rectangle">
                      <p>Total Withdrawn</p>
                      <h6>{parseFloat(withdrawAmount2.toString()).toFixed(2)} CRSS</h6>
                    </div>
                  </div>

                  <div className="claim_section">
                    <button
                      className={`btn btn_primary claim-button presale-btns
                        ${parseFloat(unlockedAmount2.toString()) < 1 ? 'disabled' : ''}`}
                      onClick={claimToken2}
                    >
                      Withdraw Tokens
                    </button>
                  </div>
                </div>
              </div>
              <div className="presale-vesting mb-3">
                <Row className="mt-3 no-gutters">
                  <Col sm={3} xs={12}>
                    <div className="text-center presale-vesting-rectangle vesting-date">
                      <p>Date</p>
                      <h6>{depositTime2 > 0 ? `${format(depositTime2 * 1000, 'dd MMM yyyy HH:mm')} UTC` : '---'}</h6>
                    </div>
                  </Col>
                  <Col sm={3} xs={12}>
                    <div className="text-center presale-vesting-rectangle vesting-date">
                      <p>Deposited</p>
                      <h6>{parseFloat(totalDepositedBusdBalance2.toString()).toFixed(2)} BUSD</h6>
                    </div>
                  </Col>
                  <Col sm={3} xs={12}>
                    <div className="text-center presale-vesting-rectangle vesting-date">
                      <p>Received</p>
                      <h6>{parseFloat(totalRewardAmount2.toString()).toFixed(2)} CRSS</h6>
                    </div>
                  </Col>
                  <Col sm={3} xs={12}>
                    <div className="text-center presale-vesting-rectangle vesting-date">
                      <p>Unlocks In</p>
                      <h6>{days2 ? days2 : 0} days {hours2 ? hours2 : 0} hours</h6>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>

            <div className="d-flex flex-column align-items-center presale-column">
              <div className="presale-info mobile">
                <h5 className="title">
                  {`My Tokens (Round 1)`}
                </h5>
                <div className="presale_round1">
                  <div className="presale_info carousel-first">
                    <div className="rectangle">
                      <p>Total Deposited</p>
                      <h6>{parseFloat(depositAmount.toString()).toFixed(2)} BUSD</h6>
                    </div>
                    <div className="rectangle">
                      <p>Total Received</p>
                      <h6>{parseFloat(rewardAmount.toString()).toFixed(2)} CRSS</h6>
                    </div>
                  </div>

                  <div className="presale_info carousel-second">
                    <div className="rectangle">
                      <p>Unlocked Tokens</p>
                      <h6>{parseFloat(unlockedAmount.toString()).toFixed(2)} CRSS</h6>
                    </div>
                    <div className="rectangle">
                      <p>Total Withdrawn</p>
                      <h6>{parseFloat(withdrawAmount.toString()).toFixed(2)} CRSS</h6>
                    </div>
                  </div>

                  <div className="claim_section">
                    <button
                      className={`btn btn_primary claim-button presale-btns
                        ${parseFloat(unlockedAmount.toString()) < 1 ? 'disabled' : ''}`}
                      onClick={claimToken}
                    >
                      Withdraw Tokens
                    </button>
                  </div>
                </div>
              </div>
              <div className="presale-vesting mb-3">
                <Row className="mt-3 no-gutters">
                  <Col sm={3} xs={12}>
                    <div className="text-center presale-vesting-rectangle vesting-date">
                      <p>Date</p>
                      <h6>{depositTime > 0 ? `${format(depositTime * 1000, 'dd MMM yyyy HH:mm')} UTC` : '---'}</h6>
                    </div>
                  </Col>
                  <Col sm={3} xs={12}>
                    <div className="text-center presale-vesting-rectangle vesting-date">
                      <p>Deposited</p>
                      <h6>{parseFloat(totalDepositedBusdBalance.toString()).toFixed(2)} BUSD</h6>
                    </div>
                  </Col>
                  <Col sm={3} xs={12}>
                    <div className="text-center presale-vesting-rectangle vesting-date">
                      <p>Received</p>
                      <h6>{parseFloat(totalRewardAmount.toString()).toFixed(2)} CRSS</h6>
                    </div>
                  </Col>
                  <Col sm={3} xs={12}>
                    <div className="text-center presale-vesting-rectangle vesting-date">
                      <p>Unlocks In</p>
                      <h6>{days ? days : 0} days {hours ? hours : 0} hours</h6>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </section >
  );
}

export default SectionHeader;