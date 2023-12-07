import { readFileSync } from 'fs';

export const getStatus = () => ({ status: 'Healthy!' });

export const parseDate = (year, month, day) => {
  year = Number(year);
  month = Number(month);
  day = Number(day);
  if (!year) throw new Error('Invalid year!');
  if (!month || month < 1 || month > 12) throw new Error('Invalid month!');
  // Date constructor hack: month is zero-indexed, day = 0 gives last day of previous month
  const getDaysInMonth = (year, month) => new Date(year, month, 0).getDate();
  if (!day || day > getDaysInMonth(year, month) || day < 1) throw new Error('Invalid day!');

  if (new Date(year, month - 1, day + 1) < Date.now()) throw new Error('Date must be in the future!');

  return { year, month, day };
};

const fetchPlaces = () => {
  const dataBuffer = readFileSync('./app/data.json');
  const data = JSON.parse(dataBuffer);
  return data.places;
};

export const getAvailability = (year, month, day) => {
  const places = fetchPlaces();
  const availablePlaces = places
    .filter(place => place.availability?.[year]?.[month]?.[day])
    .map(place => place.name);

  return { availablePlaces };
};
