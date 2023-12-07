import { getStatus } from './services.js';

export const ping = (req, res) => {
  return res.json(getStatus());
};
