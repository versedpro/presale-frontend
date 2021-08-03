import React, { Component, Fragment, useState, useContext } from "react";
import { Container , Input} from 'reactstrap';

import { Row, Col } from 'reactstrap';
import '../css/style.css'
import { ThemeContext } from "../../../contexts/ThemeContext";


const SectionFooter = (props) => {

    const { isDark, toggleTheme } = useContext(ThemeContext)
    return (
        
          <section className="footer_section">
            <Container>
              <div className="footer_bar">
                  <div className="footer_bar_icon">
                    {
                      isDark? (<img src="assets/images/logo@3x.png" class="nav_logo" id="crosswise_logo"/>):
                      <img src="assets/images/logo-light-theme-2.png" class="nav_logo" id="crosswise_logo"/>
                    }
                    <div className="footer_bar_connections">
                        <div className="bar_item">
                          {
                            isDark? (<img src="assets/images/location.png"  />):
                            <img src="assets/images/location-light.png"/>
                          } 
                        <span class="item">United States</span>
                        </div>

                        <div className="bar_item">
                          {
                            isDark? (<img src="assets/images/message.png"  />):
                            <img src="assets/images/message-light.png"/>
                          } 
                        <span class="item">English(United States)</span>
                        </div>
                    </div>
                  </div>
                  <div className="footer_bar_links">
                    <div className="group_links">
                      <div className="title">
                        DOWNLOAD
                      </div>
                      <div class="links">
                          <a className="link-item">White paper</a>
                          <a className="link-item">Pitchbook</a>
                          <a className="link-item">Gitbook</a>
                      </div>
                    </div>
                    <div className="group_links">
                      <div className="title">
                        LEARN
                      </div>
                      <div class="links">
                          <a className="link-item">About</a>
                          <a className="link-item">Help</a>
                          <a className="link-item">Support</a>
                          <a className="link-item">Privacy & terms</a>
                      </div>
                    </div>
                    <div className="group_links">
                      <div className="title">
                        FOLLOW
                      </div>
                      <div class="links">
                          <a className="link-item">Telegram</a>
                          <a className="link-item">Twitter</a>
                          <a className="link-item">Medium</a>
                          <a className="link-item">Github</a>
                      </div>
                    </div>

                  </div>
              </div>
              <div className="copyright">
                <div class="made_by">made by &nbsp;<p> roobinium.io</p></div>
                <div class="copyrightyear">© 2021 CrossWise</div>
              </div>
            </Container>
          </section>
        );
}

export default SectionFooter;