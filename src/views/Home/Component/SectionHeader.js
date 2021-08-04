import React, { Component, Fragment, useState, useContext } from "react";
import { Container , Input} from 'reactstrap';
import 'react-accessible-accordion/dist/fancy-example.css';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import '../css/style.css'
import { ThemeContext } from "../../../contexts/ThemeContext";
import styled from "styled-components";

import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";

import backgroundCloud from '../../../assets/images/crosswise/backgroud-could.png';
import M from '../../../assets/images/crosswise/m.png';
import Paperplane from '../../../assets/images/crosswise/paperplane.png';
import Git from '../../../assets/images/crosswise/git.png';
import Twitter from '../../../assets/images/crosswise/twitter.png'

import MLight from '../../../assets/images/crosswise/m-light.png';
import PaperplaneLight from '../../../assets/images/crosswise/paperplane-light.png';
import GitLight from '../../../assets/images/crosswise/git-light.png';
import TwitterLight from '../../../assets/images/crosswise/twitter-light.png';

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
   
  const [sideMenu, setsideMenu] = useState(false);
  const [sideMenuIndex, setsideMenuIndex] = useState(0);
  
  const expandCollapseMenu = () => {
    setsideMenu(!sideMenu)
  }

  const { isDark, toggleTheme } = useContext(ThemeContext)

  // represents softcap amount
  // This should be updated with softcap of presale
  const [softCap, setSoftCap] = useState(40)
  
  return (
      
    <Section className="header_section" style={isDark? {backgroundImage: 'url('+ backgroundCloud +')'}: {}} softCap={ softCap }>
      <Container>
        <Row>
          <div className="col-lg-7 col-md-12">
            <Row>
              <div className="header_section_left">
                <h1>Crosswise Next-Generation Decentralised Exchanged</h1>
                <p class="desc">Uniting stability, usability security and vision. Building a decentralised Exchange Ecosystem Cross-blockchain</p>
                <div className="button_group">
                  <a className="btn btn_primary">White Paper</a>
                  <a className="btn btn_primary btn_pitchdeck">Pitchdeck</a>
                </div>
                <div className="col-12 text-center">
                  <div className="dapp_bar shadow">
                    <div>
                        <p>Check our social:</p>
                    </div>
                    <div className="social_links">
                      <ul class="list-group list-group-horizontal">
                        <a href="#" class="list-group-item list-group-item-action">
                          {isDark? (<img src={M} alt="m.png"/>):
                          (<img src={MLight} alt="m.png"/>)
                          }
                        </a>
                        <a href="#" class="list-group-item list-group-item-action">
                          {
                            isDark? (<img src={Paperplane} alt="paperplane.png"/>):
                            (<img src={PaperplaneLight} alt="paperplane.png"/>)
                          }
                        </a>
                        <a href="#" class="list-group-item list-group-item-action">
                          {
                            isDark? (<img src={Git} alt="git.png"/>):
                            (<img src={GitLight} alt="git.png"/>)
                          }
                        </a>
                        <a href="#" class="list-group-item list-group-item-action">
                          {
                            isDark? (<img src={Twitter} alt="twitter.png"/>):
                            (<img src={TwitterLight} alt="twitter.png"/>)
                          }
                        </a>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Row>
          </div>
          <div className="col-lg-5 col-md-12">
            <Row>
              <div className="header_section_right">
                <div className="header_presale_board">
                  <h5>Pre-Sale Ends In</h5>

                  <div className="presale_counter">
                    <div class="count_el">
                      <div class="count_el_digits">
                        <h3>09</h3>              
                      </div>
                      <div class="count_el_text">
                        <p>DAY</p>
                      </div>
                    </div>

                    <div class="count_el">
                      <div class="count_el_digits">
                        <h3>11</h3>              
                      </div>
                      <div class="count_el_text">
                        <p>HOUR</p>
                      </div>
                    </div>

                    <div class="count_el">
                      <div class="count_el_digits">
                        <h3>03</h3>              
                      </div>
                      <div class="count_el_text">
                        <p>MIN</p>
                      </div>
                    </div>

                    <div class="count_el">
                      <div class="count_el_digits">
                        <h3>48</h3>              
                      </div>
                      <div class="count_el_text">
                        <p>SEC</p>
                      </div>
                    </div>
                  </div>

                  <div className="presale_info">
                    <div class="presale_info_rectangle">
                      <p>
                        Token price
                      </p>
                      <h6>
                        1 CRSS = 1 USD
                      </h6>
                    </div>

                    <div class="presale_info_rectangle">
                      <p>
                        Soft Cap
                      </p>
                      <h6>
                        250.000 CRSS
                      </h6>
                    </div>

                    <div class="presale_info_rectangle">
                      <p>
                        Hard Cap
                      </p>
                      <h6>
                        1,500,000 CRSS
                      </h6>
                    </div>

                    <div class="presale_info_rectangle">
                      <p>
                        Max purchase
                      </p>
                      <h6>
                        25,000 CRSS
                      </h6>
                    </div>

                  </div>

                  <div className="presale_tips">
                      <div className="tips_item"><p>Raise- </p> <span>&nbsp;&nbsp;1164 CRSS</span></div>
                      <div className="tips_item"><p>Target- </p> <span> &nbsp;&nbsp;1,500,000 CRSS</span></div>
                  </div>
                  
                  <div className="presale_progress">
                    <ProgressBar
                      percent={ softCap }
                      fillBackground="linear-gradient(to right, #fefb72, #f0bb31)"
                    >
                      <Step transition="scale">
                        {() => (
                          <Oval
                            width="30"
                          />
                        )}
                      </Step>
                      <Step transition="scale">
                        {() => (
                          <Oval
                            width="30"
                          />
                        )}
                      </Step>
                      <Step transition="scale">
                        {() => (
                          <Oval
                            width="30"
                          />
                        )}
                      </Step>
                    </ProgressBar>
                    <Row>
                      <CombinedShape className="soft-cap">
                        <PresaleTextTip className="presale-text-cap">Soft Cap</PresaleTextTip>
                      </CombinedShape>
                      <CombinedShape className="hard-cap">
                        <PresaleTextTip className="presale-text-cap">Hard Cap</PresaleTextTip>
                      </CombinedShape>
                    </Row>
                  </div>
                </div>
              </div>
            </Row>
          </div>

          <img src={Planet8} className="planet8_img shadow"/>
        </Row>
      </Container>
    </Section>
  );
}

export default SectionHeader;