import express, { json } from 'express';
import { ping } from './controllers.js';

export const app = express();
app.use(json());

app.get('/', ping);
