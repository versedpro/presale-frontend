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

import linkedinBlackIcon from '../../../assets/images/crosswise/linkedin-black-icon.png';
import linkedinLightIcon from '../../../assets/images/crosswise/linkedin-white-icon.png';

import User1 from '../../../assets/images/crosswise/user-1.png';
import User2 from '../../../assets/images/crosswise/user-2.png';
import User3 from '../../../assets/images/crosswise/user-3.png';
import User4 from '../../../assets/images/crosswise/user-4.png';
import User5 from '../../../assets/images/crosswise/user-5.png';

const SectionTeamwork = (props) => {

    const { isDark, toggleTheme } = useContext(ThemeContext)
    var settings = {
        dots: false,
        infinite: true,
        arrows: false,
        swipeToSlide: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        draggable: true,
        autoplay: false,
        autoplaySpeed: 1500,
        //variableWidth: true,
        centerMode: false,
        fade: false,
        cssEase: 'linear',
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
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
                slidesToShow: 2,
                
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
        
          <section className="teamwork_section">
            <Container>
                <Row>
                    <div className="title">
                        <h1>Our Team Works For You</h1>
                    </div>
                </Row>
                
               <div className="exchange_slider">
                <div className="gallery_images">
                    <ul>
                        <Slider {...settings}>

                                <li>
                                    <div class="gallery_photo shadow">
                                        {/* <img class="card-img-top" src={} /> */}
                                        <img class="user_img_top" src={User2} />
                                        {
                                            isDark? (<img class="linkedin_img_icon" src={linkedinBlackIcon} />):
                                                    (<img class="linkedin_img_icon" src={linkedinLightIcon} />)
                                        }
                                        <div class="card-img-overlay p-3">
                                        </div>
                                        <div class="photo_content">
                                            <h6>Alexander Bychkov</h6>
                                            <p>Chief executive officer</p>
                                        </div>
                                        <div class="photo_description">
                                            <p>With over 25 years of experience in payments and e-commerce, Alexander has an extensive background in driving profitable growth.</p>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div class="gallery_photo shadow">
                                        {/* <img class="card-img-top" src={} /> */}
                                        <img class="user_img_top" src={User3} />
                                        {
                                            isDark? (<img class="linkedin_img_icon" src={linkedinBlackIcon} />):
                                                    (<img class="linkedin_img_icon" src={linkedinLightIcon} />)
                                        }
                                        <div class="card-img-overlay p-3">
                                        </div>
                                        <div class="photo_content">
                                            <h6>Sonny Singh</h6>
                                            <p>Chief technology officer</p>
                                        </div>
                                        <div class="photo_description">
                                            <p>Sonny was the first VP of Sales at Jumio and previously was at InMage Systems (acquired by Microsoft) and Niku.</p>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div class="gallery_photo shadow">
                                        {/* <img class="card-img-top" src={} /> */}
                                        <img class="user_img_top" src={User4} />
                                        {
                                            isDark? (<img class="linkedin_img_icon" src={linkedinBlackIcon} />):
                                                    (<img class="linkedin_img_icon" src={linkedinLightIcon} />)
                                        }
                                        <div class="card-img-overlay p-3">
                                        </div>
                                        <div class="photo_content">
                                            <h6>Misha Karpenko</h6>
                                            <p>Compiliance officer</p>
                                        </div>
                                        <div class="photo_description">
                                            <p>Misha has over 20 years of experience building software systems in the financial and communications industries.</p>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div class="gallery_photo shadow">
                                        {/* <img class="card-img-top" src={} /> */}
                                        <img class="user_img_top" src={User1} />
                                        {
                                            isDark? (<img class="linkedin_img_icon" src={linkedinBlackIcon} />):
                                                    (<img class="linkedin_img_icon" src={linkedinLightIcon} />)
                                        }
                                        <div class="card-img-overlay p-3">
                                        </div>
                                        <div class="photo_content">
                                            <h6>Alena Grace</h6>
                                            <p>Merchant e-Solutions</p>
                                        </div>
                                        <div class="photo_description">
                                            <p>With 17 years of experience as a legal executive (including 8 years for a Fortune 100 company and 9 years in private practice).</p>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div class="gallery_photo shadow">
                                        {/* <img class="card-img-top" src={} /> */}
                                        <img class="user_img_top" src={User5} />
                                        {
                                            isDark? (<img class="linkedin_img_icon" src={linkedinBlackIcon} />):
                                                    (<img class="linkedin_img_icon" src={linkedinLightIcon} />)
                                        }
                                        <div class="card-img-overlay p-3">
                                        </div>
                                        <div class="photo_content">
                                            <h6>Sam Nilson</h6>
                                            <p>Compiliance officer</p>
                                        </div>
                                        <div class="photo_description">
                                            <p>Misha has over 20 years of experience building software systems in the financial and communications industries.</p>
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

export default SectionTeamwork;