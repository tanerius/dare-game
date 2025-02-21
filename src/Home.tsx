import React, { useState } from 'react';

interface HomeProps {
  setPlayerNames: (names: string[]) => void;
}

const Home: React.FC<HomeProps> = ({ setPlayerNames }) => {
  const [names, setNames] = useState<string[]>(['', '']);

  const handleNameChange = (index: number, value: string) => {
    const newNames = [...names];
    newNames[index] = value;
    setNames(newNames);
  };

  const handleStart = () => {
    setPlayerNames(names.filter(name => name.trim() !== ''));
  };

  return (
    <div className="home">
      <h1>2hawt4.me</h1>
      <div>
        {names.map((name, index) => (
          <input
            key={index}
            type="text"
            value={name}
            onChange={(e) => handleNameChange(index, e.target.value)}
            placeholder={`Player ${index + 1} Name`}
          />
        ))}
        <button onClick={() => setNames([...names, ''])}>Add Player</button>
      </div>
      <button onClick={handleStart}>Start Game</button>
    </div>
  );
};

export default Home;