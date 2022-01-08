import MunicoinAbi from "../../abis/Municoin.json";
import { useState } from "react";
import { ethers } from "ethers";
import { useAsyncEffect } from "./useAsyncEffect";
import { useContract } from "./useContract";

export const useMunicoin = () => {
  const { contract, loading, error } = useContract(
    MunicoinAbi.abi,
    MunicoinAbi.networks
  );
  const [totalSupply, setTotalSupply] = useState<ethers.BigNumber>();

  useAsyncEffect(async () => {
    if (!contract) {
      return;
    }
    const totalSupply = await contract.totalSupply();

    setTotalSupply(totalSupply);
  }, [contract]);

  return { municoin: contract, loading, error, totalSupply };
};
