import React, { useState } from 'react';
import Questions from './Questions';

interface GameProps {
  playerNames: string[];
}

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
    const randomDare = Questions[Math.floor(Math.random() * Questions.length)];
    setDare(randomDare.question);
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
