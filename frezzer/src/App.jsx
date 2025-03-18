import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Ice Cream",
      type: "frozen",
      image:
        "https://public.readdy.ai/ai/img_res/0ca35a9f7de9c56efeffaff033837431.jpg",
    },
    {
      id: 2,
      name: "Orange Juice",
      type: "drink",
      imageUrl: "https://example.com/images/orange_juice.jpg",
      timestamp: 20,
    },
    {
      id: 3,
      name: "Water",
      type: "drink",
      imageUrl: "https://example.com/images/water.jpg",
      timestamp: 20,
    },
    {
      id: 4,
      name: "Tea",
      type: "drink",
      imageUrl: "https://example.com/images/tea.jpg",
      timestamp: 20,
    },
    {
      id: 5,
      name: "Coffee",
      type: "drink",
      imageUrl: "https://example.com/images/coffee.jpg",
      timestamp: 20,
    },
    {
      id: 6,
      name: "Almond milk",
      type: "drink",
      imageUrl: "https://example.com/images/almond_milk.jpg",
      timestamp: 20,
    },
    {
      id: 7,
      name: "Oat milk",
      type: "drink",
      imageUrl: "https://example.com/images/oat_milk.jpg",
      timestamp: 20,
    },
    {
      id: 8,
      name: "Carrot",
      type: "vegetable",
      imageUrl: "https://example.com/images/carrot.jpg",
      timestamp: 20,
    },
    {
      id: 9,
      name: "Lettuce",
      type: "vegetable",
      imageUrl: "https://example.com/images/lettuce.jpg",
      timestamp: 20,
    },
    {
      id: 10,
      name: "Tomato",
      type: "vegetable",
      imageUrl: "https://example.com/images/tomato.jpg",
      timestamp: 20,
    },
    {
      id: 11,
      name: "Pepper",
      type: "vegetable",
      imageUrl: "https://example.com/images/pepper.jpg",
      timestamp: 20,
    },
    {
      id: 12,
      name: "Cucumber",
      type: "vegetable",
      imageUrl: "https://example.com/images/cucumber.jpg",
      timestamp: 20,
    },
    {
      id: 13,
      name: "Rucola",
      type: "vegetable",
      imageUrl: "https://example.com/images/rucola.jpg",
      timestamp: 20,
    },
    {
      id: 14,
      name: "Apple",
      type: "fruit",
      imageUrl: "https://example.com/images/apple.jpg",
      timestamp: 20,
    },
    {
      id: 15,
      name: "Banana",
      type: "fruit",
      imageUrl: "https://example.com/images/banana.jpg",
      timestamp: 20,
    },
    {
      id: 16,
      name: "Pear",
      type: "fruit",
      imageUrl: "https://example.com/images/pear.jpg",
      timestamp: 20,
    },
    {
      id: 17,
      name: "Kiwi",
      type: "fruit",
      imageUrl: "https://example.com/images/kiwi.jpg",
      timestamp: 20,
    },
    {
      id: 18,
      name: "Watermelon",
      type: "fruit",
      imageUrl: "https://example.com/images/watermelon.jpg",
      timestamp: 20,
    },
    {
      id: 19,
      name: "Durian",
      type: "fruit",
      imageUrl: "https://example.com/images/durian.jpg",
      timestamp: 20,
    },
    {
      id: 20,
      name: "Dragon Fruit",
      type: "fruit",
      imageUrl: "https://example.com/images/dragon_fruit.jpg",
      timestamp: 20,
    },
    {
      id: 26,
      name: "Ketchup",
      type: "sauce",
      imageUrl: "https://example.com/images/ketchup.jpg",
      timestamp: 20,
    },
    {
      id: 27,
      name: "Mayonnaise",
      type: "sauce",
      imageUrl: "https://example.com/images/mayo.jpg",
      timestamp: 20,
    },
    {
      id: 28,
      name: "Mustard",
      type: "sauce",
      imageUrl: "https://example.com/images/mustard.jpg",
      timestamp: 20,
    },
    {
      id: 29,
      name: "Soy Sauce",
      type: "sauce",
      imageUrl: "https://example.com/images/soy_sauce.jpg",
      timestamp: 20,
    },
    {
      id: 30,
      name: "Barbecue Sauce",
      type: "sauce",
      imageUrl: "https://example.com/images/barbecue_sauce.jpg",
      timestamp: 20,
    },
    {
      id: 31,
      name: "Salmon",
      type: "fishAndMeat",
      imageUrl: "https://example.com/images/salmon.jpg",
      timestamp: 15,
    },
    {
      id: 32,
      name: "Sushi",
      type: "fishAndMeat",
      imageUrl: "https://example.com/images/sushi.jpg",
      timestamp: 15,
    },
    {
      id: 33,
      name: "Chicken breast",
      type: "fishAndMeat",
      imageUrl: "https://example.com/images/chicken_breast.jpg",
      timestamp: 30,
    },
    {
      id: 34,
      name: "Bacon",
      type: "fishAndMeat",
      imageUrl: "https://example.com/images/bacon.jpg",
      timestamp: 30,
    },
    {
      id: 35,
      name: "Sausage slices",
      type: "fishAndMeat",
      imageUrl: "https://example.com/images/sausage_slices.jpg",
      timestamp: 30,
    },
    {
      id: 36,
      name: "Sausages",
      type: "fishAndMeat",
      imageUrl: "https://example.com/images/sausages.jpg",
      timestamp: 30,
    },
    {
      id: 37,
      name: "Milk",
      type: "dairy",
      imageUrl: "https://example.com/images/milk.jpg",
      timestamp: 15,
    },
    {
      id: 38,
      name: "Cheese",
      type: "dairy",
      imageUrl: "https://example.com/images/cheese.jpg",
      timestamp: 15,
    },
    {
      id: 39,
      name: "Yogurt",
      type: "dairy",
      imageUrl: "https://example.com/images/yogurt.jpg",
      timestamp: 15,
    },
    {
      id: 40,
      name: "Butter",
      type: "dairy",
      imageUrl: "https://example.com/images/butter.jpg",
      timestamp: 15,
    },
    {
      id: 41,
      name: "Cream",
      type: "dairy",
      imageUrl: "https://example.com/images/cream.jpg",
      timestamp: 15,
    },
    {
      id: 42,
      name: "Carbonara",
      type: "ready",
      imageUrl: "https://example.com/images/carbonara.jpg",
      timestamp: 15,
    },
    {
      id: 43,
      name: "Gratin",
      type: "ready",
      imageUrl: "https://example.com/images/gratin.jpg",
      timestamp: 15,
    },
    {
      id: 44,
      name: "Kebab",
      type: "ready",
      imageUrl: "https://example.com/images/kebab.jpg",
      timestamp: 15,
    },
    {
      id: 45,
      name: "Soup",
      type: "ready",
      imageUrl: "https://example.com/images/soup.jpg",
      timestamp: 15,
    },
    {
      id: 46,
      name: "Sandwich",
      type: "ready",
      imageUrl: "https://example.com/images/sandwich.jpg",
      timestamp: 15,
    },
    {
      id: 47,
      name: "Omelette",
      type: "ready",
      imageUrl: "https://example.com/images/omelette.jpg",
      timestamp: 15,
    },
    {
      id: 48,
      name: "Chicken Eggs",
      type: "egg",
      imageUrl: "https://example.com/images/chicken_eggs.jpg",
      timestamp: 15,
    },
    {
      id: 49,
      name: "Quail Eggs",
      type: "egg",
      imageUrl: "https://example.com/images/quail_eggs.jpg",
      timestamp: 15,
    },
    {
      id: 50,
      name: "Duck Eggs",
      type: "egg",
      imageUrl: "https://example.com/images/duck_eggs.jpg",
      timestamp: 15,
    },
    {
      id: 51,
      name: "Goose Eggs",
      type: "egg",
      imageUrl: "https://example.com/images/goose_eggs.jpg",
      timestamp: 15,
    },
    {
      id: 52,
      name: "Frozen Pizza",
      type: "frozen",
      imageUrl: "https://example.com/images/frozen_pizza.jpg",
      timestamp: 10,
    },
    {
      id: 53,
      name: "Ice_cream",
      type: "frozen",
      imageUrl: "https://example.com/images/ice.jpg",
      timestamp: 10,
    },
    {
      id: 54,
      name: "Frozen Berries",
      type: "frozen",
      imageUrl: "https://example.com/images/frozen_berries.jpg",
      timestamp: 10,
    },
    {
      id: 55,
      name: "Frozen Chicken Wings",
      type: "frozen",
      imageUrl: "https://example.com/images/chicken_wings.jpg",
      timestamp: 10,
    },
    {
      id: 56,
      name: "Frozen Broccoli",
      type: "frozen",
      imageUrl: "https://example.com/images/broccoli.jpg",
      timestamp: 10,
    },
    {
      id: 57,
      name: "Frozen Burger Patties",
      type: "frozen",
      imageUrl: "https://example.com/images/burger_patties.jpg",
      timestamp: 10,
    },
    {
      id: 58,
      name: "Frozen French fries",
      type: "frozen",
      imageUrl: "https://example.com/images/frozen_french_fries.jpg",
      timestamp: 10,
    },
  ]);

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
              <h2 className="text-xl font-semibold mb-2">Meat & Dairy</h2>
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
