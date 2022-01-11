import { Box, Grid, Heading, Text } from "@quaantum/components";
import { ethers } from "ethers";
import React from "react";
import { useMunicoinExchange } from "../hooks/useMunicoinExchange";

interface AllTransactionsProps {}

const AllTransactions: React.FC<AllTransactionsProps> = ({}) => {
  const { transactions } = useMunicoinExchange();
  return (
    <Box>
      <Heading>All Transactions</Heading>
      <Grid gridTemplateColumns="1fr 1fr" gap="20px">
        {transactions.map((tx) => (
          <Box
            key={tx.id.toString()}
            p="10px"
            r="10px"
            border="1px solid #333333"
          >
            <Text
              p="10px"
              r="10px"
              bgColor={
                tx.type === "sell" ? (tx.isOpen ? "green" : "red") : "gray"
              }
              color="white"
            >
              {tx.type === "sell"
                ? `Sell - ${tx.isOpen ? "Open" : "Close"}`
                : "Buy"}
            </Text>
            <Text>ID: {tx.id.toString()}</Text>
            <Text>Owner: {tx.owner}</Text>

            <Text>Amount {tx.amount.toString()}</Text>

            <Text>
              Price: {ethers.utils.formatEther(tx.price).toString()} ETH
            </Text>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default AllTransactions;
