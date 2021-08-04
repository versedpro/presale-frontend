import React, { Component, Fragment, useState, useContext } from "react";
import { useSelector } from "react-redux";
import { Container , Input} from 'reactstrap';
import 'react-accessible-accordion/dist/fancy-example.css';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import '../css/style.css'
import { ThemeContext } from "../../../contexts/ThemeContext";
import styled from "styled-components";

import "react-step-progress-bar/styles.css";

import backgroundCloud from '../../../assets/images/crosswise/backgroud-could.png';
import Planet8 from '../../../assets/images/crosswise/planet-8.png';

const Oval = styled.div`
  width: 16px;
  height: 16px;
  margin: 0 111px 0 0;
  background-color: #ffffff;
  border-radius: 50%;
`;

const Section = styled.div`
  div.presale_progress > div > div:nth-child(2) {
    left: ${ props => props.softCap }% !important;
  }
`;

const CombinedShape = styled.div`
  width: 86px;
  height: 38px;
  /* margin: 15px 40px 0 92px; */
  padding: 10px 16px;
  -webkit-backdrop-filter: blur(40px);
  backdrop-filter: blur(40px);
  box-shadow: 8px 8px 24px 0 rgba(9, 13, 20, 0.4), -4px -4px 8px 0 rgba(224, 224, 255, 0.04), 0 1px 1px 0 rgba(9, 13, 20, 0.4);
  border: solid 1px rgba(43, 43, 43, 0.5);
  background-image: linear-gradient(117deg, rgba(245, 247, 250, 0.12), rgba(43, 43, 43, 0.5) 52%, rgba(245, 247, 250, 0) 100%);
  ::after {
    content: " ";
    position: absolute;
    bottom: 100%;  /* At the top of the tooltip */
    left: 50%;
    margin-left: -8px;
    border-width: 8px;
    border-style: solid;
    border-color: transparent transparent rgba(43, 43, 43, 0.5) transparent;
  }
`;

const PresaleTextTip = styled.div`
  width: 54px;
  height: 16px;
  font-family: Montserrat;
  font-size: 13px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.23;
  letter-spacing: -0.4px;
  color: #ffffff;
`;

const SectionHeader = (props) => {
  const address = useSelector(state => state.authUser.address);
  const { isDark, toggleTheme } = useContext(ThemeContext)

  // represents softcap amount
  // This should be updated with softcap of presale
  const [softCap, setSoftCap] = useState(40)
  
  return (
      
    <Section className="header_section section-presale" style={isDark? {backgroundImage: 'url('+ backgroundCloud +')'}: {}} softCap={ softCap }>
      <Container>
        <Row>
          <div className="presale-info">
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
            <div className="buy-tokens">
              <p>All transactions are private and secure</p>
              <button className="btn btn_primary">Buy Tokens</button>
            </div>
            <Row className="presale_info">
              <Col className="rectangle">
                <p>Total Reward Amount</p>
                <h6></h6>
              </Col>
              <Col className="rectangle">
                <p>Withdraw Amount</p>
                <h6></h6>
              </Col>
            </Row>
            <Row>
              <Col className="rectangle">
                <p>Deposit Amount</p>
                <h6></h6>
              </Col>
              <Col className="rectangle">
                <p>Deposit Time</p>
                <h6></h6>
              </Col>
            </Row>
            <div className="claim-rewards">
              <p style={{ lineHeight: "3" }}>Claim unlocked tokens</p>
              <button className="btn btn_primary">Claim</button>
            </div>
          </div>
          <img src={Planet8} className="planet8_img shadow"/>
        </Row>
      </Container>
    </Section>
  );
}

export default SectionHeader;