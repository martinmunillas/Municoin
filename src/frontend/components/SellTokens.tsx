import { Box, Button, Input, Text } from "@quaantum/components";
import { ethers } from "ethers";
import React, { FormEventHandler, useEffect, useState } from "react";
import { useMunicoin } from "../hooks/useMunicoin";
import { useMunicoinExchange } from "../hooks/useMunicoinExchange";
import { isFloat } from "../utils/isFloat";
import { isInt } from "../utils/isInt";

interface SellTokensProps {}

const SellTokens: React.FC<SellTokensProps> = ({}) => {
  const { price: currPrice } = useMunicoinExchange();
  const [price, setPrice] = useState<string>(
    ethers.utils.parseEther(currPrice?.toString() || "0").toString()
  );
  const [amount, setAmount] = useState<string>("");
  const [error, setError] = useState("");
  const { municoin } = useMunicoin();
  const { municoinExchange } = useMunicoinExchange();

  useEffect(() => {
    const eth = ethers.utils.formatEther(currPrice?.toString() || "0");
    setPrice(eth.slice(0, eth.indexOf(".") + 3));
  }, [currPrice]);

  const handleSave: FormEventHandler = async (e) => {
    e.preventDefault();
    if (!isInt(amount)) {
      return setError("Amount must be a integer");
    }
    if (!isFloat(price)) {
      return setError("Price must be a number");
    }

    const priceInWei = ethers.utils.parseEther(price);
    await municoin?.approve(municoinExchange?.address || "", amount);
    await municoinExchange?.sell(amount, priceInWei);
  };

  return (
    <Box as="form" onSubmit={handleSave}>
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
      <Box>
        <label>Price</label>
        <Input
          value={price}
          onChange={(e) => {
            if (isFloat(e.target.value) || !e.target.value) {
              setPrice(e.target.value);
            }
          }}
        />
      </Box>
      <Button type="submit">Sell</Button>
    </Box>
  );
};

export default SellTokens;
