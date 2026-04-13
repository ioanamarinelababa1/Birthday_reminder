import React from 'react';

const List = ({ people, removePerson }) => {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  const formatDate = (date) => 
    `${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;

  const todayStr = formatDate(today);
  const tomorrowStr = formatDate(tomorrow);

  return (
    <div className="list-container">
      <h3>{people.length} Persoane înregistrate</h3>
      {people.map((person) => {
        const { id, name, birthDate, image, message } = person;
        const bDay = birthDate.substring(5);
        const isToday = bDay === todayStr;
        const isTomorrow = bDay === tomorrowStr;

        return (
          <article key={id} className={`person-card ${isToday ? 'birthday-active' : ''}`}>
            <div className="img-container">
              <img src={image} alt={name} />
              {isToday && <div className="confetti-mini">🎊</div>}
            </div>
            
            <div className="person-info">
              <h4>{name}</h4>
              {isTomorrow && <p className="warning-text">⚠️ Atenție! Mâine este ziua lui {name}!</p>}
              <p className="date-text">{birthDate}</p>
              {message && <p className="wish-message"><em>"{message}"</em></p>}
            </div>

            <button className="btn-3d remove-btn-3d" onClick={() => removePerson(id)}>X</button>
          </article>
        );
      })}
    </div>
  );
};

export default List;