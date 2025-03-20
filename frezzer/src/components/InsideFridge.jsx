import React, { useState, useEffect } from "react";
import "../styles/fridgeStyle.css";
import { getRandomItems } from "./items";
import Cards from "./cards";
import ProgressBar from "./ProgressBar";
import WrongItems from "./WrongItems"; 
import GameOver from "./GameOver"; 

const InsideFridge = () => {
  const [items, setItems] = useState([]);
  const [draggingItem, setDraggingItem] = useState(null);
  const [showMessage, setShowMessage] = useState(null);
  const [compartments, setCompartments] = useState({
    frozen: [],
    ready: [],
    fishMeatDairy: [],
    fruit: [],
    vegetable: [],
    egg: [],
    sauce: [],
    drink: [],
  });

  const [incorrectAttempts, setIncorrectAttempts] = useState(0); 
  const [correctDrops, setCorrectDrops] = useState(0); 
  const [gameOver, setGameOver] = useState(false); 
  const [gameWon, setGameWon] = useState(false); 
  const [score, setScore] = useState(0); 

  const restartGame = () => {
    setIncorrectAttempts(0);
    setCorrectDrops(0);
    setItems(getRandomItems()); 
    setCompartments({
      frozen: [],
      ready: [],
      fishMeatDairy: [],
      fruit: [],
      vegetable: [],
      egg: [],
      sauce: [],
      drink: [],
    });
    setGameOver(false);
    setGameWon(false); 
    setScore(0);
  };

  // 10 zufällige Items laden
  useEffect(() => {
    setItems(getRandomItems());
  }, []);

  const handleDragStart = (item) => {
    setDraggingItem(item);
  };

  const handleDrop = (compartmentType) => {
    if (gameOver || gameWon || !draggingItem) return; 

    if (draggingItem.type === compartmentType) {
      setShowMessage({ text: "Correct placement!", isError: false });
      setItems(items.filter((item) => item.id !== draggingItem.id));
      setCompartments({
        ...compartments,
        [compartmentType]: [...compartments[compartmentType], draggingItem],
      });

      setCorrectDrops((prev) => prev + 1);
      setScore((prev) => prev + 10); 
    } else {
      setIncorrectAttempts((prev) => {
        const newAttempts = prev + 1;
        if (newAttempts >= 3) {
          setGameOver(true); 
          setShowMessage({
            text: "Game Over! Too many wrong attempts.",
            isError: true,
          });
        } else {
          setShowMessage({
            text: "Wrong compartment! Try again.",
            isError: true,
          });
        }
        return newAttempts;
      });
    }

    setTimeout(() => {
      setShowMessage(null);
    }, 1000);

    setDraggingItem(null);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const renderCompartmentItems = (items) => {
    return (
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <div key={item.id}>
            <img src={item.image} title={item.name} />
          </div>
        ))}
      </div>
    );
  };

  const progress = Math.min((correctDrops / items.length) * 100, 100);

  useEffect(() => {
    if (progress === 100) {
      setGameWon(true); 
      setShowMessage({ text: "Congratulations! You've won!", isError: false });
    }
  }, [progress]);

  if (gameOver) {
    return <GameOver score={score} onRestart={restartGame} message="Too many wrong attempts!" />;
  }

  if (gameWon) {
    return <GameOver score={score} onRestart={restartGame} message="Congratulations! You've won!" />;
  }

  return (
    <div className="container">
      <ProgressBar progress={progress} />
      <WrongItems wrongAttempts={incorrectAttempts} />
      <div className="max-w-7xl mx-auto">
        <div className="fridge">
          <div className="leftSide">
            <div
              className="frozenMeal dropbox"
              onDragOver={handleDragOver}
              onDrop={() => handleDrop("frozen")}
            >
              <h2>Frozen Items</h2>
              {renderCompartmentItems(compartments.frozen)}
            </div>

            <div
              className="readyMeal dropbox"
              onDragOver={handleDragOver}
              onDrop={() => handleDrop("ready")}
            >
              <h2>Ready Meals</h2>
              {renderCompartmentItems(compartments.ready)}
            </div>

            <div
              className="meatFishDairy dropbox"
              onDragOver={handleDragOver}
              onDrop={() => handleDrop("fishMeatDairy")}
            >
              <h2>Meat, Fish & Dairy</h2>
              {renderCompartmentItems(compartments.fishMeatDairy)}
            </div>

            <div className="fruitAndVeggie">
              <div
                className="fruits dropbox"
                onDragOver={handleDragOver}
                onDrop={() => handleDrop("fruit")}
              >
                <h2>Fruits</h2>
                {renderCompartmentItems(compartments.fruit)}
              </div>

              <div
                className="veggie dropbox"
                onDragOver={handleDragOver}
                onDrop={() => handleDrop("vegetable")}
              >
                <h2>Vegetables</h2>
                {renderCompartmentItems(compartments.vegetable)}
              </div>
            </div>
          </div>
          <div className="rightSide">
            <div
              className="eggs"
              onDragOver={handleDragOver}
              onDrop={() => handleDrop("egg")}
            >
              <h2>Eggs</h2>
              {renderCompartmentItems(compartments.egg)}
            </div>

            <div
              className="sauces"
              onDragOver={handleDragOver}
              onDrop={() => handleDrop("sauce")}
            >
              <h2>Sauces & Canned Food</h2>
              {renderCompartmentItems(compartments.sauce)}
            </div>

            <div
              className="drinks"
              onDragOver={handleDragOver}
              onDrop={() => handleDrop("drink")}
            >
              <h2>Drink</h2>
              {renderCompartmentItems(compartments.drink)}
            </div>
          </div>
        </div>

        {showMessage && (
          <div className={`fixed ${showMessage.isError ? "error" : "check"}`}>
            {showMessage.text}
          </div>
        )}

        <Cards items={items} handleDragStart={handleDragStart} />
      </div>
    </div>
  );
};

export default InsideFridge;

