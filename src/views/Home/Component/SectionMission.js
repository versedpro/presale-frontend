import React, { Component, Fragment, useState, useContext } from "react";
import { Container , Input} from 'reactstrap';

import 'react-accessible-accordion/dist/fancy-example.css';
import { Row, Col } from 'reactstrap';
import classnames from 'classnames';
import '../css/style.css'
import { ThemeContext } from "../../../contexts/ThemeContext";

import Img1 from '../../../assets/images/crosswise/image-1.png';
import Icon1 from '../../../assets/images/crosswise/feature/img_advanced_exchange.png';
import Icon2 from '../../../assets/images/crosswise/feature/img_interoperable_swap_exchange.png';
import Icon3 from '../../../assets/images/crosswise/feature/img_order_books.png';
import Icon4 from '../../../assets/images/crosswise/feature/img_analytics.png';
import Icon5 from '../../../assets/images/crosswise/feature/img_price_chart.png';
import Icon6 from '../../../assets/images/crosswise/feature/img_account_stats.png';
import Icon7 from '../../../assets/images/crosswise/feature/img_referral_affiliate_commissions.png';

import Lan1 from '../../../assets/images/crosswise/launchpad/launchpad_project.png';
import Lan2 from '../../../assets/images/crosswise/launchpad/launchpad-token_pool.png';
import Lan3 from '../../../assets/images/crosswise/launchpad/launchpad-token_area.png';
import Lan4 from '../../../assets/images/crosswise/launchpad/launchpad-development.png';

import Dex1 from '../../../assets/images/crosswise/dex/img_tokens_crss_xcrss.png';
import Dex2 from '../../../assets/images/crosswise/dex/img_emissions.png';
import Dex3 from '../../../assets/images/crosswise/dex/img_gasless_mode.png';
import Dex4 from '../../../assets/images/crosswise/dex/img_voting_options.png';
import Dex5 from '../../../assets/images/crosswise/dex/img_subgraph_graph.png';
import Dex6 from '../../../assets/images/crosswise/dex/img_dex_mech.png';
import Dex7 from '../../../assets/images/crosswise/dex/dex-mech-04.png';
import Dex8 from '../../../assets/images/crosswise/dex/dex-mech_1.png';
import Dex9 from '../../../assets/images/crosswise/dex/dex-mech-02.png';

const SectionMission = (props) => {

    const { isDark, toggleTheme } = useContext(ThemeContext)
    return (
        
          <section className="mission_section">
            <Container>
                <Row>
                    <div className="mission_item">
                        <div className="item_img">
                            <img src={Img1} />
                        </div>
                        <div className="item_content">
                            <h1>Why CrossWise?</h1>
                            <p>DeFi is relatively very new but packed with untapped utility. Platform Functionality, Portfolio Tracking, Trading Tools & Native Coin stability are fundamentals of success for our DEX. Fine-tuning in areas important for traders is a fundamental responsibility for Crosswise. </p>
                        </div>
                    </div>

                   <div className="platform_features">
                    <div className="title">
                        <h1>Platform Features</h1>
                    </div>
                    <div class="" data-title="Hypertext Markup Language">HTML</div>
                    <div className="feature_item_group">
                        <div className="feature_item ">
                            <div className="feature_item_icon tooltip expand" data-title="A seamless way of swapping tokens. Swap Exchange uses automated liquidity pools to execute your swap in an instant.">
                              <img src={Icon1} />
                              
                            </div>
                            <div className="desc">
                             <h6>Interoperability Swap Exchange</h6>
                            </div>
                        </div>

                        <div className="feature_item">
                            <div className="feature_item_icon tooltip expand" data-title="Advanced exchange arms you with tools to manage your limit buy orders. Stay over the edge with your trade strategies. ">
                              <img src={Icon2} />
                            </div>
                            <div className="desc">
                             <h6>Advanced Exchange</h6>
                            </div>
                        </div>

                        <div className="feature_item">
                            <div className="feature_item_icon tooltip expand" data-title="Track your activities using the orderbook. Find all your token trade/ swap data for Quickswap & Advanced Exchange orders until the block level. ">
                              <img src={Icon3} />
                            </div>
                            <div className="desc">
                             <h6>Order Book</h6>
                            </div>
                        </div>

                        <div className="feature_item">
                            <div className="feature_item_icon tooltip expand" data-title="Keep track of global & personal data using the analytics dashboard. Trade Volume, Liquidity for your favorite tokens can be found here. ">
                              <img src={Icon4} />
                            </div>
                            <div className="desc">
                             <h6>Analytics</h6>
                            </div>
                        </div>
                    
                
                    <div className="feature_item">
                        <div className="feature_item_icon tooltip expand" data-title="Take better decisions, track & monitor all coins & tokens traded on Crosswise. The Database for all asset values under your fingertips.">
                          <img src={Icon5} />
                        </div>
                        <div className="desc">
                          <h6>Price Chart</h6>
                        </div>
                    </div>

                    <div className="feature_item">
                        <div className="feature_item_icon tooltip expand" data-title="Dive deeper into the numbers that matter. Personal account statistics lets you track assets with personal stats, historical movements of values, your personal wallet, pools & farms on the DEX.">
                          <img src={Icon6} />
                        </div>
                        <div className="desc">
                          <h6>Account Stats</h6>
                        </div>
                    </div>

                    <div className="feature_item">
                        <div className="feature_item_icon tooltip expand" data-title="Share the platform with your friends, family & peers and earn 1% of the new users' lifetime earnings. A unique link will be given to all users to track their commissions.">
                          <img src={Icon7} />
                        </div>
                        <div className="desc">
                          <h6>Referral Affiliate Commissions</h6>
                        </div>
                    </div>
                    </div>
                    
                   </div>

                   <div className="launchpad_features">
                    <div className="title">
                        <h1>Launchpad</h1>
                    </div>
                    <div className="feature_item_group">
                        <div className="feature_item">
                            <div className="feature_item_icon">
                              <img src={Lan1} />
                            </div>
                            <div className="desc">
                             <h6>Verified Projects Launchpad</h6>
                            </div>
                        </div>

                        <div className="feature_item">
                            <div className="feature_item_icon">
                              <img src={Lan2} />
                            </div>
                            <div className="desc">
                             <h6>Native & Cross-Chain token Pools</h6>
                            </div>
                        </div>

                        <div className="feature_item">
                            <div className="feature_item_icon">
                              <img src={Lan3} />
                            </div>
                            <div className="desc">
                             <h6>Token Owners Area</h6>
                            </div>
                        </div>

                        <div className="feature_item">
                            <div className="feature_item_icon">
                              <img src={Lan4} />
                            </div>
                            <div className="desc">
                             <h6>Incubator Program for Ecosystem Growth & Development</h6>
                            </div>
                        </div>
                    </div>
                   </div>

                  <div className="dex_mechanics">
                    <div className="title">
                        <h1>Dex Mechanics</h1>
                    </div>
                    <div className="feature_item_group">
                        <div className="feature_item">
                            <div className="feature_item_icon">
                              <img src={Dex1} />
                            </div>
                            <div className="desc">
                             <h6>Tokens: CRSS, XCRSS</h6>
                            </div>
                        </div>

                        <div className="feature_item">
                            <div className="feature_item_icon tooltip expand" data-title="Emissions are how the platform operates. 8% of CRSS per block goes to the team/ dev wallet to help the team with operation on the DEX.
">
                              <img src={Dex2} />
                            </div>
                            <div className="desc">
                             <h6>Emissions</h6>
                            </div>
                        </div>

                        <div className="feature_item">
                            <div className="feature_item_icon tooltip expand" data-title="The Gasless mode allows users to trade without gas. Trade-in confidence without worrying about gas, we have got you covered.">
                              <img src={Dex3} />
                            </div>
                            <div className="desc">
                             <h6>Gasless Mode</h6>
                            </div>
                        </div>

                        <div className="feature_item">
                            <div className="feature_item_icon tooltip expand" data-title="Your opinions matter. Add proposals & vote, the demand will be heard. The more coins you hold, the stronger your voting power is. Let's keep building the DEX together.">
                              <img src={Dex4} />
                            </div>
                            <div className="desc">
                             <h6>Voting Options</h6>
                            </div>
                        </div>

                        <div className="feature_item">
                            <div className="feature_item_icon tooltip expand" data-title="Makes indexing flawless. Our subgraph is powered by The Graph  for querying networks like Ethereum & IPFS. Open API subgraph makes data easily accessible for the internet.">
                              <img src={Dex5} />
                            </div>
                            <div className="desc">
                             <h6>Subgraph: The Graph</h6>
                            </div>
                        </div>

                        <div className="feature_item">
                            <div className="feature_item_icon">
                              <img src={Dex6} />
                            </div>
                            <div className="desc">
                             <h6>Price Oracle with Chainlink</h6>
                            </div>
                        </div>

                        <div className="feature_item">
                            <div className="feature_item_icon">
                              <img src={Dex7} />
                            </div>
                            <div className="desc">
                             <h6>Anti-Whale Protection</h6>
                            </div>
                        </div>

                        <div className="feature_item">
                            <div className="feature_item_icon">
                              <img src={Dex8} />
                            </div>
                            <div className="desc">
                             <h6>Anti-Bot Protection</h6>
                            </div>
                        </div>

                        <div className="feature_item">
                            <div className="feature_item_icon">
                              <img src={Dex9} />
                            </div>
                            <div className="desc">
                             <h6>Farms at Release</h6>
                            </div>
                        </div>
                    </div>
                   </div>
                </Row>
            </Container>
          </section>
        );
}

export default SectionMission;