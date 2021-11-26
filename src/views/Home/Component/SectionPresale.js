import React, { useState, useContext, useEffect, useCallback } from "react";
import { format } from 'date-fns';
import { useSelector } from "react-redux";
import { Container, Table, Tooltip } from 'reactstrap';
import CopyToClipboard from "react-copy-to-clipboard";
import 'react-accessible-accordion/dist/fancy-example.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Row, Col } from 'reactstrap';
import { BN } from 'web3-utils';
import useRefresh from '../../../redux/useRefresh'
import '../css/style.css'
import { ThemeContext } from "../../../contexts/ThemeContext";
import "react-step-progress-bar/styles.css";
import { useForm } from "react-hook-form";
import { getFullDisplayBalance, getBalanceNumber } from '../../../crosswise/bn';
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
import { getDayHourPeriods } from "../../../widgets/getTimePeriods";
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
  const [depositAmount, setDepositAmount] = useState(new BN(0));
  const [unlockedAmount, setUnlockedAmount] = useState(new BN(0));
  const [rewardAmount, setRewardAmount] = useState(new BN(0));
  const [withdrawAmount, setWithdrawAmount] = useState(new BN(0));

  const [depositTime2, setDepositTime2] = useState(0);
  const [depositAmount2, setDepositAmount2] = useState(new BN(0));
  const [unlockedAmount2, setUnlockedAmount2] = useState(new BN(0));
  const [rewardAmount2, setRewardAmount2] = useState(new BN(0));
  const [withdrawAmount2, setWithdrawAmount2] = useState(new BN(0));

  const secondsRemaining = useCountDown(depositTime + 2629800 * 5);
  const { days: days11, hours: hours11 } = getDayHourPeriods(
    Math.max(secondsRemaining - 2629800 * 4, 0)
  );
  const { days: days12, hours: hours12 } = getDayHourPeriods(
    Math.max(secondsRemaining - 2629800 * 3, 0)
  );
  const { days: days13, hours: hours13 } = getDayHourPeriods(
    Math.max(secondsRemaining - 2629800 * 2, 0)
  );
  const { days: days14, hours: hours14 } = getDayHourPeriods(
    Math.max(secondsRemaining - 2629800, 0)
  );
  const { days: days15, hours: hours15 } = getDayHourPeriods(secondsRemaining);

  const remains1 = [
    [days11, hours11],
    [days12, hours12],
    [days13, hours13],
    [days14, hours14],
    [days15, hours15],
  ];
  
  const secondsRemaining2 = useCountDown(depositTime2 + 2629800 * 5);
  const { days: days21, hours: hours21 } = getDayHourPeriods(
    Math.max(secondsRemaining2 - 2629800 * 4, 0)
  );
  const { days: days22, hours: hours22 } = getDayHourPeriods(
    Math.max(secondsRemaining2 - 2629800 * 3, 0)
  );
  const { days: days23, hours: hours23 } = getDayHourPeriods(
    Math.max(secondsRemaining2 - 2629800 * 2, 0)
  );
  const { days: days24, hours: hours24 } = getDayHourPeriods(
    Math.max(secondsRemaining2 - 2629800, 0)
  );
  const { days: days25, hours: hours25 } = getDayHourPeriods(secondsRemaining2);

  const remains2 = [
    [days21, hours21],
    [days22, hours22],
    [days23, hours23],
    [days24, hours24],
    [days25, hours25],
  ];

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
    setRewardAmount(web3.utils.toBN(result.totalRewardAmount));
    setWithdrawAmount(web3.utils.toBN(result.withdrawAmount));
    setDepositAmount(web3.utils.toBN(result.depositAmount));
    setUnlockedAmount(amountUnlocked);
    setDepositTime(parseInt(result.depositTime, 10));

    const result2 = await getUserDetail2(address);
    const amountUnlocked2 = await getAmountUnlocked2(address);
    setRewardAmount2(web3.utils.toBN(result2.totalRewardAmount));
    setWithdrawAmount2(web3.utils.toBN(result2.withdrawAmount));
    setDepositAmount2(web3.utils.toBN(result2.depositAmount)); 
    setUnlockedAmount2(amountUnlocked2);
    setDepositTime2(parseInt(result2.depositTime, 10));
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
                      <h6>{getFullDisplayBalance(depositAmount2, 18, 2)} BUSD</h6>
                    </div>
                    <div className="rectangle">
                      <p>Total Received</p>
                      <h6>{getFullDisplayBalance(rewardAmount2, 18, 2)} CRSS</h6>
                    </div>
                  </div>

                  <div className="presale_info carousel-second">
                    <div className="rectangle">
                      <p>Unlocked Tokens</p>
                      <h6>{getFullDisplayBalance(unlockedAmount2, 18, 2)} CRSS</h6>
                    </div>
                    <div className="rectangle">
                      <p>Total Withdrawn</p>
                      <h6>{getFullDisplayBalance(withdrawAmount2, 18, 2)} CRSS</h6>
                    </div>
                  </div>

                  <div className="claim_section">
                    <button
                      className={`btn btn_primary claim-button presale-btns
                        ${getBalanceNumber(unlockedAmount2, 18) < 1 ? 'disabled' : ''}`}
                      onClick={claimToken2}
                    >
                      Withdraw Tokens
                    </button>
                  </div>
                </div>
              </div>
              <div className="presale-vesting mb-3">
                <Table>
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Deposited</th>
                      <th>Received</th>
                      <th>Unlocks In</th>
                    </tr>
                  </thead>
                  <tbody>
                    {remains2.map((pair, index) => {
                      if (pair[0] < 1 && pair[1] < 1) return null;
                      return (
                        <tr key={`${index}th`}>
                          <td>
                            <h6>{
                              depositTime2 > 0 ? `${format(depositTime2 * 1000, 'dd MMM yyyy HH:mm')} UTC` : '---'
                            }</h6>
                          </td>
                          <td>
                            <h6>{
                              getFullDisplayBalance(
                                depositAmount2.mul(new BN(index + 1)).div(new BN(5)), 18, 2
                              )
                            } BUSD</h6>
                          </td>
                          <td>
                            <h6>{
                              getFullDisplayBalance(
                                rewardAmount2.mul(new BN(index + 1)).div(new BN(5)), 18, 2
                              )
                            } CRSS</h6>
                          </td>
                          <td>
                            <h6>{pair[0] ? pair[0] : 0} days {pair[1] ? pair[1] : 0} hours</h6>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
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
                      <h6>{getFullDisplayBalance(depositAmount, 18, 2)} BUSD</h6>
                    </div>
                    <div className="rectangle">
                      <p>Total Received</p>
                      <h6>{getFullDisplayBalance(rewardAmount, 18, 2)} CRSS</h6>
                    </div>
                  </div>

                  <div className="presale_info carousel-second">
                    <div className="rectangle">
                      <p>Unlocked Tokens</p>
                      <h6>{getFullDisplayBalance(unlockedAmount, 18, 2)} CRSS</h6>
                    </div>
                    <div className="rectangle">
                      <p>Total Withdrawn</p>
                      <h6>{getFullDisplayBalance(withdrawAmount, 18, 2)} CRSS</h6>
                    </div>
                  </div>

                  <div className="claim_section">
                    <button
                      className={`btn btn_primary claim-button presale-btns
                        ${getBalanceNumber(unlockedAmount, 18, 2) < 1 ? 'disabled' : ''}`}
                      onClick={claimToken}
                    >
                      Withdraw Tokens
                    </button>
                  </div>
                </div>
              </div>
              <div className="presale-vesting mb-3">
                <Table>
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Deposited</th>
                      <th>Received</th>
                      <th>Unlocks In</th>
                    </tr>
                  </thead>
                  <tbody>
                    {remains1.map((pair, index) => {
                      if (pair[0] < 1 && pair[1] < 1) return null;
                      return (
                        <tr key={`${index}th`}>
                          <td>
                            <h6>{
                              depositTime > 0 ? `${format(depositTime * 1000, 'dd MMM yyyy HH:mm')} UTC` : '---'
                            }</h6>
                          </td>
                          <td>
                            <h6>{
                              getFullDisplayBalance(
                                depositAmount.mul(new BN(index + 1)).div(new BN(5)), 18, 2
                              )
                            } BUSD</h6>
                          </td>
                          <td>
                            <h6>{
                              getFullDisplayBalance(
                                rewardAmount.mul(new BN(index + 1)).div(new BN(5)), 18, 2
                              )
                            } CRSS</h6>
                          </td>
                          <td>
                            <h6>{pair[0] ? pair[0] : 0} days {pair[1] ? pair[1] : 0} hours</h6>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </section >
  );
}

export default SectionHeader;