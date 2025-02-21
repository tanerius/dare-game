import React, { useState } from 'react';
import Home from './Home';
import Game from './Game';

const App: React.FC = () => {
  const [playerNames, setPlayerNames] = useState<string[]>([]);

  return (
    <div className="App">
      {playerNames.length === 0 ? (
        <Home setPlayerNames={setPlayerNames} />
      ) : (
        <Game playerNames={playerNames} />
      )}
    </div>
  );
};

export default App;