import React, { Component, Fragment, useState, useContext } from "react";
import Accordion from "./Faq/accordion";
import { Container , Input} from 'reactstrap';

import 'react-accessible-accordion/dist/fancy-example.css';
import { Row, Col } from 'reactstrap';
import classnames from 'classnames';
import '../css/style.css'
import { ThemeContext } from "../../../contexts/ThemeContext";


const questionsAnswers = [
    {
      question: "What is Crosswise?",
      answer:
        "<p>The next-gen cross-blockchain AMM (Automatic Market Maker) and DAPP (Decentralized Application) focused on creating a DEX(Decentralized Exchange) build on Binance Smart Chain with Polygon and many more to follow.</p>",
    },
    {
      question: "What are the fees for Users?",
      answer:
        "<p>0.2% fee is taken on every trade on Simple swap & 0.3% fee is taken on every trade on Advanced DEX with tools such as limit orders. </p>",
    },
    {
      question: "How much reward is compounded for users?",
      answer: `<p>..................</p>`,
    },
    {
      question: "What is the token Sales &  distribution schedule & timeline for Investors?",
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
                  <h1>Right of Questionnaire - Join Our Community </h1>
                </div>
                <div className="desc">
                  <p>Crosswise aims to provide the best seamless trading experience for our users. With the state of art multi-chain technology, trading tools, and ability to handle peak loads. We encourage our users & investors to join our community for more news & updates regarding the project. </p>
                </div>
                
                
              </div>
              </div>
              
            </Container>
          </section>
        );
}

export default SectionHelp;