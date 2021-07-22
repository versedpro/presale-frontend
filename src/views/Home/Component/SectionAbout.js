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
import Thumb from '../../../assets/images/crosswise/thumb.png';
import Icon1 from '../../../assets/images/crosswise/icon-1.png';
import Icon2 from '../../../assets/images/crosswise/icon-2.png';
import Icon3 from '../../../assets/images/crosswise/icon-3.png';

const SectionAbout = (props) => {
   
  const [sideMenu, setsideMenu] = useState(false);
  const [sideMenuIndex, setsideMenuIndex] = useState(0);
  
  const expandCollapseMenu = () => {
    setsideMenu(!sideMenu)
    //console.log(this.state.sideMenu);
 }
 const { isDark, toggleTheme } = useContext(ThemeContext)
 console.log("dark", isDark);
  
    return (
        
          <section className="about_section">
            <Container>
              <Row>
                  <div className="about_section_sub">
                    <div className="title">
                        <h1>About Crosswise</h1>
                    </div>
                    <div class="desc">
                        <p>We are building the Next-Gen Cross-Chain DEX Exchanges (DEX) allow users to exchange and trade digital currencies directly on the Blockchain. But thats just a part of it Crosswise is combining stability, usability, security and vision to create an advanced platform cross-chain to empower users to do everything connected to crypto:
    trade, earn, invest, analyse and learn We have worked on a whole set of new and exciting features that we combined with already existing, industry-leading components to create an exciting, future-proof platform. What are you waiting for?</p>
                    </div>
                  </div>
                </Row>
                <Row>
                  <div className="features">
                      <div className="feature_rectangle">
                        <div className="rectangle_icon">
                            <img src={Thumb} />
                        </div>
                        <div>
                            <h6>STABILITY</h6>
                        </div>
                      </div>

                      <div className="feature_rectangle">
                        <div className="rectangle_icon">
                            <img src={Icon2} />
                        </div>
                        <div>
                            <h6>VISION</h6>
                        </div>
                      </div>

                      <div className="feature_rectangle">
                        <div className="rectangle_icon">
                            <img src={Icon3} />
                        </div>
                        <div>
                            <h6>USABILITY</h6>
                        </div>
                      </div>

                      <div className="feature_rectangle gradient">
                        <div className="rectangle_icon white_icon">
                            <img src={Icon1} />
                        </div>
                        <div>
                            <h6>SECURITY</h6>
                        </div>
                      </div>
                  </div>
              </Row>
            </Container>
          </section>
        );
}

export default SectionAbout;