import express, { json } from 'express';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { router } from './routes.js';

// setup
export const app = express();
app.use(json());

// swagger for documentation
const options = {
  swaggerDefinition: {
    openapi: '3.1.0',
    info: {
      title: 'Availability API'
    }
  },
  apis: ['./app/routes.js']
};
const specs = swaggerJsDoc(options);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs));

app.use('/', router);
