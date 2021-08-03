import React, { Component, Fragment, useState, useContext, useCallback } from "react";
import 'react-accessible-accordion/dist/fancy-example.css';
import "./css/style.css";
import { ThemeContext } from "../../contexts/ThemeContext";

// Components
import SectionHeader from "./Component/SectionHeader";
import SectionAbout from "./Component/SectionAbout";
import SectionMission from "./Component/SectionMission";
import SectionExchange from "./Component/SectionExchange";
import SectionTeamwork from "./Component/SectionTeamwork";
import SectionNews from "./Component/SectionNews";
import SectionHelp from "./Component/SectionHelp";
import SectionFooter from "./Component/SectionFooter";
import SectionRoadmap from "./Component/SectionRoadmap/index";
import SectionTokenomic from "./Component/SectionTokenomic";

const Home = (props) => {
   
  const [sideMenu, setsideMenu] = useState(false);
  const [sideMenuIndex, setsideMenuIndex] = useState(0);
  
  const expandCollapseMenu = () => {
    setsideMenu(!sideMenu)
 }
 const { isDark, toggleTheme } = useContext(ThemeContext)
  
  return (
    <Fragment>
      <div className={isDark? 'main_body': 'main_body light-theme'}>
    
        <header class="nav_wrapper">

          {/** nav header starts */}
          <nav class="navbar navbar-expand-lg navbar-default shadow-sm">
            {/* <!-- Brand --> */}
            <div class="container">
              <a class="navbar-brand">
                {
                  isDark? (<img src="assets/images/logo@3x.png" class="nav_logo" id="crosswise_logo"/>):
                  <img src="assets/images/logo-light-theme-2.png" class="nav_logo" id="crosswise_logo"/>
                }
                
                </a>


                {/* <!-- Toggler/collapsibe Button --> */}
                <button class="navbar-toggler" type="button" data-toggle="collapse"
                  data-target="#collapsibleNavbar">
                  <span class="navbar-toggler-icon"><i class="fas fa-bars"></i></span>
                </button>

                {/* <!-- Navbar links --> */}
                <div class="collapse navbar-collapse" id="collapsibleNavbar">
                  <ul class="navbar-nav">
                    <li class="nav-item">
                      <a class="nav-link" href=""><span>Crossdocs</span></a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="blog.html"><span>Blog</span></a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href=""><span>GitHub</span></a>
                    </li>
                    <li class="nav-item ml-md-4">
                      <a class="nav-link">
                        <div class="input-group">
                          <div class="input-group-prepend">
                            <span class="input-group-text"><i class="fas fa-search"></i></span>
                          </div>
                          <input type="text" class="form-control" placeholder="search" />
                        </div>
                      </a>
                    </li>
                    <li class="nav-item dropdown" id="profile_dropdown">
                      <a class="nav-link dropdown-toggle py-0" href="#" id="navbar_Dropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <img src="assets/images/us-dollar@2x.png" class="rounded-circle" />
                      </a>
                      <div class="dropdown-menu shadow-sm border-0" aria-labelledby="navbar_Dropdown">
                        <a class="dropdown-item" href="#"><img src="assets/images/us-dollar@2x.png"
                            class="rounded-circle" /></a>
                        <a class="dropdown-item" href="#"><img src="assets/images/us-dollar@2x.png"
                            class="rounded-circle" /></a>
                      </div>
                    </li>

                    <li class="nav-item">
                      <a class="navbar-brand theme-toggle" id="changeTheme" onClick={toggleTheme}>  
                        {
                        isDark? (<img src="assets/images/moon-color.png" id="themeLogo" />):
                        (<img src="assets/images/light-theme-icon.png" id="themeLogo" />)
                        }
                        </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link btn btn_signIN btn_primary" href=""> Sign in</a>
                    </li>

                  </ul>
                </div>
            </div>
          </nav>
          {/* <!-- nav header ends --> */}

        </header>
        <SectionHeader></SectionHeader>
        <SectionAbout></SectionAbout>
        <SectionMission></SectionMission>                 
        <SectionExchange></SectionExchange>
        <SectionRoadmap></SectionRoadmap>
        <SectionTeamwork></SectionTeamwork>
        <SectionTokenomic />
        <SectionNews></SectionNews>
        <SectionHelp></SectionHelp>
        <SectionFooter></SectionFooter>
      </div>
    </Fragment>
  );
}

export default Home;