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
  const [message, setMessage] = useState('');
  const [image, setImage] = useState(null);

  useEffect(() => {
    localStorage.setItem('peopleList', JSON.stringify(people));
  }, [people]);

  // Validare și curățare text (Sanitizare simplă)
  const sanitizeInput = (text) => {
    const temp = document.createElement('div');
    temp.textContent = text;
    return temp.innerHTML; // Transformă caracterele speciale în entități HTML (ex: < devine &lt;)
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Edge Case: Verificăm dimensiunea fișierului (max 2MB)
      if (file.size > 2 * 1024 * 1024) {
        alert('Imaginea este prea mare! Maximum 2MB.');
        e.target.value = null;
        return;
      }
      const reader = new FileReader();
      reader.onload = (event) => setImage(event.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Edge Case: Validare input-uri goale sau doar spații
    if (!name.trim() || !birthDate) {
      alert('Vă rugăm să introduceți un nume și o dată validă.');
      return;
    }

    // Edge Case: Verificăm dacă data nu este în viitor
    if (new Date(birthDate) > new Date()) {
      alert('Data de naștere nu poate fi în viitor!');
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

  return (
    <main>
      <header className="page-header">
        <h1>🎂 BirthdayReminder</h1>
        <p>Bine ați venit pe BirthdayReminder! Adaugă-ți zilele de naștere ale persoanelor alese.</p>
      </header>
      
      <section className='container'>
        <form className="form" onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Numele persoanei..." 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            maxLength="30" // Edge Case: Limităm lungimea numelui
          />
          <input 
            type="date" 
            value={birthDate} 
            onChange={(e) => setBirthDate(e.target.value)} 
          />
          <textarea 
            placeholder="Scrie o urare aici..." 
            value={message} 
            onChange={(e) => setMessage(e.target.value)}
            className="message-input"
            maxLength="200" // Edge Case: Limităm urarea
          />
          <label className="file-label-3d">
            <span>📸 {image ? 'Imagine selectată' : 'Încarcă o fotografie'}</span>
            <input type="file" accept="image/*" onChange={handleImageChange} hidden />
          </label>
          <button type="submit" className="btn-3d add-btn">Adaugă în listă</button>
        </form>

        <List people={people} removePerson={(id) => setPeople(people.filter(p => p.id !== id))} />
        
        {people.length > 0 && (
          <button className="btn-clear" onClick={() => setPeople([])}>Șterge tot</button>
        )}
      </section>
    </main>
  );
}

export default App;