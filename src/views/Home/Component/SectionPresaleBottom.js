import React, { useState, useContext, useEffect } from "react";
import { Container } from 'reactstrap';

import 'react-accessible-accordion/dist/fancy-example.css';
import { Row, Col } from 'reactstrap';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import classnames from 'classnames';

import '../css/style.css'
import { ThemeContext } from "../../../contexts/ThemeContext";

import arrow1 from '../../../assets/images/crosswise/presale_arrow_1.png'
import arrow2 from '../../../assets/images/crosswise/presale_arrow_2.png'

import stepImg1 from '../../../assets/images/crosswise/presale_step_img1.png'
import stepImg2 from '../../../assets/images/crosswise/presale_step_img2.png'

const SectionPresaleBottom = (props) => {

    const { isDark, toggleTheme } = useContext(ThemeContext)

    const [counter, setCounter] = useState(0);
  
    const [second, setSecond] = useState('00');
    const [minute, setMinute] = useState('00');
    const [day, setDay] = useState('00');
    const [hour, setHour] = useState('00');

    useEffect(() => {
        const currentTime = Date.now();
        // console.log("currentTime", currentTime);
            const presaleTime = new Date(2021, 9, 27, 12, 0, 0).getTime();
        // console.log("presaleTime",  presaleTime)
        const presaleTimezoneOffset = new Date(presaleTime).getTimezoneOffset();
        //  console.log("presaleTimezoneOffset1", presaleTimezoneOffset)
        const utcPresaleTime = presaleTime - presaleTimezoneOffset * 60 * 1000;
        // console.log("utcPresaleTime", utcPresaleTime)

        const timeStamp = utcPresaleTime - currentTime;
        // console.log("timestamp", timeStamp);
        if(counter > 0 ) return;
        // get timestamp
        // 18.10.2021 3PM CET UTC + 2(+120)
        setCounter(Math.floor(timeStamp/1000));
    }, [counter]);

    useEffect(()=> {
        const intervalId = setInterval(() => {
            setDay('00');
            setMinute('00');
            setHour('00');
            setSecond('00');
            if(counter === 0){
            setDay('00');
            setMinute('00');
            setHour('00');
            setSecond('00');
            clearInterval(intervalId);
            return;
            }
            if(counter > 0){
            setCounter(counter - 1);
            }
            
        }, 1000);
        return () => clearInterval(intervalId);
    }, [counter]);

    return (
        <section className="presale_bottom_section">
            <Carousel
                showArrows={true}
                showStatus={false}
                autoPlay={false}
                showThumbs={false}
            >
                <Container style={{ paddingBottom: '40px' }}>
                    <Row>
                        <div className="title">
                            <h1>Pre-Sale Round 2 Live</h1>
                        </div>
                    </Row>
                    <div className="presale_info">
                        <div className="info_desc pt-50">Max Amount Per Wallet</div>
                        <div className="info_desc t_b pt-30">25,000 BUSD</div>
                        <div className="info_desc pt-50">Vesting Schedule</div>
                        <div className="info_desc t_b pt-30">5 months linearly with 20% unlock every 30 days after purchase</div>
                    </div>
                    <div className="presale_stages">
                        <div className="s_diagram size_md round2">
                            <div className="stage_item">
                                <div className="item_title">Stage 1</div>
                                <h6 className="item_desc pt-30">Price <b>0.7 BUSD</b></h6>
                                <h6 className="item_desc">0.5M Tokens = 350K BUSD</h6>
                            </div>
                            <img src={arrow1} alt="" />
                            <div className="stage_item">
                                <div className="item_title">Stage 2</div>
                                <h6 className="item_desc pt-30">Price <b>0.8 BUSD</b></h6>
                                <h6 className="item_desc">0.5M Tokens = 400K BUSD</h6>
                            </div>
                        </div>

                        <div className="s_diagram size_sm">
                            <div className="stage_item">
                                <div className="item_title">Stage 1</div>
                                <h6 className="item_desc  pt-30">Price <b>0.7 BUSD</b></h6>
                                <h6 className="item_desc">0.5M Tokens = 350K BUSD</h6>
                            </div>
                            <img src={arrow2} className="mt-30" alt="" />
                            <div className="stage_item mt-30">
                                <div className="item_title">Stage 2</div>
                                <h6 className="item_desc pt-30">Price <b>0.8 BUSD</b></h6>
                                <h6 className="item_desc">0.5M Tokens = 400K BUSD</h6>
                            </div>
                        </div>

                        <div className="stage_step">
                            <div className="step_item b_green">
                                <img src={stepImg1} alt="" />
                                <div className="step_desc">Combined total of 1.85 million BUSD hard cap, 200K soft cap</div>
                            </div>
                            <div className="step_item">
                                <img src={stepImg2} alt="" />
                                <div className="step_desc">70% of presale amount for development and marketing</div>
                            </div>
                            <div className="step_item b_green">
                                <img src={stepImg1} alt="" />
                                <div className="step_desc">30% for initial CRSS/BNB and CRSS/BUSD liquidity</div>
                            </div>
                            <div className="step_item">
                                <img src={stepImg2} alt="" />
                                <div className="step_desc">Combined maximum total of 4 million tokens at pre-sale (8% of max supply)</div>
                            </div>
                            <div className="step_item b_green">
                                <img src={stepImg1} alt="" />
                                <div className="step_desc">Base price 0.95 BUSD after pre-sale</div>
                            </div>
                            <div className="step_item">
                                <img src={stepImg2} alt="" />
                                <div className="step_desc">Minimum buy 1 BUSD</div>
                            </div>
                        </div>
                    </div>

                    <div className="see_full_roadmap">
                        <a className="btn btn_primary btn_whitelisted m-auto p-15 maxContent"  href="https://x9epe3je3fk.typeform.com/crosswise">Get Whitelisted</a>
                    </div>
                </Container>
                
                <Container style={{ paddingBottom: '40px' }}>
                    <Row>
                        <div className="title">
                            <h1>Pre-Sale Round 1 Closed</h1>
                        </div>
                    </Row>
                    <div className="presale_info">
                        <div className="info_desc pt-50">Max Amount Per Wallet</div>
                        <div className="info_desc t_b pt-30">25,000 BUSD</div>
                        <div className="info_desc pt-50">Vesting Schedule</div>
                        <div className="info_desc t_b pt-30">5 months linearly with 20% unlock every 30 days</div>
                    </div>
                    <div className="presale_stages">
                        <div className="s_diagram size_md">
                            <div className="stage_item">
                                <div className="item_title">Stage 1</div>
                                <h6 className="item_desc pt-30">Price <b>0.2 BUSD</b></h6>
                                <h6 className="item_desc">1M Tokens = 200K BUSD</h6>
                            </div>
                            <img src={arrow1} alt="" />
                            <div className="stage_item">
                                <div className="item_title">Stage 2</div>
                                <h6 className="item_desc pt-30">Price <b>0.3 BUSD</b></h6>
                                <h6 className="item_desc">1M Tokens = 300K BUSD</h6>
                            </div>
                            <img src={arrow1} alt="" />
                            <div className="stage_item">
                                <div className="item_title">Stage 3</div>
                                <h6 className="item_desc pt-30">Price <b>0.6 BUSD</b></h6>
                                <h6 className="item_desc">1M Tokens = 600K BUSD</h6>
                            </div>
                        </div>


                        <div className="s_diagram size_sm">
                            <div className="stage_item">
                                <div className="item_title">Stage 1</div>
                                <h6 className="item_desc  pt-30">Price <b>0.2 BUSD</b></h6>
                                <h6 className="item_desc">1M Tokens = 200K BUSD</h6>
                            </div>
                            <img src={arrow2} className="mt-30" alt="" />
                            <div className="stage_item mt-30">
                                <div className="item_title">Stage 2</div>
                                <h6 className="item_desc pt-30">Price <b>0.3 BUSD</b></h6>
                                <h6 className="item_desc">1M Tokens = 300K BUSD</h6>
                            </div>
                            <img src={arrow2} className="mt-30" alt="" />
                            <div className="stage_item mt-30">
                                <div className="item_title">Stage 3</div>
                                <h6 className="item_desc pt-30">Price <b>0.6 BUSD</b></h6>
                                <h6 className="item_desc">1M Tokens = 600K BUSD</h6>
                            </div>
                        </div>
                        <div className="stage_step">
                            <div className="step_item b_green">
                                <img src={stepImg1} alt="" />
                                <div className="step_desc">Combined total of 1.85 million BUSD hard cap, 200K soft cap</div>
                            </div>
                            <div className="step_item">
                                <img src={stepImg2} alt="" />
                                <div className="step_desc">70% of presale amount for development and marketing</div>
                            </div>
                            <div className="step_item b_green">
                                <img src={stepImg1} alt="" />
                                <div className="step_desc">30% for initial CRSS/BNB and CRSS/BUSD liquidity</div>
                            </div>
                            <div className="step_item">
                                <img src={stepImg2} alt="" />
                                <div className="step_desc">Combined maximum total of 4 million tokens at pre-sale (8% of max supply)</div>
                            </div>
                            <div className="step_item b_green">
                                <img src={stepImg1} alt="" />
                                <div className="step_desc">Base price 0.95 BUSD after pre-sale</div>
                            </div>
                            <div className="step_item">
                                <img src={stepImg2} alt="" />
                                <div className="step_desc">Minimum buy 1 BUSD</div>
                            </div>
                        </div>
                    </div>

                    <div className="see_full_roadmap">
                        <a className="btn btn_primary btn_whitelisted m-auto p-15 maxContent"  href="https://x9epe3je3fk.typeform.com/crosswise">Get Whitelisted</a>
                    </div>
                </Container>
            </Carousel>
        </section>
    );
}

export default SectionPresaleBottom;