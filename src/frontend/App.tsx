import { extendTheme, QuaantumProvider, theme } from "@quaantum/components";
import React from "react";
import Navbar from "./components/Navbar";
import SellTokens from "./components/SellTokens";

interface AppProps {}

const App: React.FC<AppProps> = ({}) => {
  return (
    <QuaantumProvider theme={extendTheme(theme, {})}>
      <Navbar>
        <SellTokens />
      </Navbar>
    </QuaantumProvider>
  );
};

export default App;
