import React, { useState, useEffect } from 'react';
import List from './List';
import { calculateDaysUntil } from './utils'; // Importul funcției extrase
import './indx.css'; 

const getLocalStorage = () => {
  let list = localStorage.getItem('peopleList');
  return list ? JSON.parse(list) : [];
};

function App() {
  const [people, setPeople] = useState(getLocalStorage());
  const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [message, setMessage] = useState('');
  const [image, setImage] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    localStorage.setItem('peopleList', JSON.stringify(people));
  }, [people]);

  const sanitizeInput = (text) => {
    const temp = document.createElement('div');
    temp.textContent = text;
    return temp.innerHTML;
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        alert('Imaginea este prea mare! Maximum 2MB.');
        return;
      }
      const reader = new FileReader();
      reader.onload = (event) => setImage(event.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedDate = new Date(birthDate);
    const currentYear = new Date().getFullYear();
    const selectedYear = selectedDate.getFullYear();

    if (!name.trim() || !birthDate) {
      alert('Vă rugăm să introduceți un nume și o dată validă.');
      return;
    }

    if (selectedYear > currentYear || selectedYear < currentYear - 120) {
      alert(`Te rugăm să introduci un an valid (între ${currentYear - 120} și ${currentYear}).`);
      return;
    }

    const newPerson = {
      id: new Date().getTime().toString(),
      name: sanitizeInput(name),
      birthDate,
      message: sanitizeInput(message),
      image: image || 'https://www.gravatar.com/avatar/0000?d=mp'
    };

    setPeople([...people, newPerson]);
    setName(''); setBirthDate(''); setMessage(''); setImage(null);
  };

  // Logica "Senior": Filtrare + Sortare automată folosind utilitarul importat
  const filteredPeople = people
    .filter((person) => person.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => calculateDaysUntil(a.birthDate) - calculateDaysUntil(b.birthDate));

  return (
    <main>
      <header className="page-header">
        <h1>🎂 BirthdayReminder</h1>
        <p>Gestionează zilele de naștere și nu uita niciodată să transmiți o urare!</p>
      </header>
      
      <section className='container'>
        <form className="form" onSubmit={handleSubmit} aria-label="Formular adăugare">
          <input 
            type="text" 
            placeholder="Numele persoanei..." 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            maxLength="30" 
          />
          <input 
            type="date" 
            value={birthDate} 
            onChange={(e) => setBirthDate(e.target.value)} 
          />
          <textarea 
            placeholder="Scrie o urare..." 
            value={message} 
            onChange={(e) => setMessage(e.target.value)}
            className="message-input"
            maxLength="200"
          />
          <label className="file-label-3d" tabIndex="0">
            <span>📸 {image ? 'Imagine selectată' : 'Încarcă o fotografie'}</span>
            <input type="file" accept="image/*" onChange={handleImageChange} hidden />
          </label>
          <button type="submit" className="btn-3d add-btn">Adaugă în listă</button>
        </form>

        <hr className="divider" />

        {people.length > 0 && (
          <div className="search-container">
            <input 
              type="text" 
              placeholder="Caută un sărbătorit..." 
              className="search-input" 
              value={searchTerm} 
              onChange={(e) => setSearchTerm(e.target.value)} 
            />
          </div>
        )}

        {people.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">✨</div>
            <p>Lista este goală. Adaugă pe cineva!</p>
          </div>
        ) : (
          <>
            <List 
              people={filteredPeople} 
              removePerson={(id) => setPeople(people.filter(p => p.id !== id))} 
            />
            {filteredPeople.length === 0 && searchTerm && (
              <p className="no-results">Niciun rezultat pentru "{searchTerm}".</p>
            )}
          </>
        )}
        
        {people.length > 0 && (
          <button className="btn-clear" onClick={() => setPeople([])}>
            Șterge tot
          </button>
        )}
      </section>
    </main>
  );
}

export default App;