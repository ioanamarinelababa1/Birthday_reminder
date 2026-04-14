import React, { useState, useEffect } from 'react';
import List from './List';
import './indx.css'; // Stilurile globale (formular, header, search bar general)

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
  
  // State pentru căutare
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
    if (!name.trim() || !birthDate) {
      alert('Vă rugăm să introduceți un nume și o dată validă.');
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

  // Logică de filtrare pentru Search Bar
  const filteredPeople = people.filter((person) =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main>
      <header className="page-header">
        <h1>🎂 BirthdayReminder</h1>
        <p>Bine ați venit pe BirthdayReminder! Adaugă zilele de naștere ale persoanelor dragi.</p>
      </header>
      
      <section className='container'>
        {/* Formular de adăugare */}
        <form className="form" onSubmit={handleSubmit} aria-label="Formular adăugare zi de naștere">
          <input 
            type="text" 
            placeholder="Numele persoanei..." 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            maxLength="30"
            aria-required="true"
          />
          <input 
            type="date" 
            value={birthDate} 
            onChange={(e) => setBirthDate(e.target.value)} 
            aria-label="Data nașterii"
          />
          <textarea 
            placeholder="Scrie o urare..." 
            value={message} 
            onChange={(e) => setMessage(e.target.value)}
            className="message-input"
            maxLength="200"
          />
          <label className="file-label-3d" tabIndex="0" onKeyDown={(e) => e.key === 'Enter' && e.target.querySelector('input').click()}>
            <span>📸 {image ? 'Imagine selectată' : 'Încarcă o fotografie'}</span>
            <input type="file" accept="image/*" onChange={handleImageChange} hidden />
          </label>
          <button type="submit" className="btn-3d add-btn">Adaugă în listă</button>
        </form>

        <hr className="divider" />

        {/* Search Bar - apare doar dacă avem oameni în listă */}
        {people.length > 0 && (
          <div className="search-container">
            <input 
              type="text"
              placeholder="Caută un sărbătorit..."
              className="search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Caută în lista de zile de naștere"
            />
          </div>
        )}

        {/* Verificare Empty State */}
        {people.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">✨</div>
            <p>Momentan nu ai adăugat niciun sărbătorit. Începe prin a completa formularul de mai sus!</p>
          </div>
        ) : (
          <>
            <List people={filteredPeople} removePerson={(id) => setPeople(people.filter(p => p.id !== id))} />
            {filteredPeople.length === 0 && searchTerm && (
              <p className="no-results">Nu am găsit nicio persoană care să corespundă căutării.</p>
            )}
          </>
        )}
        
        {people.length > 0 && (
          <button className="btn-clear" onClick={() => setPeople([])} aria-label="Șterge toată lista">
            Șterge tot
          </button>
        )}
      </section>
    </main>
  );
}

export default App;