import React from 'react';

const List = ({ people, removePerson }) => {
  return (
    <div className="list-container">
      <h3>{people.length} Persoane înregistrate</h3>
      {people.map((person) => {
        const { id, name, birthDate, image, message } = person;
        return (
          <article key={id} className="person-card" tabIndex="0">
            <div className="img-container">
              <img src={image} alt={`Portretul lui ${name}`} />
            </div>
            <div className="person-info">
              <h4>{name}</h4>
              <p className="date-text">{birthDate}</p>
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