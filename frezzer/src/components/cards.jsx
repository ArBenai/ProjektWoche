import React from "react";
import '../styles/ItemCards.css'

const Cards = ({ items, handleDragStart }) => {
  return (
    <div className="cardContainer">
      {items.map((item) => (
        <div
          key={item.id}
          className={`singleCard ${item.type}`} // Dynamische Zuweisung der Kategorie-Klasse
          draggable
          onDragStart={() => handleDragStart(item)}
        >
          <img src={item.image} alt={item.name} />
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Cards;
