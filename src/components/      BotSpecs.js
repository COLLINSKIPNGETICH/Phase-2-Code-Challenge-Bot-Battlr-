// src/components/BotSpecs.js
import React from 'react';

const BotSpecs = ({ bot, closeBotDetails }) => {
  return (
    <div>
      <h2>Bot Details</h2>
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <button onClick={closeBotDetails}>Close</button>
    </div>
  );
};

export default BotSpecs;
