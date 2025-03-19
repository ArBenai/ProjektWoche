import React from 'react';
import '../styles/GameOver.css';

const GameOver = ({ score, onRestart, message }) => {
  return (
    <div className="game-over">
      <h1>Game Over</h1>
      <p>{message}</p>
      <p>Dein Score: {score}</p>
      <button onClick={onRestart}>Neustart</button>
    </div>
  );
};

export default GameOver;