import { useCallback } from 'react'
import { useDispatch } from 'react-redux';
import { UnsupportedChainIdError, useWeb3React } from '@web3-react/core'
import { NoBscProviderError } from '@binance-chain/bsc-connector'
import {
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected,
} from '@web3-react/injected-connector'
import {
  UserRejectedRequestError as UserRejectedRequestErrorWalletConnect,
  WalletConnectConnector,
} from '@web3-react/walletconnect-connector'
import { connectorLocalStorageKey } from '@pancakeswap/uikit'
import { toast } from 'react-toastify';

import WalletConnect from "@walletconnect/client";
import QRCodeModal from "@walletconnect/qrcode-modal";

import { connectorsByName } from '../utils/web3React'
import { setupNetwork } from '../utils/wallet'
import { setAddress, setNetworkId } from '../redux/actions';

const useAuth = () => {
  const dispatch = useDispatch()
  const { chainId, activate, deactivate } = useWeb3React()

  const login = useCallback(
    (connectorID) => {
      const connector = connectorsByName[connectorID]
      alert(connectorID)
      if (connectorID === "WalletConnect") {
        // Create a connector
        alert('create server')
        const connectorInfo = new WalletConnect({
          bridge: "https://bridge.walletconnect.org", // Required
          qrcodeModal: QRCodeModal,
        });
        // Check if connection is already established
        if (!connectorInfo.connected) {
          // create new session
          alert('create session')
          connectorInfo.createSession();
        }
        // Subscribe to connection events
        connectorInfo.on("connect", (error, payload) => {
          if (error) {
            throw error;
          }
          // Get provided accounts and chainId
          const { accounts, chainId } = payload.params[0];
          alert(accounts[0]);
          dispatch(setAddress(accounts[0]))
          dispatch(setNetworkId(chainId))
        });
        connectorInfo.on("session_update", (error, payload) => {
          if (error) {
            throw error;
          }
          // Get updated accounts and chainId
          const { accounts, chainId } = payload.params[0];
          alert(accounts[0]);
          dispatch(setAddress(accounts[0]))
          dispatch(setNetworkId(chainId))
        });
        connectorInfo.on("disconnect", (error, payload) => {
          if (error) {
            throw error;
          }
          alert('Disconnect');
          // Delete connector
          dispatch(setAddress(null))
          dispatch(setNetworkId(null))
          deactivate()
          window.localStorage.removeItem(connectorLocalStorageKey)
        });
      } else {
        if (connector) {
          activate(connector, async (error) => {
            if (error instanceof UnsupportedChainIdError) {
              const hasSetup = await setupNetwork()
              if (hasSetup) {
                activate(connector)
              }
            } else {
              window.localStorage.removeItem(connectorLocalStorageKey)
              if (error instanceof NoEthereumProviderError || error instanceof NoBscProviderError) {
                toast.error('No provider was foundg');
              } else if (
                error instanceof UserRejectedRequestErrorInjected ||
                error instanceof UserRejectedRequestErrorWalletConnect
              ) {
                if (connector instanceof WalletConnectConnector) {
                  const walletConnector = connector
                  walletConnector.walletConnectProvider = null
                }
                toast.error('Please authorize to access your account');
              } else {
                toast.error(error.message);
              }
            }
          })
        } else {
          toast.error('The connector config is wrong');
        }
      }
    },
    [activate, toast],
  )

  const logout = useCallback(() => {
    dispatch(setAddress(null))
    deactivate()
    // This localStorage key is set by @web3-react/walletconnect-connector
    if (window.localStorage.getItem('walletconnect')) {
      connectorsByName.walletconnect.close()
      connectorsByName.walletconnect.walletConnectProvider = null
    }
    window.localStorage.removeItem(connectorLocalStorageKey)
    if (chainId) {
      dispatch(setNetworkId(null))
    }
  }, [deactivate, dispatch, chainId])

  return { login, logout }
}

export default useAuth
