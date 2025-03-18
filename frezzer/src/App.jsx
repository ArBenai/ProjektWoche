import React, { useState, useEffect } from "react";
import "./App.css";
import { getRandomItems } from "./items";

const App = () => {
  const [items, setItems] = useState([]);

  const [draggingItem, setDraggingItem] = useState(null);
  const [showMessage, setShowMessage] = useState(null);
  const [compartments, setCompartments] = useState({
    frozen: [],
    ready: [],
    fishAndMeat: [],
    fruit: [],
    vegetable: [],
    egg: [],
    sauce: [],
    drink: [],
  });

  // 10 zufällige Items
  useEffect(() => {
    setItems(getRandomItems());
  }, []); 

  const handleDragStart = (item) => {
    setDraggingItem(item);
  };

  const handleDrop = (compartmentType) => {
    if (!draggingItem) return;

    if (draggingItem.type === compartmentType) {
      setShowMessage({ text: "Correct placement!", isError: false });
      setItems(items.filter((item) => item.id !== draggingItem.id));
      setCompartments({
        ...compartments,
        [compartmentType]: [...compartments[compartmentType], draggingItem],
      });
    } else {
      setShowMessage({ text: "Wrong compartment! Try again.", isError: true });
    }

    setTimeout(() => {
      setShowMessage(null);
    }, 2000);

    setDraggingItem(null);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const renderCompartmentItems = (items) => {
    return (
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <div key={item.id} className="w-12 h-12">
            <img
              src={item.image}
              className="w-full h-full object-cover rounded"
              title={item.name}
            />
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="container">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">
          Kühlschrank einräumen aber Dalli
        </h1>

        {showMessage && (
          <div
            className={`fixed top-4 right-4 p-4 rounded-lg ${
              showMessage.isError ? "bg-red-500" : "bg-green-500"
            } text-white`}
          >
            {showMessage.text}
          </div>
        )}

        <div className="bg-white rounded-xl shadow-2xl p-8 flex gap-8">
          {/* Left Side */}
          <div className="w-2/3 space-y-4">
            <div
              className="h-40 bg-blue-50 rounded-lg p-4 cursor-pointer"
              onDragOver={handleDragOver}
              onDrop={() => handleDrop("frozen")}
            >
              <h2 className="text-xl font-semibold mb-2">Frozen Items</h2>
              {renderCompartmentItems(compartments.frozen)}
            </div>

            <div
              className="h-40 bg-yellow-50 rounded-lg p-4 cursor-pointer"
              onDragOver={handleDragOver}
              onDrop={() => handleDrop("ready")}
            >
              <h2 className="text-xl font-semibold mb-2">Ready Meals</h2>
              {renderCompartmentItems(compartments.ready)}
            </div>

            <div
              className="h-40 bg-red-50 rounded-lg p-4 cursor-pointer"
              onDragOver={handleDragOver}
              onDrop={() => handleDrop("fishAndMeat")}
            >
              <h2 className="text-xl font-semibold mb-2">Meat, Fish & Dairy</h2>
              {renderCompartmentItems(compartments.fishAndMeat)}
            </div>

            <div className="flex gap-4">
              <div
                className="flex-1 h-40 bg-green-50 rounded-lg p-4 cursor-pointer"
                onDragOver={handleDragOver}
                onDrop={() => handleDrop("fruit")}
              >
                <h2 className="text-xl font-semibold mb-2">Fruits</h2>
                {renderCompartmentItems(compartments.fruit)}
              </div>

              <div
                className="flex-1 h-40 bg-green-100 rounded-lg p-4 cursor-pointer"
                onDragOver={handleDragOver}
                onDrop={() => handleDrop("vegetable")}
              >
                <h2 className="text-xl font-semibold mb-2">Vegetables</h2>
                {renderCompartmentItems(compartments.vegetable)}
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="w-1/3 space-y-4">
            <div
              className="h-40 bg-orange-50 rounded-lg p-4 cursor-pointer"
              onDragOver={handleDragOver}
              onDrop={() => handleDrop("egg")}
            >
              <h2 className="text-xl font-semibold mb-2">Eggs</h2>
              {renderCompartmentItems(compartments.egg)}
            </div>

            <div
              className="h-40 bg-purple-50 rounded-lg p-4 cursor-pointer"
              onDragOver={handleDragOver}
              onDrop={() => handleDrop("sauce")}
            >
              <h2 className="text-xl font-semibold mb-2">Sauces</h2>
              {renderCompartmentItems(compartments.sauce)}
            </div>

            <div
              className="h-40 bg-blue-100 rounded-lg p-4 cursor-pointer"
              onDragOver={handleDragOver}
              onDrop={() => handleDrop("drink")}
            >
              <h2 className="text-xl font-semibold mb-2">Drink</h2>
              {renderCompartmentItems(compartments.drink)}
            </div>
          </div>
        </div>

        {/* Draggable Items */}
        <div className="mt-8 grid grid-cols-4 gap-4">
          {items.map((item) => (
            <div
              key={item.id}
              draggable
              onDragStart={() => handleDragStart(item)}
              className="bg-white rounded-lg p-4 shadow-md cursor-pointer transform hover:scale-105 transition-transform"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-32 object-cover rounded-lg mb-2"
              />
              <p className="text-center font-medium">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;