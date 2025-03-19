import React, { useState } from 'react';
import StartScreen from './components/StartScreen';
import InsideFridge from './components/InsideFridge';
import "./App.css";


const App = () => {
  // Zustand für die Anzeige der Komponenten
  const [isStarted, setIsStarted] = useState(false);

  // Funktion, um die Anzeige zu wechseln
  const handleStart = () => {
    setIsStarted(true);
  };

  return (
    <>
      {!isStarted ? (
        <StartScreen onStart={handleStart} />
      ) : (
        <InsideFridge />
      )}
    </>
  );
};

export default App;