import { getAvailability, getStatus, parseDate } from './services.js';

export const ping = (req, res) => {
  return res.json(getStatus());
};

export const availability = (req, res) => {
  let date;
  try {
    date = parseDate(req.params.date);
  } catch (err) {
    return res.status(400).send({ message: 'Invalid date format!', cause: err.message });
  }

  const result = getAvailability(date);
  return res.json(result);
};
