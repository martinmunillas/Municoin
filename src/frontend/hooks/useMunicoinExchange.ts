import { ethers } from "ethers";
import { useState } from "react";
import { MunicoinExchange } from "../../@types/ethers";
import MunicoinExchangeAbi from "../../abis/MunicoinExchange.json";
import { useAsyncEffect } from "./useAsyncEffect";
import { useContract } from "./useContract";

type SellTransaction = Awaited<
  ReturnType<MunicoinExchange["openTransactions"]>
>;

type BuyTransaction = Awaited<ReturnType<MunicoinExchange["buyTransactions"]>>;

type Transaction = (SellTransaction | BuyTransaction) & {
  type: "sell" | "buy";
  isOpen?: boolean;
};

export const useMunicoinExchange = () => {
  const { contract } = useContract<MunicoinExchange>(
    MunicoinExchangeAbi.abi,
    MunicoinExchangeAbi.networks
  );
  const [price, setPrice] = useState<ethers.BigNumber>();
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useAsyncEffect(async () => {
    if (!contract) {
      return;
    }
    const [
      price,
      buyTransactionsLength,
      openTransactionsLength,
      closedTransactionsLength,
    ] = await Promise.all([
      contract.price(),
      contract.buyTransactionsLength(),
      contract.openTransactionsLength(),
      contract.closedTransactionsLength(),
    ]);

    const closedTransactions: Transaction[] = [];
    for (let i = 0; i < closedTransactionsLength.toNumber(); i++) {
      closedTransactions.push({
        ...(await contract.closedTransactions(i)),
        type: "sell",
      });
    }

    const openTransactions: Transaction[] = [];
    for (let i = 0; i < openTransactionsLength.toNumber(); i++) {
      openTransactions.push({
        ...(await contract.openTransactions(i)),
        type: "sell",
        isOpen: true,
      });
    }

    const buyTransactions: Transaction[] = [];
    for (let i = 0; i < buyTransactionsLength.toNumber(); i++) {
      buyTransactions.push({
        ...(await contract.buyTransactions(i)),
        type: "buy",
      });
    }

    setTransactions(
      [...closedTransactions, ...openTransactions, ...buyTransactions].sort(
        (a, b) => b.timestamp.toNumber() - a.timestamp.toNumber()
      )
    );

    setPrice(price);
  }, [contract]);

  return {
    municoinExchange: contract,
    price,
    transactions,
  };
};
