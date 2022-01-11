import { Box, Button, Input, Text } from "@quaantum/components";
import React, { FormEventHandler, useState } from "react";
import { useMunicoinExchange } from "../hooks/useMunicoinExchange";
import { isInt } from "../utils/isInt";

interface BuyTokensProps {}

const BuyTokens: React.FC<BuyTokensProps> = ({}) => {
  const [amount, setAmount] = useState<string>("");
  const [error, setError] = useState("");
  const { municoinExchange } = useMunicoinExchange();

  const handleBuy: FormEventHandler = async (e) => {
    e.preventDefault();
    if (!isInt(amount)) {
      return setError("Amount must be a integer");
    }
    await municoinExchange?.buy(amount);
  };

  return (
    <Box as="form" onSubmit={handleBuy}>
      {error && (
        <Text bgColor="red" color="white" p="10px" r="10px">
          {error}
        </Text>
      )}
      <Box>
        <label>Amount</label>
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
