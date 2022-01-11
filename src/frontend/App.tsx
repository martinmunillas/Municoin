import {
  extendTheme,
  Flex,
  QuaantumProvider,
  theme,
} from "@quaantum/components";
import React from "react";
import AllTransactions from "./components/AllTransactions";
import BuyTokens from "./components/BuyTokens";
import Navbar from "./components/Navbar";
import SellTokens from "./components/SellTokens";

interface AppProps {}

const App: React.FC<AppProps> = ({}) => {
  return (
    <QuaantumProvider theme={extendTheme(theme, {})}>
      <Navbar>
        <Flex gap="20px" my="30px">
          <SellTokens />
          <BuyTokens />
        </Flex>
        <AllTransactions />
      </Navbar>
    </QuaantumProvider>
  );
};

export default App;
