import { getAvailability, getStatus } from './services.js';

export const ping = (req, res) => {
  return res.json(getStatus());
};

export const availability = async (req, res) => {
  const result = getAvailability('hi');
  return res.json(result);
};
