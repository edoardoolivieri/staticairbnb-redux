import flats from '../flats';

export function setFlats() {
  // API call! for now, simulate DB

  return{
    type: 'SET_FLATS',
    payload: flats
  };
};
