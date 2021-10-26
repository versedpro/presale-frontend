import React, { Component, Fragment, useState, useContext } from "react";
import { Container , Input} from 'reactstrap';

import 'react-accessible-accordion/dist/fancy-example.css';
import { Row } from 'reactstrap';
import '../css/style.css'
import { ThemeContext } from "../../../contexts/ThemeContext";


const SectionFees = (props) => {

    const { isDark, toggleTheme } = useContext(ThemeContext)
    
    return (
          <section className="fee_section">
            <Container>
                <Row>
                    <div className="title">
                        <h1>Fees</h1>
                    </div>
                </Row>
               <div className="fee_classification">
                <div className="fee_item">
                  <div className="item_title">Simple Swap</div>
                  <div className="item_content">
                    <div className="sub_title">0.2%</div>
                    <div className="sub_desc">fee on every swap</div>
                    <div className="sub_title">0.17%</div>
                    <div className="sub_desc">Returned to liquidity pools in the form of a reward for liquidity providers</div>
                    <div className="sub_title">0.03%</div>
                    <div className="sub_desc">to treasury</div>
                  </div>
                </div>
                <div className="fee_item">
                  <div className="item_title">Advanced</div>
                  <div className="item_content">
                    <div className="sub_title">0.3%</div>
                    <div className="sub_desc">fee on every swap</div>
                    <div className="sub_title">0.17%</div>
                    <div className="sub_desc">Returned to liquidity pools in the form of a reward for liquidity providers</div>
                    <div className="sub_title">0.13%</div>
                    <div className="sub_desc">to treasury</div>
                  </div>
                </div>
                <div className="fee_item">
                  <div className="item_title">Auto-Compound</div>
                  <div className="item_content">
                    <div className="sub_title">5%</div>
                    <div className="sub_desc">fee on farm and pool rewards auto-compounding</div>
                    <div className="sub_title">5%</div>
                    <div className="sub_desc">fee used to buy back and burn CRSS</div>
                    <div className="sub_desc">farm and pool rewards (CRSS) are compounded, we act as our own yield optimizer</div>
                  </div>
                </div>
                <div className="fee_item">
                  <div className="item_title">Transactions</div>
                  <div className="item_content">
                    <div className="sub_title">0.1%</div>
                    <div className="sub_desc">Every time CRSS is transferred, be that for staking, creating LP or sending to another wallet, a 0.1% transaction fee takes place.</div>
                    <div className="sub_desc">Of this 0.04% goes to the development and marketing wallet, 0.03% goes into liquidity, and 0.03% is used to buy back and burn CRSS.</div>
                    <div className="sub_desc">This fee ensures deflationary pressure as well as auto-liquidity for the CRSS token, and encourages users to hold the token.</div>
                  </div>
                </div>
                <div className="fee_item">
                  <div className="item_title">Instant Reward Claims</div>
                  <div className="item_content">
                    <div className="sub_desc">Farm and pool rewards are paid in <b className="textBlue">50%</b> CRSS and <b className="textBlue">50%</b> XCRSS, with XCRSS normally linearly vested within 5 months.</div>
                    <div className="sub_desc">Users have the option to directly claim <b className="textBlue">100%</b> of the CRSS rewards, and burn <b className="textBlue">50%</b>  of their XCRSS earned for an instant pay out. This leads to only <b className="textBlue">75%</b>  of the total rewards being paid out in CRSS, thereby reducing the circulating supply.</div>
                  </div>
                </div>
               </div>
            
            </Container>
          </section>
        );
}

export default SectionFees;