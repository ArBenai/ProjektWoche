import React from 'react';
import '../styles/GameOver.css';

const GameOver = ({ score, onRestart, message }) => {
  return (
    <div className="game-over">
      <div className='game-over-content'>
      <h1>Game Over</h1>
      <p>{message}</p>
      <p className='score' >Dein Score: {score}</p>
      <button onClick={onRestart}>Neustart</button>
    </div>
    </div>
  );
};

export default GameOver;