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

import checkImg from '../../../assets/images/crosswise/roadmap-check.png'
import spinnerImg from '../../../assets/images/crosswise/roadmap-spinner.png'

const SectionRoadmapV2 = (props) => {

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
          <section className="roadmap_section_v2" id="roadmap">
            <Container>
                <Row>
                    <div className="title">
                        <h1>Roadmap</h1>
                    </div>
                </Row>
                
                <div className="exchange_slider">
                <div className="gallery_images">
                    <ul>
                        <Slider {...settings}>
                                <li>
                                    <div class="gallery_photo shadow">
                                        {/* <img class="card-img-top" src={Img6} /> */}
                                        <div className="gradient-box">Q3/2021</div>
                                        <div class="card-img-overlay p-3">
                                        </div>
                                        <div class="photo_content">
                                            <div className="content-desc">
                                                <img src={checkImg} />
                                                <div class="content-text">Web & Dapp Design</div>
                                            </div>
                                            <div className="content-desc">
                                                <img src={spinnerImg} />
                                                <div class="content-text">Presale Frontend</div>
                                            </div>
                                            <div className="content-desc">
                                                <img src={spinnerImg} />
                                                <div class="content-text">DAPP Frontend</div>
                                            </div>
                                            <div className="content-desc">
                                                <img src={spinnerImg} />
                                                <div class="content-text">Whitepaper & Pitchdeck</div>
                                            </div>
                                            <div className="content-desc">
                                                <img src={spinnerImg} />
                                                <div class="content-text">Beta version</div>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div class="gallery_photo shadow">
                                        <div className="gradient-box">Q4/2021</div>
                                        <div class="card-img-overlay p-3">
                                        </div>
                                        <div class="photo_content">
                                            <div className="content-desc">
                                                <img src={spinnerImg} />
                                                <div class="content-text">V1 Release on BSC</div>
                                            </div>
                                            <div className="content-desc">
                                                <img src={spinnerImg} />
                                                <div class="content-text">Limit orders</div>
                                            </div>
                                            <div className="content-desc">
                                                <img src={spinnerImg} />
                                                <div class="content-text">Statictics / Account area</div>
                                            </div>
                                            <div className="content-desc">
                                                <img src={spinnerImg} />
                                                <div class="content-text">Explorer</div>
                                            </div>
                                            <div className="content-desc">
                                                <img src={spinnerImg} />
                                                <div class="content-text">Own Price Charts</div>
                                            </div>
                                        </div>
                                    </div>
                                </li>



                                <li>
                                    <div class="gallery_photo shadow">
                                        <div className="gradient-box">Q1/2022</div>
                                        <div class="card-img-overlay p-3">
                                        </div>
                                        <div class="photo_content">
                                            <div className="content-desc">
                                                <img src={spinnerImg} />
                                                <div class="content-text">LaunchPad</div>
                                            </div>
                                            <div className="content-desc">
                                                <img src={spinnerImg} />
                                                <div class="content-text">Own Price Charts</div>
                                            </div>
                                            <div className="content-desc">
                                                <img src={spinnerImg} />
                                                <div class="content-text">Bookmark</div>
                                            </div>
                                            <div className="content-desc">
                                                <img src={spinnerImg} />
                                                <div class="content-text">Vaults for 3. Party</div>
                                            </div>
                                            <div className="content-desc">
                                                <img src={spinnerImg} />
                                                <div class="content-text">Ramp network</div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </Slider>
                        </ul>
                    </div>
              </div> 
              <div className="see_full_roadmap">
                     <button className="btn btn_primary p-15 m-auto" href="#">See full Roadmap</button>
              </div>
            </Container>
          </section>
        );
}

export default SectionRoadmapV2;