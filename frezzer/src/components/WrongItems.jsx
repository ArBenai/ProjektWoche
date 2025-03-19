import '../styles/WrongItems.css';
import React from 'react';

const WrongItems = ({ wrongAttempts }) => {
  return (
    <div className="wrong-items">
      {Array.from({ length: wrongAttempts }).map((_, index) => (
        <div key={index} className="wrong-item">
          ❌
        </div>
      ))}
    </div>
  );
};

export default WrongItems;