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
 }
 const { isDark, toggleTheme } = useContext(ThemeContext)
  
    return (
        
          <section className="about_section">
            <Container>
              <Row>
                  <div className="about_section_sub">
                    <div className="title">
                        <h1>About Crosswise</h1>
                    </div>
                    <div class="desc">
                        <p><b>Next-Gen Cross-Chain DEX Exchanges (DEX) enables users for a seamless experience in DEFI. </b> 
DEX is a Platform as a service for the exchange and trade of digital currencies directly on the Blockchain. 
Crosswise is combining stability, usability, security, and vision to create an advanced Interoperable platform. Cross-Chain (Interoperability) lets users interact blockchain-based assets with non-custodial/ custodial wallets in user-friendly, secure, and premium trading tools. 
</p>
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
                            <h6>MuiltiChain</h6>
                        </div>
                      </div>

                      <div className="feature_rectangle">
                        <div className="rectangle_icon">
                            <img src={Icon2} />
                        </div>
                        <div>
                            <h6>User Friendly</h6>
                        </div>
                      </div>

                      <div className="feature_rectangle">
                        <div className="rectangle_icon">
                            <img src={Icon3} />
                        </div>
                        <div>
                            <h6>Gasless Mode</h6>
                        </div>
                      </div>

                      <div className="feature_rectangle gradient">
                        <div className="rectangle_icon white_icon">
                            <img src={Icon1} />
                        </div>
                        <div>
                            <h6>Trader Tools</h6>
                        </div>
                      </div>
                  </div>
              </Row>
            </Container>
          </section>
        );
}

export default SectionAbout;