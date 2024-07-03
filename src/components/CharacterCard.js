import React, { useState } from 'react';
import CharacterModal from './CharacterModal';
import c3poImage from '../assets/images/characters/c-3po.jpeg';
import chewbaccaImage from '../assets/images/characters/chewbacca.jpeg';
import darthMaulImage from '../assets/images/characters/Darth-Maul.jpeg';
import darthVaderImage from '../assets/images/characters/darth-vader.jpeg';
import hanSoloImage from '../assets/images/characters/han-solo.jpeg';
import lukeSkywalkerImage from '../assets/images/characters/luke-skywalker.jpeg';
import obiWanKenobiImage from '../assets/images/characters/obi-wan-kenobi.jpeg';
import palpatineImage from '../assets/images/characters/palpatine.jpeg';
import r2d2Image from '../assets/images/characters/r2-d2.jpeg';
import yodaImage from '../assets/images/characters/yoda.jpeg';

function CharacterCard({ character }) {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  const arrayImage = [
    c3poImage,
    chewbaccaImage,
    darthMaulImage,
    darthVaderImage,
    hanSoloImage,
    lukeSkywalkerImage,
    obiWanKenobiImage,
    palpatineImage,
    r2d2Image,
    yodaImage,
  ];
  const randomImageUrl =
    arrayImage[Math.floor(Math.random() * arrayImage.length)];

  return (
    <>
      <CharacterModal
        character={character}
        open={modalOpen}
        onClose={handleCloseModal}
      />
      <div onClick={handleOpenModal} className="card">
        <div className="px-6 py-4">
          <img
            className="w-full h-64 object-cover rounded-lg"
            src={randomImageUrl}
            alt={character.name}
          />
          <div className="mt-4">
            <div className="font-bold text-xl mb-2 text-white">
              {character.name}
            </div>
            <p className="text-gray-400 text-base">
              This character was appeared in many Star Wars movies.
            </p>
            <div className="mt-4 flex justify-between items-center">
              <div className="flex items-center">
                <span className="text-purple-500 text-xl mr-1">◘</span>
                <p className="text-white">Gender</p>
              </div>
              <div className="flex items-center">
                <span className="text-gray-400 text-xl mr-1">
                  {character.gender
                    ? character.gender === 'male'
                      ? '♂'
                      : '♀'
                    : ''}
                </span>
                <p className="text-white">{character.gender}</p>
              </div>
            </div>
            <hr className="border-gray-600 my-4" />
            <div className="flex items-center">
              <div className="rounded-full overflow-hidden border-2 border-gray-800">
                <img
                  className="w-10 h-10 object-cover"
                  src="https://avatars.akamai.steamstatic.com/de55a3c539e63020bd2d51dc5edd28e8fa7803e4_full.jpg"
                  alt="Me"
                />
              </div>
              <div className="flex items-center text-sm">
                <p className="ml-2 text-gray-400">
                  <span className="text-purple-500">Creation of</span>{' '}
                  quannguyen1778
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CharacterCard;
