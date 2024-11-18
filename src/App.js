
import './App.css';
import React from 'react';
import players from './player'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import PlayersList from './PlayersList';



function App() {
  return (
    <div className="App player-container">
      <PlayersList players={players} />
    </div>
  );
}

export default App;
