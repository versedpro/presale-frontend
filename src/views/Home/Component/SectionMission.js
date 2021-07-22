import React, { Component, Fragment, useState, useContext } from "react";
import { Container , Input} from 'reactstrap';

import 'react-accessible-accordion/dist/fancy-example.css';
import { Row, Col } from 'reactstrap';
import classnames from 'classnames';
import '../css/style.css'
import { ThemeContext } from "../../../contexts/ThemeContext";

import Img1 from '../../../assets/images/crosswise/image-1.png';
import Img2 from '../../../assets/images/crosswise/image-2.png';
import Img3 from '../../../assets/images/crosswise/image-3.png';

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
                            <p>Being daily users of DEFI products we have discovered a severe lack of Usability. Many platforms don’t offer any overview about your portfolio, are lacking the needed stability of their own coin or have extremely limited functionality.  Therefore many of those projects fail as they are not offering the level of overall level needed.</p>
                        </div>
                    </div>

                    <div className="mission_item reverse">
                    <div className="item_content">
                            <h1>Our Mission</h1>
                            <p>We wanted to offer a platform, that combines all needed aspectsand features to create a stable and thriving platform. Something that will appeal to retail investors, but also professional traders.</p>
                        </div>
                        <div className="item_img">
                            <img src={Img2} />
                        </div>
                    </div>
                    <div className="mission_item">
                        <div className="item_img">
                            <img src={Img3} />
                        </div>
                        <div className="item_content">
                            <h1>Work Company</h1>
                            <p>Following a long period of research and analyzation we starteddeveloping Crosswise. Combining developers with the needed amount of experience and entrepreneurs with the right long-term vision we have developed a next level DEX.</p>
                        </div>
                    </div>
                </Row>
            </Container>
          </section>
        );
}

export default SectionMission;