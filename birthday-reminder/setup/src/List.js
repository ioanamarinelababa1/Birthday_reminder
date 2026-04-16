import React from 'react';
import PropTypes from 'prop-types';
import styles from './List.module.css'; 
import { calculateDaysUntil } from './utils'; // Importăm funcția centralizată

const List = ({ people, removePerson }) => {
  return (
    <div className={styles.listContainer}>
      <h3>{people.length} Persoane înregistrate</h3>
      {people.map((person) => {
        const { id, name, birthDate, image, message } = person;
        
        // Folosim funcția importată pentru calcul
        const daysLeft = calculateDaysUntil(birthDate);
        
        // Verificăm dacă este ziua lor astăzi (0 zile rămase sau exact un an/365 zile)
        const isBirthdayToday = daysLeft === 0 || daysLeft === 365;

        return (
          <article 
            key={id} 
            className={`${styles.personCard} ${isBirthdayToday ? styles.birthdayActive : ''}`} 
            tabIndex="0"
          >
            <div className={styles.imgContainer}>
              <img src={image} alt={`Portretul lui ${name}`} />
              {/* Confetti apare doar dacă isBirthdayToday este true */}
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