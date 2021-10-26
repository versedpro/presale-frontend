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
        
          <section className="teamwork_section" id="team">
            <Container>
                <Row>
                    <div className="title">
                        <h1>Team</h1>
                    </div>
                </Row>
                
               <div className="exchange_slider">
                <div className="gallery_images">
                    <ul>
                        <Slider {...settings}>

                                <li>
                                    <div className="gallery_photo shadow">
                                        {/* <img class="card-img-top" src={} /> */}
                                        <img className="user_img_top" src={User2} />
                                        {
                                            isDark? (<a className="linkedin_img_icon" href="https://www.linkedin.com/in/fbeeg/" target="_blank"><img  src={linkedinBlackIcon} /></a>):
                                                    (<a className="linkedin_img_icon" href="https://www.linkedin.com/in/fbeeg/" target="_blank"><img  src={linkedinLightIcon} /> </a>)
                                        }
                                        <div className="card-img-overlay p-3">
                                        </div>
                                        <div className="photo_content">
                                            <h6>Frederic Beeg</h6>
                                            <p>CEO/Founder</p>
                                        </div>
                                        <div className="photo_description">
                                            <p>Focused on building crypto & e-commerce platforms. Living on Koh Phangan, Thailand & Canggu, Bali, Indonesia. Built an industry-leading digital marketplace for video game distribution, created successful brands on Amazon</p>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className="gallery_photo shadow">
                                        {/* <img class="card-img-top" src={} /> */}
                                        <img className="user_img_top" src={User3} />
                                        {
                                            isDark? (<a className="linkedin_img_icon" href="https://www.linkedin.com/in/dino-dzizic-189a54191/" target="_blank"><img  src={linkedinBlackIcon} /></a>):
                                                    (<a className="linkedin_img_icon" href="https://www.linkedin.com/in/dino-dzizic-189a54191/" target="_blank"><img  src={linkedinLightIcon} /></a>)
                                        }
                                        <div className="card-img-overlay p-3">
                                        </div>
                                        <div className="photo_content">
                                            <h6>Dino Dzizic</h6>
                                            <p>Chief technology officer</p>
                                        </div>
                                        <div className="photo_description">
                                            <p>Defi/Dapp/NFT specialist & Passionate in blockchain industry with 5+ years experience and Bachelor's Degree in software engineering.</p>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className="gallery_photo shadow">
                                        {/* <img class="card-img-top" src={} /> */}
                                        <img className="user_img_top" src={User4} />
                                        {
                                            isDark? (<a className="linkedin_img_icon" href="#" target="_blank"><img  src={linkedinBlackIcon} /></a>):
                                                    (<a className="linkedin_img_icon" href="#" target="_blank"><img  src={linkedinLightIcon} /></a>)
                                        }
                                        <div className="card-img-overlay p-3">
                                        </div>
                                        <div className="photo_content">
                                            <h6>Gregory Khine</h6>
                                            <p>Chief operating officer</p>
                                        </div>
                                        <div className="photo_description">
                                            <p>Founded an award-winning web agency as well as popular online education resources in the late 90s. Greg fell down the crypto rabbit hole in 2015, and has since developed a particular interest in DeFi, both the technology and its transformative potential. He holds undergraduate and graduate degrees from the London School of Economics & Political Science.</p>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className="gallery_photo shadow">
                                        {/* <img class="card-img-top" src={} /> */}
                                        <img className="user_img_top" src={User1} />
                                        {
                                            isDark? (<a className="linkedin_img_icon" href="https://www.linkedin.com/in/leon-jin-7013011b9/" target="_blank"><img  src={linkedinBlackIcon} /></a>):
                                                    (<a className="linkedin_img_icon" href="https://www.linkedin.com/in/leon-jin-7013011b9/" target="_blank"><img  src={linkedinLightIcon} /></a>)
                                        }
                                        <div className="card-img-overlay p-3">
                                        </div>
                                        <div className="photo_content">
                                            <h6>Leon Jin</h6>
                                            <p>Lead Developer</p>
                                        </div>
                                        <div className="photo_description">
                                            <p>For recent years, Leon is focusing on developing blockchain projects having a deep knowledge of blockchain technologies, specifically in constructing the decentralized application, fork & customizing the existing secure smart contracts, implementing trending methods like yield farming, new proof methods and etc.</p>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className="gallery_photo shadow">
                                        {/* <img class="card-img-top" src={} /> */}
                                        <img className="user_img_top" src={User5} />
                                        {
                                            isDark? (<a className="linkedin_img_icon" href="https://www.linkedin.com/in/james-gao-49461a217/" target="_blank"><img src={linkedinBlackIcon} /></a>):
                                                    (<a className="linkedin_img_icon" href="https://www.linkedin.com/in/james-gao-49461a217/" target="_blank"><img src={linkedinLightIcon} /></a>)
                                        }
                                        <div className="card-img-overlay p-3">
                                        </div>
                                        <div className="photo_content">
                                            <h6>James Gao</h6>
                                            <p>Lead Developer</p>
                                        </div>
                                        <div className="photo_description">
                                            <p>James is honored with a bachelor's degree in the computer science under a robust educational background. Strong points are deep knowledge of software engineering and its implementation to the work.</p>
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