# 🎂 BirthdayReminder

---

Leveraging React's component-based architecture and CSS3 animations, this app delivers a premium user experience. It solves the problem of scattered birthday dates by providing a localized, secure, and visually engaging dashboard for all your social milestones.

## The Mission: Compassion & Passion
This project was born from a simple but powerful goal: **ensuring that no loved one feels forgotten.** In our fast-paced lives, it's easy to overlook milestone moments. 

I built this tool to bridge that gap—combining my passion for coding with compassion for human connection. It's not just a reminder; it's a way to foster thoughtfulness and celebrate the people who matter most.

## BirthdayReminder Preview

<img width="1429" height="772" alt="birthday_reminder_preview" src="https://github.com/user-attachments/assets/6ba64bc6-317d-4d96-9a93-2f706a5e22a5" />

I built this not just as a technical exercise in React, but as a solution to a personal challenge: **ensuring that no loved one feels forgotten.** I believe that technology should serve human connection, and this reminder tool is my way of using code to foster more empathy and thoughtfulness in my social circle.

## Tech Stack
* **Frontend**: React.js
* **Styling**: CSS3 (Custom animations, Flexbox, Grid, 3D effects)
* **Storage**: Browser LocalStorage API
* **Icons/Logo**: SVG & Emoji
* **Type Checking**: Integrated `Prop-Types` for robust data validation and predictable component communication.
* **Accessibility (a11y)**: Designed with semantic HTML, ARIA labels, and full keyboard navigation support (Tab indexing).

## Project Structure
## 📂 Project Structure

```text
birthday-reminder/
├── public/
│   └── index.html          # HTML entry point, SEO tags, and favicon setup
├── src/
│   ├── App.js              # Main logic: Filtering, Sanitization & LocalStorage
│   ├── List.js             # UI Component: Rendering logic & Prop-Types validation
│   ├── List.module.css     # Encapsulated styles (CSS Modules) for the list & cards
│   ├── indx.css            # Global styles: Layout, Variables, Form & Search Bar
│   └── index.js            # React application entry point
├── package.json            # Project dependencies (React, Prop-Types, etc.)
└── README.md               # Documentation: "The Why", Tech Stack & Roadmap

Currently, the project can be viewed locally by running the npm start command after installing the dependencies.

## Why did I choose React.js?

I chose to use **React** for this project because it offers major advantages in managing dynamic interfaces:
* **State Management**: React allowed me to manage the list of people in an efficient way using the `useState` hook. The interface updates instantly when a person is added or deleted, without reloading the page.
* **Componentization**: I divided the app into reusable components (like `List.js`), which makes the code easier to read and maintain.
* **Side-by-Side Effects**: With the `useEffect` hook, I was able to synchronize the app's data with `localStorage`, ensuring the persistence of information between sessions.
* **Speed ​​and Performance**: The Virtual DOM in React ensures a smooth user experience, even when working with animations and frequent data manipulation.


## What is BirthdayReminder?
A modern application built in **React.js** for managing birthdays, with an intuitive design and interactive functionalities.

## Features
* **Full customization**: Add name, date, image and custom messages.
* **Smart Alerts**: Visual notifications for today and warnings for days coming tomorrow.
* **Interactive Effects**: Confetti-like animations for the celebrants.
* **Data Persistence**: Integration with `localStorage` to preserve data after refresh.
* **3D Interface**: Modern design with touch buttons and responsive layout.

## Advenced Features
- **Real-time Search & Filtering**: Instantly find specific contacts using optimized JavaScript array methods (`.filter`, `.includes`).
- **Smart Countdown**: A built-in logic that calculates exactly how many days are left until each birthday, highlighting upcoming events (under 7 days) with a "Urgent" visual pulse.
- **Input Security**: Implemented sanitization to prevent XSS (Cross-Site Scripting) and strict data validation for edge cases (e.g., future dates, empty fields).
- **Persistence**: Data is saved locally via `LocalStorage`, ensuring your list stays safe even after refreshing the page.

## Security & Robustness
* **Input Sanitization**: All user inputs are sanitized to prevent XSS (Cross-Site Scripting) attacks, ensuring that malicious scripts cannot be executed within the app.
* **Data Validation**: 
    * Future date protection (users cannot set birthdays in the future).
    * Empty state handling for names and dates.
    * Character limits on names (30) and messages (200) to maintain UI integrity.
* **Edge Case Handling**: 
    * File size validation for image uploads (max 2MB) to prevent memory issues.
    * Trimming of whitespace to avoid accidental empty entries.

## Installation
1. Clone the repository.
2. Run `npm install` to install the dependencies.
3. Start the application with `npm start`.

## Roadmap
- [ ] **Push Notifications**: Browser-level alerts for upcoming birthdays.
- [ ] **Cloud Sync**: Optional Firebase integration for cross-device access.
- [ ] **Dark Mode**: A high-contrast theme for better late-night accessibility.
- [ ] **Export/Import**: Backup data in JSON format.

MIT License - made with dedication.
