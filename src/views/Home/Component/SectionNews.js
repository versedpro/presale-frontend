import React, { Component, Fragment, useState, useContext } from "react";
import { Container , Input} from 'reactstrap';

import Slider from "react-slick";
import 'react-accessible-accordion/dist/fancy-example.css';
import { Row, Col } from 'reactstrap';

import '../css/style.css'
import { ThemeContext } from "../../../contexts/ThemeContext";

import Img6 from '../../../assets/images/crosswise/image-6.png';
import ContentImg1 from '../../../assets/images/crosswise/content-img-9.png';
import ContentImg2 from '../../../assets/images/crosswise/content-img-8.png';
import HeartImg from '../../../assets/images/crosswise/24-px-heart.png';
import ReplyBack from '../../../assets/images/crosswise/reply-back.png';
import HeartImgWhite from '../../../assets/images/crosswise/24-px-heart-white.png';
import ReplyBackWhite from '../../../assets/images/crosswise/share-white.png'

const SectionNews = (props) => {

    const { isDark, toggleTheme } = useContext(ThemeContext)
    var settings = {
        dots: false,
        infinite: false,
        arrows: false,
        swipeToSlide: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        draggable:  false,
        autoplay: false,
        autoplaySpeed: 1500,
        variableWidth: false,
        centerMode: false,
        fade: false,
        cssEase: 'linear',
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                dots:true,
                draggable: true
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
        
          <section className="news_section">
            <Container>    
            <div class="row">
                <div class="col-md-6 my-auto">
                    <h1 class="mb-md-0 mb-4">Medium News</h1>
                </div>
                <div class="col-md-6 my-auto ml-auto d-md-block d-none">
                    <a id="readmore_article" href="#" class="btn btn_primary btn_readmore ml-auto">Read More</a>
                </div>
			</div>

            <div class="latest_blog d-md-block d-none">
						<div class="row">
							<div class="col-xl-8 col-lg-7">
								<img src={ContentImg1} alt="content-img-9.png" class="w-100 blog_bimg " />
							</div>
							<div class="col-xl-4 col-lg-5">
								<div class="blog_details">
									<h5 class="blog_type">TRENDS <span>1 days ago</span></h5>

									<a href="#" ><h3>Fast and flexible
										observability with 
										canonical log lines
									</h3></a>

									<p>The first cross-blockchain AMM (Automatic Money Creation) and DAPP (Decenterlized
										Application) focused on creating Dex (Decenterlized Exchange) for Etherium..</p>

									<div class="heart_reply">
										<img src={isDark? HeartImg: HeartImgWhite} alt="24-px-heart.png" class="heart-logo" />
										<img src={isDark? ReplyBack: ReplyBackWhite} alt="reply-back.png" class="reply-logo" />
									</div>	

								</div>
								
							</div>
						</div>
					</div>


                    <div class="blogs_slider">
                    <ul>
                        <Slider {...settings}>
							<li class="d-md-none">
								<div class="card blog_card">
									<img class="card-img-top" src={ContentImg1} alt="content-img-9.png" />
									<div class="card-body">
										<h5 class="blog_type">TRENDS <span>1 days ago</span></h5>
										<a href="#" ><h4>Fast and flexible observability with 
											canonical log lines</h4></a>
										<p>The first cross-blockchain AMM (Automatic Money Creation) and DAPP (Decenterlized
											Application) focused on creating Dex (Decenterlized Exchange) for Etherium..</p>
											<div class="heart_reply">
                                                <img src={isDark? HeartImg: HeartImgWhite} alt="24-px-heart.png" class="heart-logo" />
                                                <img src={isDark? ReplyBack: ReplyBackWhite} alt="reply-back.png" class="reply-logo" />
											</div>	
									</div>
									
								  </div>
							</li>

                            <li>
								<div class="card blog_card">
									<img class="card-img-top" src={ContentImg2} alt="content-img-8.png" />
									<div class="card-body">
										<h5 class="blog_type">TRENDS <span>1 days ago</span></h5>
										<a href="#" ><h4>Embiling Issuing is now open to all us businesses</h4></a>
										<p>Embily Issuing is an API that allows you to create and control virtual and physical cards. Today we're opening access to all businesses in the US, so you can signup</p>
										<div class="heart_reply">
                                            <img src={isDark? HeartImg: HeartImgWhite} alt="24-px-heart.png" class="heart-logo" />
                                            <img src={isDark? ReplyBack: ReplyBackWhite} alt="reply-back.png" class="reply-logo" />
										</div>	
									</div>
									
								  </div>
							</li>

                            
                            <li>
								<div class="card blog_card">
									<img class="card-img-top" src={ContentImg2} alt="content-img-8.png" />
									<div class="card-body">
										<h5 class="blog_type">TRENDS <span>1 days ago</span></h5>
										<a href="#" ><h4>Embiling Issuing is now open to all us businesses</h4></a>
										<p>Embily Issuing is an API that allows you to create and control virtual and physical cards. Today we're opening access to all businesses in the US, so you can signup</p>
										<div class="heart_reply">
                                            <img src={isDark? HeartImg: HeartImgWhite} alt="24-px-heart.png" class="heart-logo" />
                                            <img src={isDark? ReplyBack: ReplyBackWhite} alt="reply-back.png" class="reply-logo" />
										</div>	
									</div>
									
								  </div>
							</li>


                            
                            <li>
								<div class="card blog_card">
									<img class="card-img-top" src={ContentImg2} alt="content-img-8.png" />
									<div class="card-body">
										<h5 class="blog_type">TRENDS <span>1 days ago</span></h5>
										<a href="#" ><h4>Embiling Issuing is now open to all us businesses</h4></a>
										<p>Embily Issuing is an API that allows you to create and control virtual and physical cards. Today we're opening access to all businesses in the US, so you can signup</p>
										<div class="heart_reply">
                                            <img src={isDark? HeartImg: HeartImgWhite} alt="24-px-heart.png" class="heart-logo" />
                                            <img src={isDark? ReplyBack: ReplyBackWhite} alt="reply-back.png" class="reply-logo" />
										</div>	
									</div>
									
								  </div>
							</li>

                        </Slider>
                    </ul>
                    </div>

            </Container>
          </section>
        );
}

export default SectionNews;