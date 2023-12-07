import express, { json } from 'express';
import { availability, ping } from './controllers.js';

export const app = express();
app.use(json());

app.get('/', ping);
app.get('/:year/:month/:day', availability);
