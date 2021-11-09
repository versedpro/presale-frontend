import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useWeb3React } from '@web3-react/core';
import Web3 from 'web3';
import { toast } from 'react-toastify';

import { connectorsByName } from '../utils/web3React';
import { setAddress, setNetworkId } from '../redux/actions';

const useAuth = () => {

  const [activatingConnector, setActivatingConnector] = useState()
  const { connector, activate, deactivate, networkActive, networkError, activateNetwork } = useWeb3React()

  const dispatch = useDispatch();

  useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined)
    }
  }, [activatingConnector, connector])

  useEffect(async () => {
    var connectorName = localStorage.getItem('connectorName');
    if (connectorName) {
      let web3 = new Web3(window.ethereum)
      const accounts = await web3.eth.getAccounts()
      if (accounts.length > 0) {
        dispatch(setAddress(accounts[0]))
      } else {
        localStorage.removeItem('connectorName');
      }
    }
  }, [])

  const login = useCallback(
    (connectorName) => {
      if (activate) {
        const connector = connectorsByName[connectorName];
        if (connector) {
          dispatch(setNetworkId(connectorName));
          localStorage.setItem('connectorName', connectorName);
          activate(connector, async (err, result) => {
            console.log("error", err);
            console.log("result", result);
            let web3 = new Web3(window.ethereum)
            const accounts = await web3.eth.getAccounts()
            if (accounts.length > 0) {
              dispatch(setAddress(accounts[0]))
            } else {
              localStorage.removeItem('connectorName');
            }
          })
        } else {
          toast.error('The connector config is wrong');
        }
      }
    },
    [activate, dispatch]
  );

  const logout = useCallback(() => {
    if (deactivate) {
      dispatch(setAddress(null))
      localStorage.removeItem('connectorName');
      deactivate();
    }
  }, [deactivate, dispatch]);

  return { login, logout };
};

export default useAuth;
