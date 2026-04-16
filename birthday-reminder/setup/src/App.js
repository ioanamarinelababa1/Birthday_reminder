import React, { useState, useEffect } from 'react';
import List from './List';
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

  // Funcție helper pentru sortare (aceeași logică ca în List.js)
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

  // --- MODIFICARE: Filtrare + Sortare automată ---
  const filteredPeople = people
    .filter((person) => person.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => calculateDaysUntil(a.birthDate) - calculateDaysUntil(b.birthDate));

  return (
    <main>
      <header className="page-header">
        <h1>🎂 BirthdayReminder</h1>
        <p>Bine ați venit pe BirthdayReminder! Adaugă zilele de naștere ale persoanelor dragi.</p>
      </header>
      
      <section className='container'>
        <form className="form" onSubmit={handleSubmit} aria-label="Formular adăugare zi de naștere">
          <input type="text" placeholder="Numele persoanei..." value={name} onChange={(e) => setName(e.target.value)} maxLength="30" aria-required="true" />
          <input type="date" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} aria-label="Data nașterii" />
          <textarea placeholder="Scrie o urare..." value={message} onChange={(e) => setMessage(e.target.value)} className="message-input" maxLength="200" />
          <label className="file-label-3d" tabIndex="0" onKeyDown={(e) => e.key === 'Enter' && e.target.querySelector('input').click()}>
            <span>📸 {image ? 'Imagine selectată' : 'Încarcă o fotografie'}</span>
            <input type="file" accept="image/*" onChange={handleImageChange} hidden />
          </label>
          <button type="submit" className="btn-3d add-btn">Adaugă în listă</button>
        </form>

        <hr className="divider" />

        {people.length > 0 && (
          <div className="search-container">
            <input type="text" placeholder="Caută un sărbătorit..." className="search-input" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} aria-label="Caută în lista de zile de naștere" />
          </div>
        )}

        {people.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">✨</div>
            <p>Momentan nu ai adăugat niciun sărbătorit.</p>
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
          <button className="btn-clear" onClick={() => setPeople([])} aria-label="Șterge toată lista">Șterge tot</button>
        )}
      </section>
    </main>
  );
}

export default App;