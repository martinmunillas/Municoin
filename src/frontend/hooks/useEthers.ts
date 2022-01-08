import { ethers } from "ethers";
import { useState } from "react";
import { useAsyncEffect } from "./useAsyncEffect";

declare global {
  interface Window {
    ethereum?: any;
  }
}

export const useEthers = () => {
  const [provider, setProvider] = useState<ethers.providers.Web3Provider>();
  const [signer, setSigner] = useState<ethers.Signer>();
  const [account, setAccount] = useState<string>();

  useAsyncEffect(async () => {
    const _provider = new ethers.providers.Web3Provider(window.ethereum);
    const [_account] = await _provider.send("eth_requestAccounts", []);
    const _signer = _provider.getSigner();

    setProvider(_provider);
    setAccount(_account);
    setSigner(_signer);
  }, []);

  return { provider, signer, account };
};
