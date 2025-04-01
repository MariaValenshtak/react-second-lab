import React from "react";
import Main from "./components/Main/Main";
import { CssBaseline } from "@mui/material";
import { cardsData } from "./data";

const App = () => {
  return (
    <>
      <CssBaseline />
      <Main cards={cardsData} />
    </>
  );
};

export default App;
