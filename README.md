# 🎂 BirthdayReminder
More than just a tool - a bridge for human connection.
---

Leveraging React's component-based architecture and CSS3 animations, this app delivers a premium user experience. It solves the problem of scattered birthday dates by providing a localized, secure, and visually engaging dashboard for all your social milestones.

## The Mission: Compassion & Passion
This project was born from a simple but powerful goal: **ensuring that no loved one feels forgotten.** In our fast-paced lives, it's easy to overlook milestone moments. 

I built this tool to bridge that gap—combining my passion for coding with compassion for human connection. It's not just a reminder; it's a way to foster thoughtfulness and celebrate the people who matter most.

## BirthdayReminder Preview

<img width="1209" height="733" alt="Captură de ecran din 2026-04-19 la 15 03 18" src="https://github.com/user-attachments/assets/4902652b-85d5-49c3-90a2-af6f93f576cb" />

<img width="1201" height="734" alt="Captură de ecran din 2026-04-19 la 15 04 24" src="https://github.com/user-attachments/assets/e80c6527-b8f5-4e04-adc7-685e9d6b0f70" />


## Why did I choose React.js?

I chose to use **React** for this project because it offers major advantages in managing dynamic interfaces:
* **State Management**: React allowed me to manage the list of people in an efficient way using the `useState` hook. The interface updates instantly when a person is added or deleted, without reloading the page.
* **Componentization**: I divided the app into reusable components (like `List.js`), which makes the code easier to read and maintain.
* **Side-by-Side Effects**: With the `useEffect` hook, I was able to synchronize the app's data with `localStorage`, ensuring the persistence of information between sessions.
* **Speed ​​and Performance**: The Virtual DOM in React ensures a smooth user experience, even when working with animations and frequent data manipulation.

## Technical Excellence & Architecture
To demonstrate my commitment to writing professional, scalable, and predictable code, I implemented the following advanced React patterns:

### 1. Data Integrity with Prop-Types
I integrated the `prop-types` library to enforce strict type checking for all components. 
- **Why?** It ensures that the `List` component always receives the correct data structure (Array of Objects), making the app easier to debug and test. It demonstrates a "Type-Safe" mindset similar to TypeScript.

### 2. Component Scalability with CSS Modules
I migrated component-specific styles from a global `indx.css` to `List.module.css`.
- **Why?** This prevents "CSS Leakage" (style conflicts) by encapsulating styles. It shows I can manage large-scale applications where keeping styles modular is crucial for maintainability.

### 3. Custom Business Logic (The Countdown)
Beyond simple CRUD operations, I developed a custom date-utility logic to calculate the remaining days until a birthday.
- **Why?** This solves the core user problem: **forgetting dates**. It combines complex JavaScript `Date` object manipulation with conditional UI rendering (the "Urgent" pulse effect).

### 4. DRY Principle & Logic Centralization (New)
I performed a major refactoring by extracting core business logic into a dedicated utils.js file. **Why?** It centralizes the date calculation logic used for both Smart Sorting and UI Rendering. This eliminates code duplication, making the app easier to maintain and scale.

### 5. Smart Sorting & UX Priority (New)
The app now features Automatic Chronological Sorting. **Why?** Instead of a random list, the app intelligently prioritizes contacts whose birthdays are closest, ensuring the most relevant information is always at the top.

### 6. Internationalization (i18n) with i18next
I implemented a robust translation system supporting English and Romanian.
- **Why?** Making an app accessible to a global audience is a key requirement for modern software. It demonstrates my ability to manage complex state transitions where all UI strings must update dynamically based on the user's language choice without page refreshes.

## Features
* **Multilingual Support**: Seamless toggle between Romanian and English using `i18next`.
* **Full customization**: Add name, date, image and custom messages.
* **Smart Alerts**: Visual notifications for today and warnings for days coming tomorrow.
* **Interactive Effects**: Confetti-like animations for the celebrants.
* **Data Persistence**: Integration with `localStorage` to preserve data after refresh.
* **3D Interface**: Modern design with touch buttons and responsive layout.
* **Search & Filter**: Optimized array methods (.filter, .includes) for instant searching.
* **Image Handling**: Support for custom profile uploads with size validation (max 2MB).

## Advenced Features
- **Real-time Search & Filtering**: Instantly find specific contacts using optimized JavaScript array methods (`.filter`, `.includes`).
- **Smart Countdown**: A built-in logic that calculates exactly how many days are left until each birthday, highlighting upcoming events (under 7 days) with a "Urgent" visual pulse.
- **Input Security**: Implemented sanitization to prevent XSS (Cross-Site Scripting) and strict data validation for edge cases (e.g., future dates, empty fields).
- **Persistence**: Data is saved locally via `LocalStorage`, ensuring your list stays safe even after refreshing the page.

## Project Structure

```
birthday-reminder/
├── setup/                  # Folderul principal de lucru (Root-ul aplicației)
│   ├── public/
│   │   └── index.html      # Entry point HTML & SEO setup
│   ├── src/
│   │   ├── App.js          # State Management, Search & Sorting Logic
│   │   ├── List.js         # Componentă UI pentru randarea listei
│   │   ├── List.module.css # Stiluri încapsulate (pentru scalabilitate)
│   │   ├── utils.js        # Logica partajată (Calculul zilelor rămase)
│   │   ├── i18n.js         # Configurare i18next (Traduceri RO/EN)
│   │   ├── indx.css        # Tema globală, culori & variabile 3D
│   │   ├── index.js        # Inițializare React & i18n import
│   │   └── utils.test.js   # Unit Tests pentru logica de calcul
│   ├── package.json        # Dependențe (React, i18next, Testing Library)
│   └── .gitignore          # Fișiere ignorate de Git (node_modules, etc.)
├── README.md               # Documentația proiectului
└── .git/                   # Istoricul versiunilor
```

## Security & Robustness
* **Input Sanitization**: All user inputs are sanitized to prevent XSS (Cross-Site Scripting) attacks, ensuring that malicious scripts cannot be executed within the app.
* **Data Validation**: 
    * Future date protection (users cannot set birthdays in the future).
    * Empty state handling for names and dates.
    * Character limits on names (30) and messages (200) to maintain UI integrity.
* **Edge Case Handling**: 
    * File size validation for image uploads (max 2MB) to prevent memory issues.
    * Trimming of whitespace to avoid accidental empty entries.

## Tech Stack
* **Frontend**: React.js
* **Styling**: CSS3 (Custom animations, Flexbox, Grid, 3D effects)
* **Storage**: Browser LocalStorage API
* **Icons/Logo**: SVG & Emoji
* **Type Checking**: Integrated `Prop-Types` for robust data validation and predictable component communication.
* **Accessibility (a11y)**: Designed with semantic HTML, ARIA labels, and full keyboard navigation support (Tab indexing).
* **Localization**: i18next & react-i18next

## Installation
1. Clone the repository.
2. Run `npm install` to install the dependencies.
3. Start the application with `npm start`.

## Roadmap
- [ ] **Push Notifications**: Browser-level alerts for upcoming birthdays.
- [ ] **Cloud Sync**: Optional Firebase integration for cross-device access.
- [ ] **Dark Mode**: A high-contrast theme for better late-night accessibility.
- [ ] **Export/Import**: Backup data in JSON format.

MIT License - Made with dedication to foster better human connections.
