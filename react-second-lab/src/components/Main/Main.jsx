import React from "react";
import Card from "../Card/Card";
import "./Main.css";

const Main = ({ cards }) => {
  return (
    <main className="main-container">
      <h1>Галерея карток</h1>
      <div className="cards-wrapper">
        {cards.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    </main>
  );
};

export default Main;