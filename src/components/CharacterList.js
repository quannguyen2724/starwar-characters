import React from 'react';
import CharacterCard from './CharacterCard';

function CharacterList({ characters }) {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap -mx-4">
        {characters.map((character) => (
          <CharacterCard key={character.url} character={character} />
        ))}
      </div>
    </div>
  );
}

export default CharacterList;
