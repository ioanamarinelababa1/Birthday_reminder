import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import List from './List';
import { calculateDaysUntil } from './utils';
import './indx.css'; 

const getLocalStorage = () => {
  let list = localStorage.getItem('peopleList');
  return list ? JSON.parse(list) : [];
};

function App() {
  const { t, i18n } = useTranslation();
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
    if (!name.trim() || !birthDate) {
      alert(i18n.language === 'ro' ? 'Vă rugăm să introduceți un nume și o dată.' : 'Please enter a name and date.');
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

  const filteredPeople = people
    .filter((person) => person.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => calculateDaysUntil(a.birthDate) - calculateDaysUntil(b.birthDate));
  
  return (
    <main>
      <header className="page-header">
        <h1>🎂 {t('title')}</h1>
        <p className="subtitle">{i18n.language === 'ro' ? 'Bine ați venit pe BirthdayReminder!' : 'Welcome to BirthdayReminder!'}</p>
        <div className="lang-btns">
           <button onClick={() => i18n.changeLanguage('ro')}>RO</button>
           <button onClick={() => i18n.changeLanguage('en')}>EN</button>
        </div>
      </header>
      
      <section className='container'>
        <form className="form" onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder={t('placeholder_name')} 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
          <input type="date" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} />
          
          <textarea 
            className="message-input"
            placeholder={i18n.language === 'ro' ? "Scrie o urare..." : "Write a wish..."}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <label className="file-label-3d">
            <input type="file" accept="image/*" onChange={handleImageChange} style={{display: 'none'}} />
            📸 {image ? (i18n.language === 'ro' ? 'Imagine selectată' : 'Image selected') : (i18n.language === 'ro' ? 'Încarcă o fotografie' : 'Upload a photo')}
          </label>

          <button type="submit" className="btn-3d add-btn">
            {t('add_btn')}
          </button>
        </form>

        <div className="search-container">
          <input 
            type="text" 
            className="search-input"
            placeholder={i18n.language === 'ro' ? "Caută un sărbătorit..." : "Search for someone..."}
            value={searchTerm} 
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <List 
          people={filteredPeople} 
          removePerson={(id) => setPeople(people.filter(p => p.id !== id))} 
        />
        
        {people.length > 0 && (
          <button className="btn-clear" onClick={() => setPeople([])}>
            {i18n.language === 'ro' ? 'Șterge tot' : 'Clear all'}
          </button>
        )}
      </section>
    </main>
  );
}

export default App;