import React, { useState } from "react";
import StartScreen from "./components/StartScreen"; // Importiere die StartScreen-Komponente
import InsideFridge from "./components/InsideFridge"; // Importiere die InsideFridge-Komponente
import Countdown from "./components/Countdown"; // Importiere die Countdown-Komponente

const App = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [isGameStarted, setIsGameStarted] = useState(false);

  const handleStart = () => {
    setIsStarted(true); // Zeige das Spiel an
    setIsGameStarted(true); // Starte den Countdown
  };

  const handleCountdownEnd = () => {
    console.log("Countdown beendet");
    setIsGameStarted(false); // Stoppe den Countdown und wechsle zu InsideFridge
  };

  return (
    <div>
      {!isStarted ? (
        <StartScreen onStart={handleStart} />
      ) : isGameStarted ? (
        <Countdown initialCount={3} onCountdownEnd={handleCountdownEnd} /> // Beispiel mit 5 Sekunden Countdown
      ) : (
        <InsideFridge />
      )}
    </div>
  );
};

export default App;
