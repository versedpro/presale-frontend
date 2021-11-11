import React, { Component, Fragment, useState, useContext, useCallback, useEffect } from "react";
import { Row } from 'reactstrap';
import 'react-accessible-accordion/dist/fancy-example.css';
import "./css/style.css";
import "../../assets/scss/index.scss";
import { ThemeContext } from "../../contexts/ThemeContext";
import { isMobile } from 'react-device-detect';

import useActiveWeb3React from '../../widgets/useActiveWeb3React'

import useAuth from "../../widgets/useAuth";

import { useDispatch, useSelector } from 'react-redux';

// Components
import SectionHeader from "./Component/SectionHeader";
import SectionAbout from "./Component/SectionAbout";
import SectionMission from "./Component/SectionMission";
import SectionExchange from "./Component/SectionExchange";
import SectionTeamwork from "./Component/SectionTeamwork";
import SectionNews from "./Component/SectionNews";
import SectionHelp from "./Component/SectionHelp";
import SectionFooter from "./Component/SectionFooter";
// import SectionRoadmap from "./Component/SectionRoadmap/index";
import SectionRoadmapV2 from "./Component/SectionRoadmapV2";
import SectionTokenomic from "./Component/SectionTokenomic";
import SectionTokenomicV2 from "./Component/SectionTokenomicV2";
import SectionPresale from "./Component/SectionPresale";
import SectionCrosswiseFeature from "./Component/SectionCrosswiseFeatures";
import SectionPresaleBottom from "./Component/SectionPresaleBottom";
import SectionFees from "./Component/SectionFees";
import SectionPartner from "./Component/SectionPartner";

import ConnectModal from "../../widgets/WalletModal/ConnectModal";
import { setAddress, setNetworkId } from '../../redux/actions';
import useEagerConnect from "../../widgets/useEagerConnect";

const Home = () => {
  useEagerConnect();

  const address = useSelector(state => state.authUser.address)

  const dispatch = useDispatch();
  const [showPresaleInfo, setShowPresaleInfo] = useState(false)
  const [wallletOpen, setWallletOpen] = useState(false)

  const { account, chainId } = useActiveWeb3React()

  const { login, logout } = useAuth()

  const minimum = (address) => {
    const temp = String(address);
    return temp.slice(0, 4) + '...' + temp.slice(39, 42);
  }

  const { isDark, toggleTheme } = useContext(ThemeContext)

  const handleLogout = () => {
    logout();
    setShowPresaleInfo(false);
  }
  const showPresale = () => setShowPresaleInfo(true)
  const showHome = () => setShowPresaleInfo(false)

  const onConnectHandle = () => {
    setWallletOpen(true);
  }

  useEffect(() => {
    if (account) {
      dispatch(setAddress(account))
    }
  }, [account])

  useEffect(() => {
    if (chainId) {
      dispatch(setNetworkId(chainId))
    }
  }, [chainId])

  return (
    <Fragment>
      <ConnectModal login={login} wallletOpen={wallletOpen} setWallletOpen={setWallletOpen} />
      <div className={isDark ? 'main_body' : 'main_body light-theme'}>
        <header className="nav_wrapper">
          {/** nav header starts */}
          <nav className="navbar navbar-expand-lg navbar-default navbar-fixed-top shadow-sm">
            {/* <!-- Brand --> */}
            <div className="container">
              <a className="navbar-brand" href="/">
                {

                  isDark ? (<img src="assets/images/logo@3x.png" className="nav_logo" id="crosswise_logo" />) :
                    <img src="assets/images/logo-light-theme-2.png" className="nav_logo" id="crosswise_logo" />
                }

              </a>
              {/* <!-- Toggler/collapsibe Button --> */}
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"><i className="fas fa-bars"></i></span>
              </button>

              {/* <!-- Navbar links --> */}
              <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" href="#about"><span>About crosswise</span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#tokenomic"><span>Tokenomics </span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#roadmap"><span>Roadmap </span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#team"><span>Team</span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#help"><span>Socials</span></a>
                  </li>
                  {/* <li className="nav-item ml-md-4">
                      <a className="nav-link">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text"><i className="fas fa-search"></i></span>
                          </div>
                          <input type="text" className="form-control" placeholder="search" />
                        </div>
                      </a>
                    </li> */}
                  {/* <li className="nav-item dropdown" id="profile_dropdown">
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
                    </li> */}

                  <li className="nav-item">
                    <a className="navbar-brand theme-toggle" id="changeTheme" onClick={toggleTheme}>
                      {
                        isDark ? (<img src="assets/images/moon-color.png" id="themeLogo" />) :
                          (<img src="assets/images/light-theme-icon.png" id="themeLogo" />)
                      }
                    </a>
                  </li>

                  {
                    address === null ?
                      (<li className="nav-item">
                        <a className="nav-link btn btn_signIN btn_primary" onClick={onConnectHandle}>Connect</a>
                      </li>
                      ) : (
                        <>
                          <li className="nav-item">
                            <div className="nav-link connected-wallet m-auto">
                              <span>{minimum(address)}</span>
                            </div>
                          </li>
                          {
                            <li className="nav-item">
                              <a className="nav-link btn btn_signIN btn_primary" onClick={handleLogout}>
                                Logout
                              </a>
                            </li>
                          }

                          <li className="nav-item">
                            {/* <ModalBuyTokens buttonLabel="Buy Tokens" className={isDark ? "dark-theme" : "light-theme"}></ModalBuyTokens> */}
                            {showPresaleInfo ? (
                              <button onClick={showHome} className="btn btn_primary buy-token-button btn_signIN">Go Back</button>
                            ) : (
                              <button onClick={showPresale} className="btn btn_primary buy-token-button btn_signIN">Buy Tokens</button>
                            )}
                          </li>
                        </>
                      )
                  }
                  <li className="nav-item">
                    <a className="nav-link btn btn_signIN btn_primary" target="_blank" href="https://crosswise.notion.site/MetaMask-Needed-How-to-Buy-More-Details-about-the-Presale-f68a173c9b024949b6844519a537196c" rel="noreferrer">How To Buy</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link btn btn_signIN btn_primary" href="https://x9epe3je3fk.typeform.com/crosswise">Get Whitelisted</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
        {showPresaleInfo ? (
          <SectionPresale></SectionPresale>
        ) : (
          <>
            <SectionHeader />
            <SectionPartner />
            <SectionAbout />
            <SectionMission />
            {/* <SectionExchange></SectionExchange> */}
            <SectionCrosswiseFeature />
            {/* <SectionRoadmap></SectionRoadmap> */}
            <SectionRoadmapV2 />
            <SectionTeamwork />
            {/* <SectionTokenomic /> */}
            <SectionTokenomicV2 />
            <SectionPresaleBottom />
            <SectionFees />
            {/* <SectionNews/> */}
            <SectionHelp />
            <SectionFooter />
          </>
        )}
      </div>
    </Fragment>
  );
}

export default Home;