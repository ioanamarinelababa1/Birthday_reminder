import React, { useState, useEffect } from 'react';
import List from './List';

const getLocalStorage = () => {
  let list = localStorage.getItem('peopleList');
  return list ? JSON.parse(list) : [];
};

function App() {
  const [people, setPeople] = useState(getLocalStorage());
  const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [message, setMessage] = useState(''); // Stat nou pentru urare
  const [image, setImage] = useState(null);

  useEffect(() => {
    localStorage.setItem('peopleList', JSON.stringify(people));
  }, [people]);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => setImage(event.target.result);
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const removePerson = (id) => {
    setPeople(people.filter((person) => person.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && birthDate) {
      const newPerson = {
        id: new Date().getTime().toString(),
        name,
        birthDate,
        message, // Salvăm mesajul/felicitarea
        image: image || 'https://www.gravatar.com/avatar/0000?d=mp'
      };
      setPeople([...people, newPerson]);
      setName(''); setBirthDate(''); setMessage(''); setImage(null);
    }
  };

  return (
    <main>
      <header className="page-header">
        <h1>🎂 BirthdayReminder</h1>
        <p>Bine ați venit pe BirthdayReminder! Adaugă-ți zilele de naștere ale persoanelor alese.</p>
      </header>
      
      <section className='container'>
        <form className="form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Numele persoanei..." value={name} onChange={(e) => setName(e.target.value)} required />
          <input type="date" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} required />
          
          <textarea 
            placeholder="Scrie o urare aici (Ex: La mulți ani, ești cel mai bun!)..." 
            value={message} 
            onChange={(e) => setMessage(e.target.value)}
            className="message-input"
          />

          <label className="file-label-3d">
            <span>📸 Încarcă o fotografie</span>
            <input type="file" accept="image/*" onChange={handleImageChange} hidden />
          </label>
          
          <button type="submit" className="btn-3d add-btn">Adaugă în listă</button>
        </form>

        <List people={people} removePerson={removePerson} />
        
        {people.length > 0 && (
          <button className="btn-clear" onClick={() => setPeople([])}>Șterge tot</button>
        )}
      </section>
    </main>
  );
}

export default App;