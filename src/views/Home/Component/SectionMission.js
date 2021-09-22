import React, { Component, Fragment, useState, useContext } from "react";
import { Container , Input} from 'reactstrap';

import 'react-accessible-accordion/dist/fancy-example.css';
import { Row, Col } from 'reactstrap';
import classnames from 'classnames';
import '../css/style.css'
import { ThemeContext } from "../../../contexts/ThemeContext";

import Img1 from '../../../assets/images/crosswise/image-1.png';
import Img2 from '../../../assets/images/crosswise/image-2.png';
import Img3 from '../../../assets/images/crosswise/image-3.png';

const SectionMission = (props) => {

    const { isDark, toggleTheme } = useContext(ThemeContext)
    return (
        
          <section className="mission_section">
            <Container>
                <Row>
                    <div className="mission_item">
                        <div className="item_img">
                            <img src={Img1} />
                        </div>
                        <div className="item_content">
                            <h1>Why CrossWise?</h1>
                            <p>DeFi is relatively very new but packed with untapped utility. Platform Functionality, Portfolio Tracking, Trading Tools & Native Coin stability are fundamentals of success for our DEX. Fine-tuning in areas important for traders is a fundamental responsibility for Crosswise. </p>
                        </div>
                    </div>

                    <div className="mission_item reverse">
                    <div className="item_content">
                            <h1>Platform Features</h1>
                            <p>- Interoperable Swap Exchange</p>
                            <p>- Advanced Exchange</p>
                            <p>- Order Books</p>
                            <p>- Analytics</p>
                            <p>- Price Chart</p>
                            <p>- Account Stats</p>
                            <p>- Referral Affiliate Commissions</p>
                        </div>
                        <div className="item_img">
                            <img src={Img2} />
                        </div>
                    </div>
                    <div className="mission_item">
                        <div className="item_img">
                            <img src={Img3} />
                        </div>
                        <div className="item_content">
                            <h1>Dex Mechanics</h1>
                            <p>- Tokens: CRSS, XCRSS</p>
                            <p>- Emissions</p>
                            <p>- Gasless Mode</p>
                            <p>- Voting Options</p>
                            <p>- Subgraph: The Graph</p>
                            <p>- Price Oracle with Chainlink</p>
                            <p>- Anti-Whale Protection</p>
                            <p>- Anti-Bot Protection</p>
                            <p>- Farms at release</p>
                        </div>
                    </div>
                </Row>
            </Container>
          </section>
        );
}

export default SectionMission;