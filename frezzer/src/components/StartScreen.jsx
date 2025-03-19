import '../styles/StartScreen.css';
import React from 'react';

const StartScreen = ({ onStart }) => {
  return (
    <div className="start-screen">
      <div className="start-screen-card">
        <h1>Du hast eingekauft!</h1>
        <p>
          Räume deinen Einkauf in den Kühlschrank. Aber beachte,
          dass du deine Sachen richtig einsortierst und dafür nicht all zu viel Zeit
          hast.
        </p>
        <button onClick={onStart}>Start Game</button>
      </div>
    </div>
  );
};

export default StartScreen;