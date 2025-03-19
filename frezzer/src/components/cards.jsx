import React from "react";
{/* Draggable Items */}

const Cards = ({ items, handleDragStart }) => {
    return (
        <div className="itemCards grid grid-cols-10 gap-3">
        {items.map((item) => (
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
            </div>
        ))}
        </div>
    );
    }

export default Cards;