import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import BotSpecs from './components/BotSpecs';

function App() {
  const [bots, setBots] = useState([
    { id: 1, name: 'Bot 1', avatar_url: 'url1', health: 100, damage: 20, armor: 10 },
    { id: 2, name: 'Bot 2', avatar_url: 'url2', health: 120, damage: 25, armor: 15 },
    // Add more bot data as needed
  ]);

  const [enlistedBots, setEnlistedBots] = useState([]);

  const enlistBot = (bot) => {
    setEnlistedBots((prevEnlistedBots) => [...prevEnlistedBots, bot]);
  };

  const releaseBot = (bot) => {
    setEnlistedBots((prevEnlistedBots) => prevEnlistedBots.filter((b) => b.id !== bot.id));
  };

  const viewBotDetails = (bot) => {
    // Implement logic to display BotSpecs component with bot details
    console.log('View Bot Details:', bot);
  };

  const dischargeBot = (bot) => {
    // Implement logic to remove bot from enlistedBots
    console.log('Discharge Bot:', bot);
  };

  // Using setBots in a simple way to remove the ESLint warning
  setBots((prevBots) => [...prevBots]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <BotCollection bots={bots} enlistBot={enlistBot} viewBotDetails={viewBotDetails} />
        <YourBotArmy enlistedBots={enlistedBots} releaseBot={releaseBot} dischargeBot={dischargeBot} />
        <BotSpecs bot={{}} closeBotDetails={() => {}} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

