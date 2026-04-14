import React from 'react';

// 1. funcția aici (în afara componentei)
const calculateDaysUntil = (date) => {
  const today = new Date();
  const birthday = new Date(date);
  
  // Setăm anul zilei de naștere la anul curent
  birthday.setFullYear(today.getFullYear());

  // Dacă ziua a trecut deja anul acesta, calculăm pentru anul viitor
  if (today > birthday) {
    birthday.setFullYear(today.getFullYear() + 1);
  }

  const diff = birthday - today;
  // Calculăm diferența în zile
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
};

const List = ({ people, removePerson }) => {
  return (
    <div className="list-container">
      <h3>{people.length} Persoane înregistrate</h3>
      {people.map((person) => {
        const { id, name, birthDate, image, message } = person;
        
        // 2. Apelăm funcția pentru fiecare persoană
        const daysLeft = calculateDaysUntil(birthDate);

        return (
          <article key={id} className="person-card" tabIndex="0">
            <div className="img-container">
              <img src={image} alt={`Portretul lui ${name}`} />
            </div>
            <div className="person-info">
              <h4>{name}</h4>
              <p className="date-text">{birthDate}</p>
              
              {/* 3. Afișăm numărul de zile rămase cu un stil special */}
              <p className={`days-countdown ${daysLeft <= 7 ? 'urgent' : ''}`}>
                {daysLeft === 0 || daysLeft === 365 ? "🌟 Azi e ziua lor!" : `⏳ Mai sunt ${daysLeft} zile`}
              </p>

              {message && <p className="wish-message"><em>"{message}"</em></p>}
            </div>
            <button 
              className="btn-3d remove-btn-3d" 
              onClick={() => removePerson(id)}
              aria-label={`Șterge pe ${name} din listă`}
            >
              X
            </button>
          </article>
        );
      })}
    </div>
  );
};

export default List;