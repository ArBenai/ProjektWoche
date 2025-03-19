import React, { useState, useEffect } from "react";
import "../styles/fridgeStyle.css";
import { getRandomItems } from "./items";
import Cards from "./cards";
import ProgressBar from "./ProgressBar";
import WrongItems from "./WrongItems"; // Importiere die WrongItems-Komponente
import GameOver from "./GameOver"; // Importiere die GameOver-Komponente

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

  const [incorrectAttempts, setIncorrectAttempts] = useState(0); // Zähler für falsche Versuche
  const [correctDrops, setCorrectDrops] = useState(0); // Zähler für richtige Drops
  const [gameOver, setGameOver] = useState(false); // Zustand, um das Spiel zu beenden
  const [gameWon, setGameWon] = useState(false); // Zustand, um das Spiel zu gewinnen
  const [score, setScore] = useState(0); // Punktestand

  // Neustart des Spiels
  const restartGame = () => {
    setIncorrectAttempts(0);
    setCorrectDrops(0);
    setItems(getRandomItems()); // Erstelle neue Items
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
    setGameWon(false); // Spiel nicht gewonnen nach dem Neustart
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
    if (gameOver || gameWon || !draggingItem) return; // Verhindere Drop, wenn das Spiel vorbei ist oder gewonnen wurde

    if (draggingItem.type === compartmentType) {
      setShowMessage({ text: "Correct placement!", isError: false });
      setItems(items.filter((item) => item.id !== draggingItem.id));
      setCompartments({
        ...compartments,
        [compartmentType]: [...compartments[compartmentType], draggingItem],
      });

      // Zähler für richtige Drops erhöhen
      setCorrectDrops((prev) => prev + 1);
      setScore((prev) => prev + 10); // Erhöhe den Score bei einem richtigen Drop
    } else {
      setIncorrectAttempts((prev) => {
        const newAttempts = prev + 1;
        if (newAttempts >= 3) {
          setGameOver(true); // Beende das Spiel, wenn mehr als 3 falsche Versuche
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

  // Berechne den Fortschritt basierend auf den richtigen Drops
  const progress = Math.min((correctDrops / items.length) * 100, 100); // Fortschritt basierend auf den korrekten Drops

  // Wenn der Fortschritt 100% erreicht, beende das Spiel und zeige "You Win"
  useEffect(() => {
    if (progress === 100) {
      setGameWon(true); // Spiel gewonnen
      setShowMessage({ text: "Congratulations! You've won!", isError: false });
    }
  }, [progress]);

  // Wenn das Spiel vorbei ist oder gewonnen wurde, zeige die GameOver- oder Win-Nachricht
  if (gameOver) {
    return <GameOver score={score} onRestart={restartGame} message="Zu viele falsche Versuche!" />;
  }

  if (gameWon) {
    return <GameOver score={score} onRestart={restartGame} message="Herzlichen Glückwunsch! Du hast gewonnen!" />;
  }

  return (
    <div className="container">
      <ProgressBar progress={progress} />
      {/* Anzeige der Fehlversuche */}
      <WrongItems wrongAttempts={incorrectAttempts} />
      <div className="max-w-7xl mx-auto">
        <div className="fridge">
          {/* Left Side */}
          <div className="leftSide">
            <div
              className="frozenMeal dropbox "
              onDragOver={handleDragOver}
              onDrop={() => handleDrop("frozen")}
            >
              <h2 className="textFridge">Frozen Items</h2>
              {renderCompartmentItems(compartments.frozen)}
            </div>

            <div
              className="readyMeal dropbox"
              onDragOver={handleDragOver}
              onDrop={() => handleDrop("ready")}
            >
              <h2 className="textFridge">Ready Meals</h2>
              {renderCompartmentItems(compartments.ready)}
            </div>

            <div
              className="meatFishDairy dropbox "
              onDragOver={handleDragOver}
              onDrop={() => handleDrop("fishMeatDairy")}
            >
              <h2 className="textFridge">Meat, Fish & Dairy</h2>
              {renderCompartmentItems(compartments.fishMeatDairy)}
            </div>

            <div className="fruitAndVeggie">
              <div
                className="fruits dropbox  "
                onDragOver={handleDragOver}
                onDrop={() => handleDrop("fruit")}
              >
                <h2 className="textFridge">Fruits</h2>
                {renderCompartmentItems(compartments.fruit)}
              </div>

              <div
                className="veggie dropbox "
                onDragOver={handleDragOver}
                onDrop={() => handleDrop("vegetable")}
              >
                <h2 className="textFridge">Vegetables</h2>
                {renderCompartmentItems(compartments.vegetable)}
              </div>
            </div>
          </div>
          {/* Right Side */}
          <div className="rightSide">
            <div
              className="eggs "
              onDragOver={handleDragOver}
              onDrop={() => handleDrop("egg")}
            >
              <h2 className="textFridge">Eggs</h2>
              {renderCompartmentItems(compartments.egg)}
            </div>

            <div
              className="sauces"
              onDragOver={handleDragOver}
              onDrop={() => handleDrop("sauceAndCanned")}
            >
              <h2 className="textFridge">Sauces & Canned Food</h2>
              {renderCompartmentItems(compartments.sauce)}
            </div>

            <div
              className="drinks"
              onDragOver={handleDragOver}
              onDrop={() => handleDrop("drink")}
            >
              <h2 className="textFridge">Drink</h2>
              {renderCompartmentItems(compartments.drink)}
            </div>
          </div>
        </div>

        {/* Message */}
        {showMessage && (
          <div className={`fixed ${showMessage.isError ? "error" : "check"}`}>
            {showMessage.text}
          </div>
        )}

        {/* Draggable Items */}
        <Cards items={items} handleDragStart={handleDragStart} />
      </div>
    </div>
  );
};

export default InsideFridge;
