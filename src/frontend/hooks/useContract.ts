import { useEthers } from "./useEthers";
import { useState } from "react";
import { ethers } from "ethers";
import { useAsyncEffect } from "./useAsyncEffect";

export const useContract = <T extends ethers.Contract>(
  abi: ethers.ContractInterface,
  networks: Record<string, { address: string }>
) => {
  const { provider, signer } = useEthers();
  const [contract, setContract] = useState<T>();
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useAsyncEffect(async () => {
    if (!provider) {
      setError("No provider");
      setLoading(false);
      return;
    }
    const { chainId } = await provider.getNetwork();
    const network = networks[chainId.toString()];
    if (!network) {
      setError("No network");
      setLoading(false);
      return;
    }

    const contract = new ethers.Contract(
      network.address,
      abi,
      signer ? signer : provider
    );

    setContract(contract as T);
    setLoading(false);
  }, [provider, signer]);

  return { contract, error, loading };
};
