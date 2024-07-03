import './App.css';
import React, { useState, useEffect } from 'react';
import CharacterList from './components/CharacterList';
import BackGround from './assets/images/background.jpeg';

function App() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchCharacters() {
    const response = await fetch('https://swapi.dev/api/people/');
    if (!response.ok) {
      throw new Error('Failed to fetch characters');
    }
    return response.json();
  }

  useEffect(() => {
    fetchCharacters()
      .then((data) => {
        setCharacters(data.results);
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to fetch characters');
        setLoading(false);
      });
  }, []);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="App">
      <div
        style={{
          backgroundImage: `url(${BackGround})`,
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="max-w-5xl mx-auto py-10">
          <h1 className="text-3xl font-bold mb-3 text-white">Star Wars Characters</h1>
          <CharacterList characters={characters} />
        </div>
      </div>
    </div>
  );
}

export default App;
