# 🎂 BirthdayReminder

O aplicație modernă construită în **React.js** pentru gestionarea zilelor de naștere, cu un design intuitiv și funcționalități interactive.

## De ce am ales React.js?

Am ales să folosesc **React** pentru acest proiect deoarece oferă avantaje majore în gestionarea interfețelor dinamice:
* **State Management**: React mi-a permis să gestionez lista de persoane într-un mod eficient folosind hook-ul `useState`. Interfața se actualizează instantaneu atunci când o persoană este adăugată sau ștearsă, fără a reîncărca pagina.
* **Componentizare**: Am împărțit aplicația în componente reutilizabile (precum `List.js`), ceea ce face codul mai ușor de citit și de întreținut.
* **Efecte Side-by-Side**: Cu ajutorul hook-ului `useEffect`, am putut sincroniza datele aplicației cu `localStorage`, asigurând persistența informațiilor între sesiuni.
* **Viteză și Performanță**: Virtual DOM-ul din React asigură o experiență fluidă utilizatorului, chiar și atunci când lucrăm cu animații și manipulări frecvente de date.

## Tech Stack
* **Frontend**: React.js
* **Styling**: CSS3 (Custom animations, Flexbox, Grid, 3D effects)
* **Storage**: Browser LocalStorage API
* **Icons/Logo**: SVG & Emoji

## 📂 Structura Proiectului
```text
setup/
├── public/
│   └── index.html      # Punctul de intrare HTML și configurare logo/titlu
├── src/
│   ├── App.js          # Logica principală, State Management și Formular
│   ├── List.js         # Componentă pentru randarea listei și calcularea alertelor
│   ├── indx.css        # Stiluri profesionale, efecte 3D și animații
│   └── index.js        # Inițializarea aplicației React
├── package.json        # Dependențele proiectului și scripturi
└── README.md           # Documentația proiectului


## Ce este BirthdayReminder?
O aplicație modernă construită în **React.js** pentru gestionarea zilelor de naștere, cu un design intuitiv și funcționalități interactive.

## Caracteristici
* **Personalizare completă**: Adăugare nume, dată, imagine și mesaje personalizate.
* **Smart Alerts**: Notificări vizuale pentru zilele de azi și avertismente pentru zilele care urmează mâine.
* **Efecte Interactive**: Animații tip confetti pentru persoanele sărbătorite.
* **Persistență date**: Integrare cu `localStorage` pentru a păstra datele după refresh.
* **Interfață 3D**: Design modern cu butoane tactile și layout responsiv.

## Tehnologii utilizate
* React.js (Hooks: useState, useEffect)
* CSS3 (Flexbox, Grid, Animații Custom)
* LocalStorage API

## Instalare
1. Clonează repository-ul.
2. Rulează `npm install` pentru a instala dependențele.
3. Pornește aplicația cu `npm start`.