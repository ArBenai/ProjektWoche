import React, { useState, useEffect } from "react";

const Cards = ({ items, handleDragStart }) => {
    return (
      <div className="itemCards grid grid-cols-10 gap-3">
        {items.length > 0 ? (
          items.map((item) => (
            <div
              key={item.id}
              draggable
              onDragStart={() => handleDragStart(item)}
              className="bg-white p-4 shadow-md cursor-pointer transform hover:scale-105 transition-transform"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-32 object-cover mb-2"
              />
              <p className="cardText">{item.name}</p>
              <p>Verbleibende Zeit für dieses Item: {item.timestamp} Sekunden</p>
            </div>
          ))
        ) : (
          <p>Keine Items verfügbar</p> // Zeigt eine Nachricht an, falls keine Items vorhanden sind
        )}
      </div>
    );
  };
  
  export default Cards;
  