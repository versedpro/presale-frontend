import React, { Component, Fragment, useState, useContext } from "react";
import { Container } from 'reactstrap';

import 'react-accessible-accordion/dist/fancy-example.css';
import { Row } from 'reactstrap';

import '../css/style.css'
import { ThemeContext } from "../../../contexts/ThemeContext";

import crss from '../../../assets/images/crosswise/CRSS-b.png';
import xcrss from '../../../assets/images/crosswise/XCRSS.png';
import gradientCircle  from '../../../assets/images/crosswise/ellipse.png';
import crssAvatarImg  from '../../../assets/images/crosswise/tokenomic-img-v1.png';
import xcrssAvatarImg  from '../../../assets/images/crosswise/tokenomic-img-v2.png';

const SectionTokenomicV2 = (props) => {

    const { isDark, toggleTheme } = useContext(ThemeContext)
    
    return (
          <section className="tokenomic_section" id="tokenomic">
            <Container>
                <Row>
                    <div className="title">
                        <h1>Tokenomics</h1>
                    </div>
                </Row>
                <div className="tokenomic_content">
                  <div className="tokenomic_block">
                    <div className="token_avata_wrap">
                      <img src={crss} class="tokenMainImg"/>
                      <img src={crssAvatarImg} className="tokenAvatar" />
                      <div className="tokenName">
                        <img src={gradientCircle} />
                        <div className="desc">CRSS</div>
                      </div>
                    </div>
                    <div className="token_desc">
                      <div className="max_supply">
                        <h5 className="topic">Maximum Supply</h5>
                        <div className="content">
                          <h6>50,000,000</h6>
                          <div className="special">
                            $CRSS
                          </div>
                        </div>
                      </div>
                      <div className="emission_rate">
                        <h5 className="topic">Emission Rate</h5>
                        <div className="content">
                          <h6>first 14 days</h6>
                          <div className="special">
                            1.2
                          </div>
                        </div>
                        <div className="content">
                          <h6>after 14 days</h6>
                          <div className="special">
                            1
                          </div>
                        </div>
                      </div>
                      <div className="teamToken">
                        <h5>No Team Tokens <br />8% of emission goes to the Development Wallet</h5>
                      </div>

                    </div>
                  </div>

                  <div className="tokenomic_block">
                    <div className="token_avata_wrap">
                      <img src={xcrss} className="tokenMainImg"/>
                      <img src={xcrssAvatarImg} className="tokenAvatar" />
                      <div className="tokenName">
                        <img src={gradientCircle} />
                        <div className="desc">XCRSS</div>
                      </div>
                    </div>
                    <div className="token_desc">
                      <div className="desc">
                        50% of rewards distributed for liquidity farming in farms and pools are paid out in XCRSS token, which is linearly vested into CRSS within 5 months, with 20% unlocked every 30 days.
                      </div>
                    </div>
                  </div>                  
                </div>
            </Container>
          </section>
        );
}

export default SectionTokenomicV2;