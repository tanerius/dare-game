import React, { useState } from 'react';

interface GameProps {
  playerNames: string[];
}

const dares = [
  'Do 10 pushups',
  'Sing a song',
  'Dance for 1 minute',
  'Tell a joke',
  'Do a silly walk',
  // Add more dares as needed
];

const Game: React.FC<GameProps> = ({ playerNames }) => {
  const [currentPlayer, setCurrentPlayer] = useState<string | null>(null);
  const [dare, setDare] = useState<string | null>(null);
  const [previousPlayer, setPreviousPlayer] = useState<string | null>(null);

  const getRandomPlayer = () => {
    let randomPlayer;
    do {
      randomPlayer = playerNames[Math.floor(Math.random() * playerNames.length)];
    } while (randomPlayer === previousPlayer);
    setPreviousPlayer(randomPlayer);
    setCurrentPlayer(randomPlayer);
  };

  const getRandomDare = () => {
    const randomDare = dares[Math.floor(Math.random() * dares.length)];
    setDare(randomDare);
  };

  const handleDareButton = () => {
    setDare(null);
    getRandomDare();
  };

  const handleNextPlayerButton = () => {
    setDare(null);
    getRandomPlayer();
  };

  return (
    <div className="game">
      {currentPlayer === null ? (
        <button onClick={getRandomPlayer}>Start Game</button>
      ) : (
        <div>
          <h2>{currentPlayer}'s turn!</h2>
          {dare === null ? (
            <button onClick={handleDareButton}>Dare!</button>
          ) : (
            <div>
              <p>{dare}</p>
              <button onClick={handleNextPlayerButton}>Next Player</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Game;
