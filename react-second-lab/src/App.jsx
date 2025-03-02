import React from "react";
import Main from "./components/Main/Main";
import { cardsData } from "./data";
import "./App.css";

const App = () => {
  return (
    <div>
      <Main cards={cardsData} />
    </div>
  );
};

export default App;