import { extendTheme, QuaantumProvider, theme } from "@quaantum/components";
import React from "react";
import Navbar from "./components/Navbar";

interface AppProps {}

const App: React.FC<AppProps> = ({}) => {
  return (
    <QuaantumProvider theme={extendTheme(theme, {})}>
      <Navbar>Hello world</Navbar>
    </QuaantumProvider>
  );
};

export default App;
