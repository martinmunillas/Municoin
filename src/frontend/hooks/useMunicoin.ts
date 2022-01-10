import MunicoinAbi from "../../abis/Municoin.json";
import { useState } from "react";
import { useAsyncEffect } from "./useAsyncEffect";
import { useContract } from "./useContract";
import type { ethers } from "ethers";
import { useEthers } from "./useEthers";

export const useMunicoin = () => {
  const { contract, loading, error } = useContract(
    MunicoinAbi.abi,
    MunicoinAbi.networks
  );
  const { account } = useEthers();
  const [totalSupply, setTotalSupply] = useState<ethers.BigNumber>();
  const [balance, setBalance] = useState<ethers.BigNumber>();

  useAsyncEffect(async () => {
    if (!contract) {
      return;
    }
    const totalSupply = await contract.totalSupply();
    if (account) {
      const balance = await contract.balanceOf(account);
      setBalance(balance);
    }

    setTotalSupply(totalSupply);
  }, [contract]);

  return {
    municoin: contract,
    totalSupply,
    account,
    balance,
    error,
    loading,
  };
};
