import React from 'react';
import PropTypes from 'prop-types';
import styles from './List.module.css'; 

const calculateDaysUntil = (date) => {
  const today = new Date();
  const birthday = new Date(date);
  birthday.setFullYear(today.getFullYear());

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

        return (
          <article key={id} className={styles.personCard} tabIndex="0">
            <div className={styles.imgContainer}>
              <img src={image} alt={`Portretul lui ${name}`} />
            </div>
            <div className={styles.personInfo}>
              <h4>{name}</h4>
              <p className={styles.dateText}>{birthDate}</p>
              
              <p className={`${styles.daysCountdown} ${daysLeft <= 7 ? styles.urgent : ''}`}>
                {daysLeft === 0 || daysLeft === 365 ? "🌟 Azi e ziua lor!" : `⏳ Mai sunt ${daysLeft} zile`}
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