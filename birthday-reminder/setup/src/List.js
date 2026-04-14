import React from 'react';
import PropTypes from 'prop-types';
import styles from './List.module.css'; 

const calculateDaysUntil = (date) => {
  const today = new Date();
  const birthday = new Date(date);
  
  // Resetăm orele pentru a avea un calcul precis al zilelor
  today.setHours(0, 0, 0, 0);
  birthday.setFullYear(today.getFullYear());
  birthday.setHours(0, 0, 0, 0);

  if (today > birthday) {
    birthday.setFullYear(today.getFullYear() + 1);
  }

  const diff = birthday - today;
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
};

const List = ({ people, removePerson }) => {
  return (
    <div className={styles.listContainer}>
      <h3>{people.length} Persoane înregistrate</h3>
      {people.map((person) => {
        const { id, name, birthDate, image, message } = person;
        const daysLeft = calculateDaysUntil(birthDate);
        
        // Verificăm dacă este ziua lor astăzi
        const isBirthdayToday = daysLeft === 0 || daysLeft === 365;

        return (
          /* FIX: Am adăugat styles.birthdayActive dacă este ziua lor pentru animația de shake */
          <article 
            key={id} 
            className={`${styles.personCard} ${isBirthdayToday ? styles.birthdayActive : ''}`} 
            tabIndex="0"
          >
            <div className={styles.imgContainer}>
              <img src={image} alt={`Portretul lui ${name}`} />
              {/* FIX: Am reintrodus confetti-ul (emoji 🎉) doar dacă e ziua lor */}
              {isBirthdayToday && <span className={styles.confettiMini}>🎉</span>}
            </div>
            
            <div className={styles.personInfo}>
              <h4>{name}</h4>
              <p className={styles.dateText}>{birthDate}</p>
              
              <p className={`${styles.daysCountdown} ${daysLeft <= 7 ? styles.urgent : ''}`}>
                {isBirthdayToday ? "🌟 Azi e ziua lor!" : `⏳ Mai sunt ${daysLeft} zile`}
              </p>

              {message && <p className={styles.wishMessage}><em>"{message}"</em></p>}
            </div>
            
            <button 
              className={styles.removeBtn} 
              onClick={() => removePerson(id)}
              aria-label={`Șterge pe ${name}`}
            >
              X
            </button>
          </article>
        );
      })}
    </div>
  );
};

List.propTypes = {
  people: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      birthDate: PropTypes.string.isRequired,
      image: PropTypes.string,
      message: PropTypes.string
    })
  ).isRequired,
  removePerson: PropTypes.func.isRequired
};

export default List;