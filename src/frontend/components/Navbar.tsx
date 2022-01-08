import { Box, Flex, Heading, Text } from "@quaantum/components";
import React from "react";
import { useMunicoin } from "../hooks/useMunicoin";
import { formatNumber } from "../utils/formatNumber";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({ children }) => {
  const { loading, totalSupply } = useMunicoin();

  if (loading) return <div>Loading...</div>;

  return (
    <Box>
      <Flex
        justify="space-between"
        align="center"
        p="20px 40px"
        bgColor="lightblue"
      >
        <Heading>Municoin</Heading>

        <Flex gap="20px">
          <Text>
            Total supply: {formatNumber(totalSupply?.toString() || "")}
          </Text>
          <Text>Current price: {}</Text>
        </Flex>
      </Flex>
      {children}
    </Box>
  );
};

export default Navbar;
