import { useEthers } from "./useEthers";
import { useState } from "react";
import { ethers } from "ethers";
import { useAsyncEffect } from "./useAsyncEffect";

export const useContract = (
  abi: ethers.ContractInterface,
  networks: Record<string, { address: string }>
) => {
  const { provider, ...otherEthers } = useEthers();
  const [contract, setContract] = useState<ethers.Contract>();
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

    const contract = new ethers.Contract(network.address, abi, provider);

    setContract(contract);
    setLoading(false);
  }, [provider]);

  return { contract, error, loading, ...otherEthers };
};
