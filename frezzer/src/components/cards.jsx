import React from "react";
import '../styles/Cards.css'

const Cards = ({ items, handleDragStart }) => {
  return (
    <div className="itemCards grid grid-cols-10 gap-3">
      {items.map((item) => (
        <div
          key={item.id}
          draggable
          onDragStart={() => handleDragStart(item)}
          className="singleCard ${item.type} bg-white p-4 shadow-md cursor-pointer transform hover:scale-105 transition-transform"

        >
          <img src={item.image} alt={item.name} className="w-full h-32 object-cover mb-2" />
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Cards;
