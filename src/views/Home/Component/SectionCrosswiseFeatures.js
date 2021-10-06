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

import FeatImg1 from '../../../assets/images/crosswise/feature/img_crosswise_f_1.png';
import FeatImg2 from '../../../assets/images/crosswise/feature/img_crosswise_f_2.png';
import FeatImg3 from '../../../assets/images/crosswise/feature/img_crosswise_f_3.png';

const SectionCrosswiseFeatures = (props) => {

    const { isDark, toggleTheme } = useContext(ThemeContext)
    
    return (
          <section className="crosswise_feature_section">
            <Container>
                <Row>
                    <div className="title">
                        <h1>Crosswise Features</h1>
                    </div>
                </Row>
               
              <div className="features_group">
                  <div className="features_item">
                    <div className="features_item_icon">
                        <img src={FeatImg1} />
                    </div>
                    <div className="features_title">
                        <h6>Launchpad</h6>
                    </div>
                    <div className="features_desc">
                    Crosswise features an Incubation & launchpad program to help budding entrepreneurs launch their projects on Crosswise dex. This will help the teams with funding, marketing, and reaching a new user-base for their Apps & dApps on our multi-chain ecosystem.
                    </div>
                  </div>

                  <div className="features_item">
                    <div className="features_item_icon">
                        <img src={FeatImg2} />
                    </div>
                    <div className="features_title">
                        <h6>Technology</h6>
                    </div>
                    <div className="features_desc">
                    Crosswise platform is capable of handling peak user loads during both trading hours & IDO hours. Our state-of-the-art IT infrastructure provides users with the best security, compatibility, uptime, premium tools & bridges for the future of multi-chain capabilities, with a premium customer support & ticketing system to solve user grievances asap. 
                    </div>
                  </div>

                  <div className="features_item">
                    <div className="features_item_icon">
                        <img src={FeatImg3} />
                    </div>
                    <div className="features_title">
                        <h6>User Experience & Tools</h6>
                    </div>
                    <div className="features_desc">
                    Crosswise is tightly integrated with useful tools such as Order Book, Analytics, Explore, Price Charts, Account stats, Affiliate Areas with a neat UI for seamless trading experience. Users can also track their earnings from various incentive programs the project may add as seen fit along the entire product life cycle.
                    </div>
                  </div>

              </div>
            </Container>
          </section>
        );
}

export default SectionCrosswiseFeatures;