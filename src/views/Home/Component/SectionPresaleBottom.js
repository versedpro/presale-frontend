import React, { Component, Fragment, useState, useContext } from "react";
import { Container , Input} from 'reactstrap';

import Slider from "react-slick";
import 'react-accessible-accordion/dist/fancy-example.css';
import { Row, Col } from 'reactstrap';
import classnames from 'classnames';
import '../css/style.css'
import { ThemeContext } from "../../../contexts/ThemeContext";

import arrow1 from '../../../assets/images/crosswise/presale_arrow_1.png'
import arrow2 from '../../../assets/images/crosswise/presale_arrow_2.png'

import stepImg1 from '../../../assets/images/crosswise/presale_step_img1.png'
import stepImg2 from '../../../assets/images/crosswise/presale_step_img2.png'

const SectionPresaleBottom = (props) => {

    const { isDark, toggleTheme } = useContext(ThemeContext)
  
    return (
          <section className="presale_bottom_section">
            <Container>
                <Row>
                    <div className="title">
                        <h1>Presale</h1>
                    </div>  
                    <div className="header_section_right m-auto">
                        <div className="presale_counter">
                            <div className="count_el">
                                <div className="count_el_digits">
                                    <h3>09</h3>              
                                </div>
                                <div className="count_el_text">
                                    <p>DAY</p>
                                </div>
                            </div>

                            <div className="count_el">
                                <div className="count_el_digits">
                                    <h3>11</h3>              
                                </div>
                                <div className="count_el_text">
                                    <p>HOUR</p>
                                </div>
                            </div>

                            <div className="count_el">
                                <div className="count_el_digits">
                                    <h3>03</h3>              
                                </div>
                                <div className="count_el_text">
                                    <p>MIN</p>
                                </div>
                            </div>

                            <div className="count_el">
                                <div className="count_el_digits">
                                    <h3>48</h3>              
                                </div>
                                <div className="count_el_text">
                                    <p>SEC</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Row>
                <div className="presale_info">
                    <div className="info_desc pt-50">Max amount per Wallet</div>
                    <div className="info_desc t_b pt-30">25,000 BUSD</div>
                    <div className="info_desc pt-50">Vesting</div>
                    <div className="info_desc t_b pt-30">5 months linearlly</div>
                </div>
                <div className="presale_stages">
                    <div className="s_diagram size_md">
                        <div className="stage_item">
                            <div className="item_title">Stage 1</div>
                            <h6 className="item_desc pt-30">Price at <b>0.2 USD</b></h6>
                            <h6 className="item_desc">1M Tokens = 200K USD</h6>
                        </div>
                        <img src={arrow1} />
                        <div className="stage_item">
                            <div className="item_title">Stage 2</div>
                            <h6 className="item_desc pt-30">Price at <b>0.3 USD</b></h6>
                            <h6 className="item_desc">1M Tokens = 300K USD</h6>
                        </div>
                    </div>


                    <div className="s_diagram size_sm">
                        <div className="stage_item">
                            <div className="item_title">Stage 1</div>
                            <h6 className="item_desc  pt-30">Price at <b>0.2 USD</b></h6>
                            <h6 className="item_desc">1M Tokens = 200K USD</h6>
                        </div>
                        <img src={arrow2} className="mt-30"/>
                        <div className="stage_item mt-30">
                            <div className="item_title">Stage 2</div>
                            <h6 className="item_desc pt-30">Price at <b>0.3 USD</b></h6>
                            <h6 className="item_desc">1M Tokens = 300K USD</h6>
                        </div>
                    </div>
                    <div className="stage_step">
                        <div className="step_item b_green">
                            <img src={stepImg1} />
                            <div className="step_desc">Total of 500k USD Hard Cap, 200k Soft Cap to reach</div>
                        </div>
                        <div className="step_item">
                            <img src={stepImg2} />
                            <div className="step_desc">70% of Presale Amount for Dev/Marketing</div>
                        </div>
                        <div className="step_item b_green">
                            <img src={stepImg1} />
                            <div className="step_desc">30% for initial liquidity of CRSS BNB, CRSS BUSD on DEX</div>
                        </div>
                        <div className="step_item">
                            <img src={stepImg2} />
                            <div className="step_desc">Total of max 2 Million coins (4% of Max supply)</div>
                        </div>
                        <div className="step_item b_green">
                            <img src={stepImg1} />
                            <div className="step_desc">Base price 0.5 USD after presale</div>
                        </div>
                        <div className="step_item">
                            <img src={stepImg2} />
                            <div className="step_desc">Min buy 250 BUSD</div>
                        </div>
                    </div>
                </div>


                <div className="see_full_roadmap">
                   <button className="btn btn_primary m-auto p-15" href="#">Get Whitelisted</button>
                </div>
            </Container>
          </section>
        );
}

export default SectionPresaleBottom;