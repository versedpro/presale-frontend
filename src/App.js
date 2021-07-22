import React, { Component, Suspense } from 'react';
import { connect } from "react-redux";
import { NotificationContainer } from 'react-notifications';
import { isMobile } from 'react-device-detect';
import { setAddress, setNetworkId, setError } from "./redux/actions";

import './App.css';
import './style.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Layout from '../src/views/Layout/Layout';
// import MyAccount from '../src/views/MyAccount/MyAccount';
// import PricePools from '../src/views/PricePools';
// import AMCPools from '../src/views/AMCPools';
// import LastWinnings from '../src/views/LastWinnings/LastWinnings';
// import Rewards from '../src/views/Rewards/Rewards';
// import Deposit from '../src/views/Deposit/Deposit';
// import LifeTimeTickets from '../src/views/LifeTimeTickets';
// import LifeTimeTicketsLogin from '../src/views/LifeTimeTicketsLogin';
// import Referralpartners from '../src/views/Referralpartners';
// import Statistics from '../src/views/Statistics';
// import Dashboard from '../src/views/Dashboard';
// import VipStatictics from '../src/views/VIPstatistics';
// import Withdraw from '../src/views/Withdraw/Withdraw';
// import sixMatrics from '../src/views/SixMatrics';

import Home from '../src/views/Home';

import { providerUrl, Web3, connector } from './crosswise/web3'


class App extends Component {
  constructor(props) {
    super(props);    

    if(isMobile){
      if(connector.connected) {
        this.props.setAddressRequest(connector._accounts[0]);
        this.props.setNetworkIdRequest(connector._chainId.toString(10));
      }
    } else {
      window.web3 = null;
      // modern broswers
      if(typeof window.ethereum !== "undefined") {
        window.web3 = new Web3(window.ethereum);
        window.web3.eth.net.getId((err, netId) => {

          this.handleNetworkChanged(`${netId}`);
          window.ethereum.on("accountsChanged", (accounts) =>
              this.handleAddressChanged(accounts)
          );
          window.ethereum.on("chainChanged", (netId) =>
              this.handleNetworkChanged(netId)
          );
           this.props.setAddressRequest(window.ethereum.selectedAddress);
        });
      }

      // Legacy dapp browsers...
      else if (window.web3) {
        window.web3 = new Web3(window.web3.currentProvider);
      } else {
        window.web3 = null;
      }
    }
  }


  handleAddressChanged = (accounts) => {
    if (typeof window.ethereum !== "undefined") {
      this.props.setAddressRequest(window.ethereum.selectedAddress);
      console.log("selected address", window.ethereum.selectedAddress)
    }
  };

  handleNetworkChanged = (networkId) => {
    this.props.setNetworkIdRequest(networkId);
      // switch (networkId) {
      //   case "56":
      //     if (providerUrl.includes("dataseed")) {
      //       this.props.setErrorRequest(false);
      //     } else {
      //       this.props.setErrorRequest(true);
      //     }
      //     break;
      //   case "97":
      //     if (providerUrl.includes("prebsc")) {
      //       this.props.setErrorRequest(false);
      //     } else {
      //       this.props.setErrorRequest(true);
      //     }
      //     break;
      //   default:
      //     this.props.setErrorRequest(true);
      // }
    // console.log(providerUrl)
  };

  //useFetchPublicData();
  
  render() {
  return (
    <div className="h-100">
       <React.Fragment>
           <Router  history={this.props.history}>
              <Switch>
              {/* <Route exact path="/" component={LifeTimeTickets} /> */}
              <Route exact path="/" component={Home} />
               {/* <Route  path="/myaccount" component={Layout} /> 
              <Route path="/price" component={PricePools} />
              <Route path="/prizepool/:id" component={AMCPools} />
              <Route path="/lastWinnings" component={LastWinnings} />
              <Route path="/rewards" component={Rewards} />
              <Route path="/deposit" component={Deposit} />
              <Route path="/staking" component={Staking} />
               <Route path="/lifeTime" component={LifeTimeTickets} />  */}
              {/* <Route path="/lifetimeLogin" component={LifeTimeTicketsLogin} /> */}
              {/* <Route path="/referalpartners" component={Referralpartners} />
              <Route path="/Statistics" component={Statistics} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/vipStatictics" component={VipStatictics} />
              <Route path="/withdraw" component={Withdraw} />
              <Route path="/sixMatrics" component={sixMatrics} /> */}
              </Switch>
            </Router>
        </React.Fragment>
    </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setAddressRequest: (address) => dispatch(setAddress(address)),
    setNetworkIdRequest: (networkId) => dispatch(setNetworkId(networkId)),
    setErrorRequest: (error) => dispatch(setError(error)),
  };
};

export default connect(null, mapDispatchToProps)(App);

//export default App;
