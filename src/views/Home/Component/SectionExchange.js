import React, { Component, Fragment, useState, useContext } from "react";
import { Container , Input} from 'reactstrap';

import Slider from "react-slick";
import 'react-accessible-accordion/dist/fancy-example.css';
import { Row, Col } from 'reactstrap';
import classnames from 'classnames';
import '../css/style.css'
import { ThemeContext } from "../../../contexts/ThemeContext";

import Img4 from '../../../assets/images/crosswise/content-img-12.png';
import Img5 from '../../../assets/images/crosswise/content-img-13.png';
import Img6 from '../../../assets/images/crosswise/image-6.png';

const SectionExchange = (props) => {

    const { isDark, toggleTheme } = useContext(ThemeContext)
    var settings = {
        dots: false,
        infinite: false,
        arrows: false,
        swipeToSlide: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        draggable: true,
        autoplay: false,
        autoplaySpeed: 1500,
    //    variableWidth: true,
        centerMode: false,
        fade: false,
        cssEase: 'linear',
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                dots:true
            }
        },

        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                draggable: true,
                dots: true
            }
        },

        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                
                draggable: true,
                dots: true
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                draggable: true,
                dots: true
            }
        }
    ]
      };
    return (
        
          <section className="exchange_section">
            <Container>
                <Row>
                    <div className="title">
                        <h1>Exchange CrossWise</h1>
                    </div>
                </Row>
                
               <div className="exchange_slider">
                <div className="gallery_images">
                    <ul>
                        <Slider {...settings}>
                                <li>
                                    <div class="gallery_photo shadow">
                                        <img class="card-img-top" src={Img6} />
                                        <div class="card-img-overlay p-3">
                                        </div>
                                        <div class="photo_content">
                                            <h6>ICO/IDO Launchpad</h6>
                                            <p>Following a long period of research and analyzation we started developing Crosswise.</p>
                                        </div>
                                    </div>
                                </li>

                                
                                <li>
                                    <div class="gallery_photo shadow">
                                    <img class="card-img-top" src={Img6} />
                                        <div class="card-img-overlay p-3">
                                            
                                        </div>
                                        <div class="photo_content">
                                            <h6>Commissions from liquidity</h6>
                                            <p>Following a long period of research and analyzation we started developing Crosswise.</p>
                                        </div>
                                    </div>
                                </li>
                                
                                <li>
                                    <div class="gallery_photo shadow">
                                    <img class="card-img-top" src={Img6} />
                                        <div class="card-img-overlay p-3">
                                        </div>
                                        <div class="photo_content">
                                            <h6>Low market-competitive fees</h6>
                                            <p>Following a long period of research and analyzation we started developing Crosswise.</p>
                                        </div>
                                    </div>
                                </li>

                            </Slider>
                        </ul>
                    </div>
              </div>
               
                
            </Container>
          </section>
        );
}

export default SectionExchange;