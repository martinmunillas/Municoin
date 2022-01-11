import { Box, Button, Heading, Input, Text } from "@quaantum/components";
import React, { FormEventHandler, useState } from "react";
import { useMunicoinExchange } from "../hooks/useMunicoinExchange";
import { isInt } from "../utils/isInt";

interface BuyTokensProps {}

const BuyTokens: React.FC<BuyTokensProps> = ({}) => {
  const [amount, setAmount] = useState<string>("");
  const [error, setError] = useState("");
  const { municoinExchange, price } = useMunicoinExchange();

  const handleBuy: FormEventHandler = async (e) => {
    e.preventDefault();
    if (!isInt(amount)) {
      return setError("Amount must be a integer");
    }
    await municoinExchange?.buy(Number(amount), {
      value: price?.mul(Number(amount)),
    });
  };

  return (
    <Box as="form" onSubmit={handleBuy} w="50%">
      <Heading>Buy</Heading>
      {error && (
        <Text bgColor="red" color="white" p="10px" r="10px">
          {error}
        </Text>
      )}
      <Box>
        <Box>Amount</Box>
        <Input
          value={amount}
          onChange={(e) => {
            if (isInt(e.target.value) || !e.target.value) {
              setAmount(e.target.value);
            }
          }}
        />
      </Box>
      <Button type="submit">Buy</Button>
    </Box>
  );
};

export default BuyTokens;
