import React, { Component, Fragment, useState, useContext } from "react";
import { Container, Input } from 'reactstrap';

import Slider from "react-slick";
import 'react-accessible-accordion/dist/fancy-example.css';
import { Row, Col } from 'reactstrap';
import '../css/style.css'
import { ThemeContext } from "../../../contexts/ThemeContext";

import linkedinBlackIcon from '../../../assets/images/crosswise/linkedin-black-icon.png';
import linkedinLightIcon from '../../../assets/images/crosswise/linkedin-white-icon.png';

import Freddy from '../../../assets/images/crosswise/members/Freddy.png';
import Greg from '../../../assets/images/crosswise/members/Greg.png';
import Dino from '../../../assets/images/crosswise/members/Dino.jpg';
import Yehor from '../../../assets/images/crosswise/members/Yehor.jpg';
import Leon from '../../../assets/images/crosswise/members/Leon.jpg';
import JamesGao from '../../../assets/images/crosswise/members/JamesGao.jpg';

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
                dots: true
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
                                        {/* <img className="card-img-top" src={} /> */}
                                        <img className="user_img_top" src={Freddy} />
                                        {
                                            isDark ? (<a className="linkedin_img_icon" href="https://www.linkedin.com/in/fbeeg/" target="_blank"><img src={linkedinBlackIcon} /></a>) :
                                                (<a className="linkedin_img_icon" href="https://www.linkedin.com/in/fbeeg/" target="_blank"><img src={linkedinLightIcon} /> </a>)
                                        }
                                        <div className="card-img-overlay p-3">
                                        </div>
                                        <div className="photo_content">
                                            <h6>Frederic Beeg</h6>
                                            <p>CEO/Founder</p>
                                        </div>
                                        <div className="photo_description">
                                            <p>Focused on building crypto and e-commerce platforms. Living on Koh Phangan, Thailand and Canggu, Bali, Indonesia. Built an industry-leading digital marketplace for video game distribution, and created several successful brands on Amazon.</p>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className="gallery_photo shadow">
                                        {/* <img className="card-img-top" src={} /> */}
                                        <img className="user_img_top" src={Greg} />
                                        {
                                            isDark ? (<a className="linkedin_img_icon" href="https://www.linkedin.com/in/gregory-khine/" target="_blank"><img src={linkedinBlackIcon} /></a>) :
                                                (<a className="linkedin_img_icon" href="https://www.linkedin.com/in/gregory-khine/" target="_blank"><img src={linkedinLightIcon} /></a>)
                                        }
                                        <div className="card-img-overlay p-3">
                                        </div>
                                        <div className="photo_content">
                                            <h6>Gregory Khine</h6>
                                            <p>Chief Operating Officer</p>
                                        </div>
                                        <div className="photo_description">
                                            <p>Founded an award-winning web agency as well as popular online education resources in the late 90s. Greg fell down the crypto rabbit hole in 2015, and has since developed a particular interest in DeFi, both the technology and its transformative potential. He holds undergraduate and graduate degrees from the London School of Economics & Political Science.</p>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className="gallery_photo shadow">
                                        {/* <img className="card-img-top" src={} /> */}
                                        <img className="user_img_top" src={Dino} />
                                        {
                                            isDark ? (<a className="linkedin_img_icon" href="https://www.linkedin.com/in/dino-dzizic-189a54191/" target="_blank"><img src={linkedinBlackIcon} /></a>) :
                                                (<a className="linkedin_img_icon" href="https://www.linkedin.com/in/dino-dzizic-189a54191/" target="_blank"><img src={linkedinLightIcon} /></a>)
                                        }
                                        <div className="card-img-overlay p-3">
                                        </div>
                                        <div className="photo_content">
                                            <h6>Dino Dzizic</h6>
                                            <p>Chief Technology Officer</p>
                                        </div>
                                        <div className="photo_description">
                                            <p>DeFi/Dapp/NFT specialist with a passion for blockchain technology. Dino has over 5 years experience developing blockchain technology, including high-profile projects, and holds a Bachelor's degree in software engineering.</p>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className="gallery_photo shadow">
                                        {/* <img className="card-img-top" src={} /> */}
                                        <img className="user_img_top" src={Yehor} />
                                        {
                                            isDark ? (<a className="linkedin_img_icon" href="https://www.linkedin.com/in/yehor-oshodin-667962209/" target="_blank"><img src={linkedinBlackIcon} /></a>) :
                                                (<a className="linkedin_img_icon" href="https://www.linkedin.com/in/yehor-oshodin-667962209/" target="_blank"><img src={linkedinLightIcon} /></a>)
                                        }
                                        <div className="card-img-overlay p-3">
                                        </div>
                                        <div className="photo_content">
                                            <h6>Yehor Oshodin</h6>
                                            <p>FrontEnd Lead</p>
                                        </div>
                                        <div className="photo_description">
                                            <p>I always look to add my own magical touch to any new code that I write, and would like to mention that in the past I have worked alongside some very technically able individuals in the industry. I consider myself a real team player who understands the importance of teamwork, collaboration, and open communication. </p>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className="gallery_photo shadow">
                                        {/* <img className="card-img-top" src={} /> */}
                                        <img className="user_img_top" src={Leon} />
                                        {
                                            isDark ? (<a className="linkedin_img_icon" href="https://www.linkedin.com/in/leon-jin-7013011b9/" target="_blank"><img src={linkedinBlackIcon} /></a>) :
                                                (<a className="linkedin_img_icon" href="https://www.linkedin.com/in/leon-jin-7013011b9/" target="_blank"><img src={linkedinLightIcon} /></a>)
                                        }
                                        <div className="card-img-overlay p-3">
                                        </div>
                                        <div className="photo_content">
                                            <h6>Leon Jin</h6>
                                            <p>Lead Developer</p>
                                        </div>
                                        <div className="photo_description">
                                            <p>In recent years Leon has focused on developing blockchain projects. He has an in-depth understanding of blockchain technology, with a particular focus on building decentralized applications, yield farming methods, and new proof methods.</p>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className="gallery_photo shadow">
                                        {/* <img className="card-img-top" src={} /> */}
                                        <img className="user_img_top" src={JamesGao} />
                                        {
                                            isDark ? (<a className="linkedin_img_icon" href="https://www.linkedin.com/in/james-gao-49461a217/" target="_blank"><img src={linkedinBlackIcon} /></a>) :
                                                (<a className="linkedin_img_icon" href="https://www.linkedin.com/in/james-gao-49461a217/" target="_blank"><img src={linkedinLightIcon} /></a>)
                                        }
                                        <div className="card-img-overlay p-3">
                                        </div>
                                        <div className="photo_content">
                                            <h6>James Gao</h6>
                                            <p>Lead Developer</p>
                                        </div>
                                        <div className="photo_description">
                                            <p>James holds a bachelor's degree in computer science and has a profound understanding of software engineering. He is a full stack developer who has contributed to several well-known DeFi projects.</p>
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