import { extendTheme, QuaantumProvider, theme } from "@quaantum/components";
import React from "react";
import AllTransactions from "./components/AllTransactions";
import Navbar from "./components/Navbar";
import SellTokens from "./components/SellTokens";

interface AppProps {}

const App: React.FC<AppProps> = ({}) => {
  return (
    <QuaantumProvider theme={extendTheme(theme, {})}>
      <Navbar>
        <SellTokens />
        <AllTransactions />
      </Navbar>
    </QuaantumProvider>
  );
};

export default App;
