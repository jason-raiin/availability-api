import { Schema, model } from 'mongoose';

const placeSchema = new Schema({
  name: String,
  availability: {
    type: Map,
    of: {
      type: Map,
      of: {
        type: Map,
        of: Boolean
      }
    }
  }
});

export const Place = model('Place', placeSchema);
