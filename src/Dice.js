// src/Dice.js
import React from 'react';
import './Dice.css';

const Dice = ({ value }) => {
  const renderDots = () => {
    const dots = [];
    const dotPositions = [
      [4], // 1
      [0, 8], // 2
      [0, 4, 8], // 3
      [0, 2, 6, 8], // 4
      [0, 2, 4, 6, 8], // 5
      [0, 2, 3, 5, 6, 8] // 6
    ];

    dotPositions[value - 1].forEach((pos) => {
      dots.push(<div key={pos} className={`dot pos-${pos}`} />);
    });

    return dots;
  };

  return (
    <div className="dice">
      {renderDots()}
    </div>
  );
};

export default Dice;
