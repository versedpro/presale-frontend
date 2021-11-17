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
import BenWeider from '../../../assets/images/crosswise/members/BenWeider.jpg';
import JamesYin from '../../../assets/images/crosswise/members/JamesYin.jpg';

const SectionTeamwork = (props) => {

    const { isDark, toggleTheme } = useContext(ThemeContext)
    var settings = {
        dots: true,
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
                        <h1>Core Team</h1>
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
                                            <p>Senior Front-End Developer</p>
                                        </div>
                                        <div className="photo_description">
                                            <p>Yehor is Croatian, originally from Rijeka. He is a front-end and back-end developer with over 8 years development experience. In recent years, he has spent much of time working on DeFi projects. Yehor always aims to add his own magical touch to any code, and is a natural team player, who understand the importance of open collaboration, and communication. His hobbies are as varied as his coding experience. He enjoys singing, football, volleyball, mountain climbing and ping-pong.</p>
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

                                <li>
                                    <div className="gallery_photo shadow">
                                        {/* <img className="card-img-top" src={} /> */}
                                        <img className="user_img_top" src={BenWeider} />
                                        {
                                            isDark ? (<a className="linkedin_img_icon" href="https://www.linkedin.com/in/ben-weider-411184211/" target="_blank"><img src={linkedinBlackIcon} /></a>) :
                                                (<a className="linkedin_img_icon" href="https://www.linkedin.com/in/ben-weider-411184211/" target="_blank"><img src={linkedinLightIcon} /></a>)
                                        }
                                        <div className="card-img-overlay p-3">
                                        </div>
                                        <div className="photo_content">
                                            <h6>Ben Weider</h6>
                                            <p>Front-End Lead Developer</p>
                                        </div>
                                        <div className="photo_description">
                                            <p>Ben is a passionate blockchain and full stack Fintech developer who likes to build solutions combining blockchain technologies and financial trading systems. With over 9 years of experience, Ben leads the front-end development team.</p>
                                            {/* <p>Ben is a passionate blockchain and full stack Fintech developer who likes to build solutions combining blockchain technologies and financial trading systems. With over 9 years of experience, Ben leads the front-end development team. Ben has a particular talent for applying development best practices, methodologies and ensuring overall code quality. He loves to work together as part of a great team. In his free time he enjoys tennis and basketball, as well as technical trading on forex, futures and the crypto markets.</p> */}
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className="gallery_photo shadow">
                                        {/* <img className="card-img-top" src={} /> */}
                                        <img className="user_img_top" src={JamesYin} />
                                        {
                                            isDark ? (<a className="linkedin_img_icon" href="https://www.linkedin.com/in/yin-james-a303631b7/" target="_blank"><img src={linkedinBlackIcon} /></a>) :
                                                (<a className="linkedin_img_icon" href="https://www.linkedin.com/in/yin-james-a303631b7/" target="_blank"><img src={linkedinLightIcon} /></a>)
                                        }
                                        <div className="card-img-overlay p-3">
                                        </div>
                                        <div className="photo_content">
                                            <h6>James Yin</h6>
                                            <p>Senior Back-End Developer</p>
                                        </div>
                                        <div className="photo_description">
                                            <p>James specializes in smart contract and Dapp development at Crosswise. He is an accomplished back-end and front-end developer with over 8 years experience building web and mobile applications.</p>
                                            {/* <p>James specializes in smart contract and Dapp development at Crosswise. He is an accomplished back-end and front-end developer with over 8 years experience building web and mobile applications. He has accumulated extensive experience in blockchain development, contributing to a wide range of DeFi projects. James is a particularly creative and innovative developer. </p> */}
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