// src/App.js
import React, { useState, useEffect } from 'react';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import BotSpecs from './components/BotSpecs';

const App = () => {
  const [bots, setBots] = useState([]);
  const [enlistedBots, setEnlistedBots] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);

  useEffect(() => {
    // Fetch bots data from the server
    fetch('http://localhost:8001/bots')
      .then((response) => response.json())
      .then((data) => setBots(data));
  }, []);

  const enlistBot = (bot) => {
    if (!enlistedBots.includes(bot)) {
      setEnlistedBots([...enlistedBots, bot]);
    }
  };

  const releaseBot = (bot) => {
    setEnlistedBots(enlistedBots.filter((enlistedBot) => enlistedBot !== bot));
  };

  const dischargeBot = (bot) => {
    // Remove bot from the backend
    fetch(`http://localhost:8001/bots/${bot.id}`, {
      method: 'DELETE',
    });

    // Release bot from the army
    releaseBot(bot);
  };

  const viewBotDetails = (bot) => {
    setSelectedBot(bot);
  };

  const closeBotDetails = () => {
    setSelectedBot(null);
  };

  return (
    <div>
      <h1>Welcome to Bot Battlr</h1>
      <BotCollection bots={bots} enlistBot={enlistBot} viewBotDetails={viewBotDetails} />
      <YourBotArmy enlistedBots={enlistedBots} releaseBot={releaseBot} dischargeBot={dischargeBot} />
      {selectedBot && <BotSpecs bot={selectedBot} closeBotDetails={closeBotDetails} />}
    </div>
  );
};

export default App;
