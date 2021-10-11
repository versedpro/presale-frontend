import React, { Component, Fragment, useState, useContext } from "react";
import { Container , Input} from 'reactstrap';

import Slider from "react-slick";
import 'react-accessible-accordion/dist/fancy-example.css';
import { Row, Col } from 'reactstrap';
import classnames from 'classnames';
import '../css/style.css'
import { ThemeContext } from "../../../contexts/ThemeContext";

import imgToken from '../../../assets/images/crosswise/tokenomic-img-v1.png'

import checkImg from '../../../assets/images/crosswise/roadmap-check.png'
import spinnerImg from '../../../assets/images/crosswise/roadmap-spinner.png'

const SectionRoadmapV2 = (props) => {

    const [viewOption, setViewOption] = useState(false);

    const changeView = () => {
        setViewOption(!viewOption);
        console.log(viewOption)
    }
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
                {
                    (!viewOption)?(
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
        
                                        <li>
                                            <div class="gallery_photo shadow">
                                                <div className="gradient-box">Q2/2022</div>
                                                <div class="card-img-overlay p-3">
                                                </div>
                                                <div class="photo_content">
                                                    <div className="content-desc">
                                                        <img src={spinnerImg} />
                                                        <div class="content-text">Synthetic Assets</div>
                                                    </div>
                                                    <div className="content-desc">
                                                        <img src={spinnerImg} />
                                                        <div class="content-text">Own Bridge for Assets</div>
                                                    </div>
                                                    <div className="content-desc">
                                                        <img src={spinnerImg} />
                                                        <div class="content-text">Cross-Chain instant Swap</div>
                                                    </div>
                                                    <div className="content-desc">
                                                        <img src={spinnerImg} />
                                                        <div class="content-text">ETH Release Dev</div>
                                                    </div>
                                                    <div className="content-desc">
                                                        <img src={spinnerImg} />
                                                        <div class="content-text">Token Owner Area</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
        
                                        <li>
                                            <div class="gallery_photo shadow">
                                                <div className="gradient-box">Q3/2022</div>
                                                <div class="card-img-overlay p-3">
                                                </div>
                                                <div class="photo_content">
                                                    <div className="content-desc">
                                                        <img src={spinnerImg} />
                                                        <div class="content-text">Crosswise Wallet</div>
                                                    </div>
                                                    <div className="content-desc">
                                                        <img src={spinnerImg} />
                                                        <div class="content-text">Own IFD</div>
                                                    </div>
                                                    <div className="content-desc">
                                                        <img src={spinnerImg} />
                                                        <div class="content-text">NFT marketplace</div>
                                                    </div>
                                                    <div className="content-desc">
                                                        <img src={spinnerImg} />
                                                        <div class="content-text">Shareholder/governance Token</div>
                                                    </div>
                                                    <div className="content-desc">
                                                        <img src={spinnerImg} />
                                                        <div class="content-text">Avalanche Release Dev</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
        
                                        <li>
                                            <div class="gallery_photo shadow">
                                                <div className="gradient-box">Q4/2022</div>
                                                <div class="card-img-overlay p-3">
                                                </div>
                                                <div class="photo_content">
                                                    <div className="content-desc">
                                                        <img src={spinnerImg} />
                                                        <div class="content-text">Mobile App</div>
                                                    </div>
                                                    <div className="content-desc">
                                                        <img src={spinnerImg} />
                                                        <div class="content-text">Solana Release Dev</div>
                                                    </div>
                                                    <div className="content-desc">
                                                        <img src={spinnerImg} />
                                                        <div class="content-text">Traditional trading View</div>
                                                    </div>
                                                    <div className="content-desc">
                                                        <img src={spinnerImg} />
                                                        <div class="content-text">Skill-Based Games</div>
                                                    </div>
                                                    <div className="content-desc">
                                                        <img src={spinnerImg} />
                                                        <div class="content-text">Avalanche Release Dev</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
        
                                    </Slider>
                                </ul>
                            </div>
                      </div> 
                    ):(
                        <div className="see_full_roadmap_section">
                        <div className="roadmap_item">
                            <div class="gallery_photo shadow">
                                <div className="gradient-box">Q3/2021</div>
                                <div class="card-img-overlay p-3">
                            </div>
                                <div class="photo_content">
                                    <div className="content-desc">
                                        <img src={checkImg} />
                                        <div class="content-text">Website & Dapp Design</div>
                                    </div>
                                    <div className="content-desc">
                                        <img src={checkImg} />
                                        <div class="content-text">DEX Smart Contracts</div>
                                    </div>
                                    <div className="content-desc">
                                        <img src={checkImg} />
                                        <div class="content-text">CRSS & XCRSS Smart Contracts</div>
                                    </div>
                                    <div className="content-desc">
                                        <img src={checkImg} />
                                        <div class="content-text">Presale Contract</div>
                                    </div>
                                    <div className="content-desc">
                                        <img src={checkImg} />
                                        <div class="content-text">Presale Frontend</div>
                                    </div>
                                    <div className="content-desc">
                                        <img src={checkImg} />
                                        <div class="content-text">Whitepaper & Pitchdeck</div>
                                    </div>
                                    <div className="content-desc">
                                        <img src={checkImg} />
                                        <div class="content-text">Locked LP Vesting contracts</div>
                                    </div>
                                    <div className="content-desc">
                                        <img src={checkImg} />
                                        <div class="content-text">Anti Whale Router</div>
                                    </div>
                                    <div className="content-desc">
                                        <img src={checkImg} />
                                        <div class="content-text">Mass Harvest and Mass Stake</div>
                                    </div>
                                    <div className="content-desc">
                                        <img src={checkImg} />
                                        <div class="content-text">Lockup feature</div>
                                    </div>
                                    <div className="content-desc">
                                        <img src={checkImg} />
                                        <div class="content-text">Trading Fee on DEX</div>
                                    </div>
                                    <div className="content-desc">
                                        <img src={checkImg} />
                                        <div class="content-text">Vesting/Immediate Claim</div>
                                    </div>
                                    <div className="content-desc">
                                        <img src={checkImg} />
                                        <div class="content-text">Referral</div>
                                    </div>
                                    <div className="content-desc">
                                        <img src={spinnerImg} />
                                        <div class="content-text">DAPP Frontend</div>
                                    </div>
                                    <div className="content-desc">
                                        <img src={spinnerImg} />
                                        <div class="content-text">Beta Version</div>
                                    </div>
                                    <div className="content-desc">
                                        <img src={spinnerImg} />
                                        <div class="content-text">Integrate Subgraph</div>
                                    </div>
                                    <div className="content-desc">
                                        <img src={spinnerImg} />
                                        <div class="content-text">Integrate Price Oracle</div>
                                    </div>
                                    <div className="content-desc">
                                        <img src={spinnerImg} />
                                        <div class="content-text">Orderbook</div>
                                    </div>
                                </div>
                            </div>
                            </div>
                       
        
                        <div className="roadmap_item">
                            <img src={imgToken} className="tokenImage" />
                            <div class="gallery_photo shadow space_img">
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
                                        <div class="content-text">Statistics / Account area</div>
                                    </div>
                                    <div className="content-desc">
                                        <img src={spinnerImg} />
                                        <div class="content-text">Explorer</div>
                                    </div>
                                    <div className="content-desc">
                                        <img src={spinnerImg} />
                                        <div class="content-text">Own Price Charts</div>
                                    </div>
                                    <div className="content-desc">
                                        <img src={spinnerImg} />
                                        <div class="content-text">Polygon Release Dev</div>
                                    </div>
                                    <div className="content-desc">
                                        <img src={spinnerImg} />
                                        <div class="content-text">Anti Bot Features</div>
                                    </div>
                                    <div className="content-desc">
                                        <img src={spinnerImg} />
                                        <div class="content-text">own API</div>
                                    </div>
                                    <div className="content-desc">
                                        <img src={spinnerImg} />
                                        <div class="content-text">User Notifications</div>
                                    </div>
                                    <div className="content-desc">
                                        <img src={spinnerImg} />
                                        <div class="content-text">Gasless Feature</div>
                                    </div>
                                    <div className="content-desc">
                                        <img src={spinnerImg} />
                                        <div class="content-text">Voting/ Snapshot</div>
                                    </div>
                                </div>
                            </div>
                        </div>
        
        
                        <div className="roadmap_item">
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
                                        <div class="content-text">own Price Charts</div>
                                    </div>
                                    <div className="content-desc">
                                        <img src={spinnerImg} />
                                        <div class="content-text">Bookmark / Notifications extended</div>
                                    </div>
                                    <div className="content-desc">
                                        <img src={spinnerImg} />
                                        <div class="content-text">Vaults for 3. Party</div>
                                    </div>
                                    <div className="content-desc">
                                        <img src={spinnerImg} />
                                        <div class="content-text">Ramp Network Integration</div>
                                    </div>
                                    <div className="content-desc">
                                        <img src={spinnerImg} />
                                        <div class="content-text">Front running deterrend</div>
                                    </div>
                                </div>
                            </div>
                        </div>
        
        
                        <div className="roadmap_item">
                            <div class="gallery_photo shadow">
                                <div className="gradient-box">Q2/2022</div>
                                <div class="card-img-overlay p-3">
                                </div>
                                <div class="photo_content">
                                    <div className="content-desc">
                                        <img src={spinnerImg} />
                                        <div class="content-text">Synthetic Assets</div>
                                    </div>
                                    <div className="content-desc">
                                        <img src={spinnerImg} />
                                        <div class="content-text">own Bridge for Assets</div>
                                    </div>
                                    <div className="content-desc">
                                        <img src={spinnerImg} />
                                        <div class="content-text">Cross-Chain instant Swap</div>
                                    </div>
                                    <div className="content-desc">
                                        <img src={spinnerImg} />
                                        <div class="content-text">ETH Release Dev</div>
                                    </div>
                                    <div className="content-desc">
                                        <img src={spinnerImg} />
                                        <div class="content-text">Token Owner Area</div>
                                    </div>
                                </div>
                            </div>
                        </div>
        
                        <div className="roadmap_item">
                            <div class="gallery_photo shadow">
                                <div className="gradient-box">Q3/2022</div>
                                <div class="card-img-overlay p-3">
                                </div>
                                <div class="photo_content">
                                    <div className="content-desc">
                                        <img src={spinnerImg} />
                                        <div class="content-text">Crosswise Wallet</div>
                                    </div>
                                    <div className="content-desc">
                                        <img src={spinnerImg} />
                                        <div class="content-text">Own IFD </div>
                                    </div>
                                    <div className="content-desc">
                                        <img src={spinnerImg} />
                                        <div class="content-text">NFT marketplace</div>
                                    </div>
                                    <div className="content-desc">
                                        <img src={spinnerImg} />
                                        <div class="content-text">Shareholder /governance Token</div>
                                    </div>
                                    <div className="content-desc">
                                        <img src={spinnerImg} />
                                        <div class="content-text">Avalanche Release Dev</div>
                                    </div>
                                </div>
                            </div>
                        </div>
        
                        <div className="roadmap_item">
                            <div class="gallery_photo shadow">
                                <div className="gradient-box">Q4/2022</div>
                                <div class="card-img-overlay p-3">
                                </div>
                                <div class="photo_content">
                                    <div className="content-desc">
                                        <img src={spinnerImg} />
                                        <div class="content-text">Mobile App</div>
                                    </div>
                                    <div className="content-desc">
                                        <img src={spinnerImg} />
                                        <div class="content-text">Solana Release Dev</div>
                                    </div>
                                    <div className="content-desc">
                                        <img src={spinnerImg} />
                                        <div class="content-text">Traditional trading View</div>
                                    </div>
                                    <div className="content-desc">
                                        <img src={spinnerImg} />
                                        <div class="content-text">Skill-Based Games</div>
                                    </div>
                                </div>
                            </div>
                        </div>
        
        
                      </div>
                    )
                }
                
             
              <div className="see_full_roadmap">
                  {
                      (!viewOption)?(
                        <button className="btn btn_primary p-15 m-auto" onClick={changeView}>See Full Roadmap</button>
                      ):(
                        <button className="btn btn_primary p-15 m-auto" onClick={changeView}>See Partial Roadmap</button>
                      )
                  }
                     
              </div>
            </Container>
          </section>
        );
}

export default SectionRoadmapV2;