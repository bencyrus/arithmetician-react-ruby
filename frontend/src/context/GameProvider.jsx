import { useState } from 'react';
import GameContext from './GameContext';

const GameProvider = ({ children }) => {
  const [additionRange, setAdditionRange] = useState({ min: 2, max: 100 });
  const [multiplicationRange, setMultiplicationRange] = useState({ min: 2, max: 12 });
  const [duration, setDuration] = useState(120);

  return (
    <GameContext.Provider
      value={{
        additionRange,
        multiplicationRange,
        duration,
        setAdditionRange,
        setMultiplicationRange,
        setDuration,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameProvider;