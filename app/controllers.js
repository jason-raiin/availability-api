import { getAvailability, getStatus, parseDate } from './services.js';

export const ping = (req, res) => {
  return res.json(getStatus());
};

export const availability = (req, res) => {
  let { year, month, day } = req.params;
  try {
    ({ year, month, day } = parseDate(year, month, day));
  } catch (err) {
    return res.status(400).send({ message: 'Invalid date format!', cause: err.message });
  }

  const result = getAvailability(year, month, day);
  return res.json(result);
};
