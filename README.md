# Phase-2-Code-Challenge-Bot-Battlr-

## Bot Battlr React App
  
Welcome to Bot Battlr, the ultimate destination in the known universe for building your own Bot Army! This React application allows you to browse a list of robots, view their details, and enlist them into your army.

## Project Setup

Create a new project folder.
Create a new private GitHub repository.
Add your TM as a contributor to the project (for grading purposes only).
Regularly commit your code to the repository.
Running the Backend
In your project directory, create a db.json file.

Populate the db.json file with data from this link.

Run the following command to start the JSON DB server:
json-server --watch db.json
Test your server by visiting the following route in the browser:

## Project Guidelines

## Core Deliverables

As a user, you should be able to:

See profiles of all bots rendered in BotCollection.
Add an individual bot to your army by clicking on it. The selected bot should render in the YourBotArmy component. The bot can be enlisted only once. The bot does not disappear from the BotCollection.
Release a bot from your army by clicking on it. The bot disappears from the YourBotArmy component.
Discharge a bot from their service forever by clicking the red button marked "x," which would delete the bot both from the backend and from the YourBotArmy on the frontend.
Endpoints for Core Deliverables

## Advanced Deliverables

As a user, you can:

Choose if you want to enlist a bot into your army or just see their data. Clicking on the card should display a show view (BotSpecs) for that bot, which should replace BotsCollection. BotSpecs should have two buttons: one to go back to the list view and another to enlist that bot.
Sort bots by their health, damage, or armor. For this, create a new component, SortBar.
When you enlist a bot, it will be removed from the BotCollection and added to YourBotArmy.
Filter bots by their class. Multiple filters can be selected at the same time.
Sort bots by their health, damage, or armor. For this, create a new component, SortBar.
Only enlist one bot from each bot_class.
Rubric

## Props & State

Advanced deliverables are met.
State works and is held by the lowest common component.
No unnecessary state is created.
Only necessary props are being passed down.
Functions used to edit state are passed down appropriately.

## Code Structure/Efficiency

Advanced deliverables met.
Uses destructuring, functional components, spreading, hooks, pure functions.
Components are structured logically.
Code is abstracted into clear methods.

## Rendering

Everything from the deliverables is rendered.
Components are abstract/reusable.
No unnecessary components were created.
