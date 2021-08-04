import React, { Component, Fragment, useState, useContext, useCallback } from "react";
import { Row } from 'reactstrap';
import 'react-accessible-accordion/dist/fancy-example.css';
import "./css/style.css";
import { ThemeContext } from "../../contexts/ThemeContext";
import { isMobile } from 'react-device-detect';
import { NotificationManager } from 'react-notifications'

import { useDispatch, useSelector } from 'react-redux';
import { connector } from '../../crosswise/web3';
import { setAddress, setNetworkId } from '../../redux/actions';

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
import ModalBuyTokens from "./Component/ModalBuyTokens";

const Home = (props) => {
   
  const [sideMenu, setsideMenu] = useState(false);
  const [sideMenuIndex, setsideMenuIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false)
  const dispatch = useDispatch();
  const address = useSelector(state => state.authUser.address);

  const onConnectClick = async () => {
    if (isMobile) {
      // Check if connection is already established
      if (!connector.connected) {
        // create new session
        connector.createSession();
      } else {
        console.log(connector._accounts[0]);
        console.log(connector._chainId.toString(10));
      }

      // Subscribe to connection events
      connector.on("connect", (error, payload) => {
        if (error) {
          throw error;
        }

        // Get provided accounts and chainId
        const {accounts, chainId} = payload.params[0];
        dispatch(setAddress(accounts[0]));
        dispatch(setNetworkId(chainId.toString(10)));
      });

      connector.on("session_update", (error, payload) => {
        if (error) {
          throw error;
        }

        // Get updated accounts and chainId
        // const { accounts, chainId } = payload.params[0];
      });

      connector.on("disconnect", (error, payload) => {
        if (error) {
          throw error;
        }

        // Delete connector
      });

      return;
    }
    if (typeof window.ethereum === 'undefined') {
      NotificationManager.warning('Please install MetaMask!');
      return;
    }
    // if (window.ethereum.networkVersion !== config.networkId) {
    //     if (config.networkId === '56')
    //         NotificationManager.warning('Please select bse main net to proceed!');
    //     else if (config.networkId === '97')
    //         NotificationManager.warning('Please select bsetest to proceed!');
    //     return;
    // }
    if (window.ethereum.selectedAddress !== null) {
      dispatch(setAddress(window.ethereum.selectedAddress));
      NotificationManager.warning('MetaMask was already connected.');
      return;
    }
    if (window.ethereum.selectedAddress === null) {
      try {
        console.log('try?')
        await window.ethereum.request({method: 'eth_requestAccounts'});
      } catch (err) {
        console.log('err :>> ', err);
      }
    }
  };

  const minimum = (address) => {
    const temp = String(address);
    return temp.slice(0, 4) + '...' + temp.slice(39, 42);
  }
  
  const expandCollapseMenu = () => {
    setsideMenu(!sideMenu)
  }
  const { isDark, toggleTheme } = useContext(ThemeContext)
  
  return (
    <Fragment>
      <div className={isDark? 'main_body': 'main_body light-theme'}>
    
        <header className="nav_wrapper">

          {/** nav header starts */}
          <nav className="navbar navbar-expand-lg navbar-default shadow-sm">
            {/* <!-- Brand --> */}
            <div className="container">
              <a className="navbar-brand">
                {
                  isDark? (<img src="assets/images/logo@3x.png" className="nav_logo" id="crosswise_logo"/>):
                  <img src="assets/images/logo-light-theme-2.png" className="nav_logo" id="crosswise_logo"/>
                }
                
                </a>
                {/* <!-- Toggler/collapsibe Button --> */}
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                  data-target="#collapsibleNavbar">
                  <span className="navbar-toggler-icon"><i className="fas fa-bars"></i></span>
                </button>

                {/* <!-- Navbar links --> */}
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a className="nav-link" href=""><span>Crossdocs</span></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="blog.html"><span>Blog</span></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href=""><span>GitHub</span></a>
                    </li>
                    <li className="nav-item ml-md-4">
                      <a className="nav-link">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text"><i className="fas fa-search"></i></span>
                          </div>
                          <input type="text" className="form-control" placeholder="search" />
                        </div>
                      </a>
                    </li>
                    <li className="nav-item dropdown" id="profile_dropdown">
                      <a className="nav-link dropdown-toggle py-0" href="#" id="navbar_Dropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <img src="assets/images/us-dollar@2x.png" className="rounded-circle" />
                      </a>
                      <div className="dropdown-menu shadow-sm border-0" aria-labelledby="navbar_Dropdown">
                        <a className="dropdown-item" href="#">
                          <img src="assets/images/us-dollar@2x.png" className="rounded-circle" />
                        </a>
                        <a className="dropdown-item" href="#">
                          <img src="assets/images/us-dollar@2x.png" className="rounded-circle" />
                        </a>
                      </div>
                    </li>

                    <li className="nav-item">
                      <a className="navbar-brand theme-toggle" id="changeTheme" onClick={toggleTheme}>  
                        {
                        isDark? (<img src="assets/images/moon-color.png" id="themeLogo" />):
                        (<img src="assets/images/light-theme-icon.png" id="themeLogo" />)
                        }
                        </a>
                    </li>
                    
                    {address === null ? (
                      <li className="nav-item">
                        <a className="nav-link btn btn_signIN btn_primary" onClick={onConnectClick}> Sign in</a>
                      </li>
                    ) : (
                      <>
                        <li className="nav-item">
                          <div className="nav-link connected-wallet">
                            <span>{minimum(address)}</span>
                          </div>
                        </li>
                        <li className="nav-item">
                          <ModalBuyTokens buttonLabel="Buy Tokens" className={isDark ? "dark-theme" : "light-theme"}></ModalBuyTokens>
                        </li>
                      </>
                    )}
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