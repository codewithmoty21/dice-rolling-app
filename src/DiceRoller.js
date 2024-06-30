// src/DiceRoller.js
import React, { useState } from 'react';
import Dice from './Dice';

const DiceRoller = () => {
  const [dice1, setDice1] = useState(1);
  const [dice2, setDice2] = useState(1);

  const rollDice = () => {
    setDice1(Math.floor(Math.random() * 6) + 1);
    setDice2(Math.floor(Math.random() * 6) + 1);
  };

  return (
    <div className="dice-roller">
      <Dice value={dice1} />
      <Dice value={dice2} />
      <button onClick={rollDice}>Roll Dice</button>
    </div>
  );
};

export default DiceRoller;
