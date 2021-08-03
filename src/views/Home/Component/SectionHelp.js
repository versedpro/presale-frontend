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
        "<p>Crosswise...</p>",
    },
    {
      question: "What cryptocurrencies can I use to purchase?",
      answer:
        "<p>Once CRSS period is launched, You can purchased Token with Etherum, Bitcoin or Litecoin. You can also tempor incididunt ut labore et dolore magna aliqua sed do eiusmod eaque ipsa.</p>",
    },
    {
      question: "How can I participate in the CRSS Token sale?",
      answer: `<p>How can I participate in the CRSS Token sale?</p>`,
    },
    {
      question: "How do I benefit from the CRSS Token?",
      answer: `<p>How do I benefit from the CRSS Token?</p>`,
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
                  <h1>We're Here To Help</h1>
                </div>
                <div className="desc">
                  <p>Following a long period of research and analyzation we started developing Crosswise. Combining developers with the needed amount of experience and entrepreneurs with the right long-term vision we have developed a next level DEX.</p>
                </div>
                
                
              </div>
              </div>
              
            </Container>
          </section>
        );
}

export default SectionHelp;