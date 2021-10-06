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
                    <div className="sub_desc">fee is taken on every trade</div>
                    <div className="sub_title">0.17%</div>
                    <div className="sub_desc">Returned to liquidity pools in the form of a fee reward for liquidity providers</div>
                    <div className="sub_title">0.03%</div>
                    <div className="sub_desc">to treasury</div>
                  </div>
                </div>
                <div className="fee_item">
                  <div className="item_title">Advanced</div>
                  <div className="item_content">
                    <div className="sub_title">0.3%</div>
                    <div className="sub_desc">fee is taken on every trade</div>
                    <div className="sub_title">0.17%</div>
                    <div className="sub_desc">Returned to liquidity pools in the form of a fee reward for liquidity providers</div>
                    <div className="sub_title">0.13%</div>
                    <div className="sub_desc">to treasury</div>
                  </div>
                </div>
                <div className="fee_item">
                  <div className="item_title">Auto-Compound</div>
                  <div className="item_content">
                    <div className="sub_title">5%</div>
                    <div className="sub_desc">fee on Farms and Pool auto-compound</div>
                    <div className="sub_title">5%</div>
                    <div className="sub_desc">fee is used to buy back and burn CRSS</div>
                    <div className="sub_desc">Users farm and pool rewards (CRSS) are compounded back to LP, we act as our own Yield Optimizer</div>
                  </div>
                </div>
                <div className="fee_item">
                  <div className="item_title">Transactions</div>
                  <div className="item_content">
                    <div className="sub_title">0.1%</div>
                    <div className="sub_desc">transaction fee on CRSS token</div>
                    <div className="sub_desc">Every time the CRSS Token is transferred, for eg for staking, creating LP or being send to another wallet, a 0.1% Transaction fee is taking place.</div>
                    <div className="sub_desc">This fee gives the coin following features: deflation, auto liquidity. Also, the users are more keen on holding the coin. </div>
                  </div>
                </div>
                <div className="fee_item">
                  <div className="item_title">Immediate claim of CRSS</div>
                  <div className="item_content">
                    <div className="sub_desc">Farms and Pool rewards are given in <b className="textBlue">50%</b> CRSS and <b className="textBlue">50%</b> XCRSS, which is normally linerally vested within 12 weeks.</div>
                    <div className="sub_desc">We are giving users the option to directly claim <b className="textBlue">100%</b> of the rewards in CRSS, whereas <b className="textBlue">50%</b> of the XCRSS earned are burned. This leads to only <b className="textBlue">75%</b> of the total rewards being paid out in CRSS. Because of that the emission is lowered.</div>
                  </div>
                </div>
               </div>
            
            </Container>
          </section>
        );
}

export default SectionFees;