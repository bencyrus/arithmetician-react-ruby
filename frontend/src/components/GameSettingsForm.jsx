import React, { useState } from 'react';

function GameSettingsForm() {
  const [additionRange, setAdditionRange] = useState({ min: 2, max: 100 });
  const [multiplicationRange, setMultiplicationRange] = useState({ min: 2, max: 12 });
  const [duration, setDuration] = useState(120);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Addition Range:
        <input type="number" value={additionRange.min} onChange={(e) => setAdditionRange({ ...additionRange, min: e.target.value })} />
        to
        <input type="number" value={additionRange.max} onChange={(e) => setAdditionRange({ ...additionRange, max: e.target.value })} />
      </label>

      <label>
        Multiplication Range:
        <input type="number" value={multiplicationRange.min} onChange={(e) => setMultiplicationRange({ ...multiplicationRange, min: e.target.value })} />
        to
        <input type="number" value={multiplicationRange.max} onChange={(e) => setMultiplicationRange({ ...multiplicationRange, max: e.target.value })} />
      </label>

      <label>
        Duration:
        <select value={duration} onChange={(e) => setDuration(e.target.value)}>
          <option value="30">30 seconds</option>
          <option value="60">60 seconds</option>
          <option value="120">120 seconds</option>
          <option value="300">300 seconds</option>
          <option value="600">600 seconds</option>
        </select>
      </label>

      <button type="submit">Start Game</button>
    </form>
  );
}

export default GameSettingsForm;
