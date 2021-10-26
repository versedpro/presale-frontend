import React, { Component, Fragment, useState, useContext } from "react";
import { Container , Input} from 'reactstrap';

import { Row, Col } from 'reactstrap';
import '../css/style.css'
import { ThemeContext } from "../../../contexts/ThemeContext";
import pdf from '../../../assets/images/crosswise/litepaper/Crosswise_Litepaper_Final.pdf'

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
                        {/* <div className="bar_item">
                          {
                            isDark? (<img src="assets/images/location.png"  />):
                            <img src="assets/images/location-light.png"/>
                          } 
                        <span class="item">United States</span>
                        </div> */}

                        {/* <div className="bar_item">
                          {
                            isDark? (<img src="assets/images/message.png"  />):
                            <img src="assets/images/message-light.png"/>
                          } 
                        <span class="item">English (US/UK)</span>
                        </div> */}
                    </div>
                  </div>
                  <div className="footer_bar_links">
                    <div className="group_links">
                      <div className="title">
                        Media
                      </div>
                      <div class="links">
                          <a className="link-item" href={pdf} target="_blank">Litepaper</a>
                          <a className="link-item">Pitchdeck</a>
                      </div>
                    </div>
                    <div className="group_links">
                      <div className="title">
                        LEARN
                      </div>
                      <div class="links">
                          <a className="link-item" href="https://crosswise.gitbook.io/crosswise/" target="_blank">Gitbook</a>
                          <a className="link-item" href="https://intercom.help/crosswise-f/en" target="_blank">Support </a>
                      </div>
                    </div>
                    <div className="group_links">
                      <div className="title">
                        FOLLOW
                      </div>
                      <div class="links">
                      <a className="link-item" href="https://t.me/crosswise" target="_blank">Telegram</a>
                      <a className="link-item" href="https://discord.gg/rDvKpqsq" target="_blank" >Discord</a>
                          <a className="link-item" href="https://twitter.com/crosswisefi" target="_blank">Twitter</a>
                          <a className="link-item" href="https://crosswise.medium.com/" target="_blank">Medium</a>
                          <a className="link-item" href="https://www.instagram.com/crosswisedefi/" target="_blank" >Instagram</a>
                      </div>
                    </div>

                  </div>
              </div>
              <div className="copyright">
                {/* <div class="made_by">made by &nbsp;<p> roobinium.io</p></div> */}
                <div class="copyrightyear">© 2021 Crosswise, a SublimeMinds Brand</div>
              </div>
            </Container>
          </section>
        );
}

export default SectionFooter;