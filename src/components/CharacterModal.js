import React, { useEffect, useState } from 'react';
import { Modal, Box, Typography } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

const style = {
  position: 'absolute',
  top: '30%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  color: 'white',
  p: 4,
};

function CharacterModal({ character, open, onClose }) {
  const [homeworld, setHomeworld] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchHomeworld() {
    try {
      const response = await fetch(character.homeworld);
      if (!response.ok) {
        throw new Error('Failed to fetch homeworld data');
      }
      const data = await response.json();
      setHomeworld(data);
      setLoading(false);
    } catch (error) {
      setError('Failed to fetch homeworld data');
      setLoading(false);
    }
  }

  useEffect(() => {
    if (!!character) {
      fetchHomeworld();
    }
  }, [character]);

  return (
    <Modal open={open} onClose={onClose} disableAutoFocus={true}>
      <Box sx={style} className="modal">
        <div className="flex flex-col gap-1">
          <ClearIcon
            onClick={onClose}
            className="text-gray-400 text-sm absolute right-2 top-2 cursor-pointer"
          />
          <Typography
            sx={{ mb: 1.5, fontWeight: 'bold' }}
            variant="h6"
            component="h2"
          >
            {character.name}
          </Typography>
          <Typography id="character-modal-description">
            Height: {character.height} cm
          </Typography>
          <Typography>Mass: {character.mass} kg</Typography>
          <Typography>Birth Year: {character.birth_year}</Typography>
          <Typography>Gender: {character.gender}</Typography>
          {loading ? (
            <Typography>Loading...</Typography>
          ) : error ? (
            <Typography>Error: {error}</Typography>
          ) : (
            <div className='text-blue-500'>
              <Typography sx={{ fontWeight: 'bold' }}>Homeworld: {homeworld.name}</Typography>
              <Typography sx={{fontSize: '12px'}}>
                Rotation Period: {homeworld.rotation_period}
              </Typography>
              <Typography sx={{fontSize: '12px'}}>
                Orbital Period: {homeworld.orbital_period}
              </Typography>
              <Typography sx={{fontSize: '12px'}}>Diameter: {homeworld.diameter}</Typography>
              <Typography sx={{fontSize: '12px'}}>Climate: {homeworld.climate}</Typography>
            </div>
          )}
        </div>
      </Box>
    </Modal>
  );
}

export default CharacterModal;
