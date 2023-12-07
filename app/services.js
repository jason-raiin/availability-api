import { readFileSync } from 'fs';

export const getStatus = () => ({ status: 'Healthy!' });

const fetchPlaces = () => {
  const dataBuffer = readFileSync('./app/data.json');
  const data = JSON.parse(dataBuffer);
  return data.places;
};

export const getAvailability = (date) => {
  const places = fetchPlaces();
  return places;
};
