import React, { useEffect, useState } from 'react';
import { getRandomItems } from './items'; // Importiere die Funktion aus items.jsx
import ProgressBar from './ProgressBar'; // Wenn du auch die ProgressBar verwendest

const TimerItem = () => {
  const [items, setItems] = useState([]);  // Alle Items
  const [correctDrops, setCorrectDrops] = useState(0); // Zählung der richtigen Drops

  useEffect(() => {
    // Hole die zufälligen Items beim Start
    const randomItems = getRandomItems();
    // Für jedes Item setze die verbleibende Zeit und den Timer
    const itemsWithTimer = randomItems.map(item => ({
      ...item,
      timeLeft: item.timestamp,  // Setze für jedes Item die Startzeit
    }));
    setItems(itemsWithTimer);
  }, []);

  useEffect(() => {
    // Timer für jedes Item
    const timers = items.map((item, index) => {
      if (item.timeLeft <= 0) return null;

      const timer = setInterval(() => {
        setItems(prevItems => {
          const newItems = [...prevItems];
          if (newItems[index].timeLeft > 0) {
            newItems[index].timeLeft -= 1; // Zähle den Timer für dieses Item herunter
          }
          return newItems;
        });
      }, 1000);

      return timer;
    });

    // Bereinige alle Timer, wenn die Komponente unmontiert wird
    return () => timers.forEach(timer => clearInterval(timer));
  }, [items]);

  const handleDropItem = (itemId) => {
    // Wenn ein Item korrekt abgelegt wird, entferne es aus der Liste
    const newItems = items.filter(item => item.id !== itemId);
    setItems(newItems);
    setCorrectDrops(correctDrops + 1);
  };

  return (
    <div>
      <h1>Timer-Item Spiel</h1>
      <div>
        <h2>Verbleibende Gesamtzeit: {items.reduce((total, item) => total + item.timeLeft, 0)} Sekunden</h2>
        <ProgressBar progress={((correctDrops / 10) * 100)} /> {/* Fortschritt des Spiels */}
      </div>

      <div className="items-list">
        {items.map((item) => (
          <div key={item.id} className="item-card">
            <img src={item.imageUrl} alt={item.name} />
            <h3>{item.name}</h3>
            <p>Verbleibende Zeit für dieses Item: {item.timeLeft} Sekunden</p>
            <button onClick={() => handleDropItem(item.id)}>Drop</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimerItem;
