import { ethers } from "ethers";
import { useState } from "react";
import MunicoinExchangeAbi from "../../abis/MunicoinExchange.json";
import { useAsyncEffect } from "./useAsyncEffect";
import { useContract } from "./useContract";

export const useMunicoinExchange = () => {
  const { contract, ...rest } = useContract(
    MunicoinExchangeAbi.abi,
    MunicoinExchangeAbi.networks
  );
  const [price, setPrice] = useState<ethers.BigNumber>();

  useAsyncEffect(async () => {
    if (!contract) {
      return;
    }
    const price = await contract.price();
    setPrice(price);
  }, [contract]);

  return { contract, price, ...rest };
};
