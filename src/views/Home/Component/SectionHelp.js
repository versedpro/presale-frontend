import React, { Component, Fragment, useState, useContext } from "react";
import Accordion from "./Faq/accordion";
import { Container , Input} from 'reactstrap';

import 'react-accessible-accordion/dist/fancy-example.css';
import { Row, Col } from 'reactstrap';
import '../css/style.css'
import { ThemeContext } from "../../../contexts/ThemeContext";

import twitter_icon from '../../../assets/images/crosswise/social/twitter.png';
import medium_icon from '../../../assets/images/crosswise/social/medium.png';
import reddit_icon from '../../../assets/images/crosswise/social/reddit.png';
import tel_plan_icon from '../../../assets/images/crosswise/social/telegram-plane.png';
import tel_icon from '../../../assets/images/crosswise/social/telegram.png';

const questionsAnswers = [
    {
      question: "What is Crosswise?",
      answer:
        "<p>The next-gen cross-blockchain AMM (Automatic Market Maker) and DAPP (Decentralized Application) focused on creating a DEX(Decentralized Exchange) build on Binance Smart Chain with Polygon and many more to follow.</p>",
    },
    {
      question: "What cryptocurrencies can I use to purchase?",
      answer:
        "<p>Once CRSS period is launched, You can purchased Token with Ethereum, Bitcoin or Litecoin.</p>",
    },
    {
      question: "How can I participate in teh CRSS Token sale?",
      answer: `<p>..................</p>`,
    },
    {
      question: "How do I benefit from the CRSS Token?",
      answer: `<p>..................</p>`,
    }
  ];


const SectionHelp = (props) => {

    const { isDark, toggleTheme } = useContext(ThemeContext)
    return (
        
          <section className="help_section">
            <Container>
              <div class="help_section_group">
              <div className="help_section_left">
                <Row>
                  <Accordion questionsAnswers={questionsAnswers} />
                </Row>
              </div>
              <div className="help_section_right">
                <div className="title">
                  <h1>Join our community</h1>
                </div>
                <div className="desc">
                  <p>Crosswise aims to provide the best seamless trading experience for our users. With the state of art multi-chain technology, trading tools, and ability to handle peak loads. We encourage our users & investors to join our community for more news & updates regarding the project. </p>
                </div>
                
                <div className="social_link_btn">
                  <a className="social_link" href="https://twitter.com/crosswisefi" target="_blank" ><img src={twitter_icon} /></a>
                  <a className="social_link" href="https://crosswise.medium.com/" target="_blank"><img src={medium_icon} /></a>
                  <a className="social_link" ><img src={reddit_icon} /></a>
                  <a className="social_link" href="https://t.me/crosswise_a" target="_blank" ><img src={tel_plan_icon} /></a>
                  <a className="social_link" href="https://t.me/crosswise" target="_blank"><img src={tel_icon} /></a>
                </div>
              </div>
              </div>
              
            </Container>
          </section>
        );
}

export default SectionHelp;