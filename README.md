# 🎂 BirthdayReminder

Leveraging React's component-based architecture and CSS3 animations, this app delivers a premium user experience. It solves the problem of scattered birthday dates by providing a localized, secure, and visually engaging dashboard for all your social milestones.

## Why did I choose React.js?

I chose to use **React** for this project because it offers major advantages in managing dynamic interfaces:
* **State Management**: React allowed me to manage the list of people in an efficient way using the `useState` hook. The interface updates instantly when a person is added or deleted, without reloading the page.
* **Componentization**: I divided the app into reusable components (like `List.js`), which makes the code easier to read and maintain.
* **Side-by-Side Effects**: With the `useEffect` hook, I was able to synchronize the app's data with `localStorage`, ensuring the persistence of information between sessions.
* **Speed ​​and Performance**: The Virtual DOM in React ensures a smooth user experience, even when working with animations and frequent data manipulation.
  
## Tech Stack
* **Frontend**: React.js
* **Styling**: CSS3 (Custom animations, Flexbox, Grid, 3D effects)
* **Storage**: Browser LocalStorage API
* **Icons/Logo**: SVG & Emoji

## Project Structure
```text
setup/
├── public/
│ └── index.html # HTML entry point and logo/title setup
├── src/
│ ├── App.js # Main logic, State Management and Form
│ ├── List.js # Component for rendering the list and calculating alerts
│ ├── indx.css # Professional styles, 3D effects and animations
│ └── index.js # React application initialization
├── package.json # Project dependencies and scripts
└── README.md # Project documentation

Currently, the project can be viewed locally by running the npm start command after installing the dependencies.

## What is BirthdayReminder?
A modern application built in **React.js** for managing birthdays, with an intuitive design and interactive functionalities.

## Features
* **Full customization**: Add name, date, image and custom messages.
* **Smart Alerts**: Visual notifications for today and warnings for days coming tomorrow.
* **Interactive Effects**: Confetti-like animations for the celebrants.
* **Data Persistence**: Integration with `localStorage` to preserve data after refresh.
* **3D Interface**: Modern design with touch buttons and responsive layout.
## Technologies used
* React.js (Hooks: useState, useEffect)
* CSS3 (Flexbox, Grid, Custom Animations)
* LocalStorage API

## Installation
1. Clone the repository.
2. Run `npm install` to install the dependencies.
3. Start the application with `npm start`.

MIT License - made with dedication.
