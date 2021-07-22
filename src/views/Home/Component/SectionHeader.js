import React, { Component, Fragment, useState, useContext } from "react";
import { Container , Input} from 'reactstrap';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import '../css/style.css'
import { ThemeContext } from "../../../contexts/ThemeContext";

import backgroundCloud from '../../../assets/images/crosswise/backgroud-could.png';
import M from '../../../assets/images/crosswise/m.png';
import Paperplane from '../../../assets/images/crosswise/paperplane.png';
import Git from '../../../assets/images/crosswise/git.png';
import Twitter from '../../../assets/images/crosswise/twitter.png'

import MLight from '../../../assets/images/crosswise/m-light.png';
import PaperplaneLight from '../../../assets/images/crosswise/paperplane-light.png';
import GitLight from '../../../assets/images/crosswise/git-light.png';
import TwitterLight from '../../../assets/images/crosswise/twitter-light.png'

import Planet8 from '../../../assets/images/crosswise/planet-8.png'
const SectionHeader = (props) => {
   
  const [sideMenu, setsideMenu] = useState(false);
  const [sideMenuIndex, setsideMenuIndex] = useState(0);
  
  const expandCollapseMenu = () => {
    setsideMenu(!sideMenu)
    //console.log(this.state.sideMenu);
 }
 const { isDark, toggleTheme } = useContext(ThemeContext)
 console.log("dark", isDark);
  
    return (
        
          <section className="header_section" style={isDark? {backgroundImage: 'url('+ backgroundCloud +')'}: {}}>
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
                              
                              
                            </div>
                        </div>
                      </Row>
                    </div>

                    <img src={Planet8} className="planet8_img shadow"/>
              </Row>
            </Container>
          </section>
        );
}

export default SectionHeader;