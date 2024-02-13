// src/components/BotCollection.js
import React from 'react';

const BotCollection = ({ bots, enlistBot, viewBotDetails }) => {
  return (
    <div>
      <h2>Bot Collection</h2>
      {bots.map((bot) => (
        <div key={bot.id}>
          <img src={bot.avatar_url} alt={bot.name} />
          <h3>{bot.name}</h3>
          <button onClick={() => enlistBot(bot)}>Enlist</button>
          <button onClick={() => viewBotDetails(bot)}>Details</button>
        </div>
      ))}
    </div>
  );
};

export default BotCollection;
