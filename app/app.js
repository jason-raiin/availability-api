import express, { json } from 'express';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { availability, ping } from './controllers.js';

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
  apis: ['./app/*.js']
};
const specs = swaggerJsDoc(options);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs));

// routes

/**
 * @swagger
 * /:
 *  get:
 *    summary: Returns the status of the API server.
 *    responses:
 *      200:
 *        description: Server is up!
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                status:
 *                  type: string
 *              example:
 *                status: Healthy!
 */
app.get('/', ping);

/**
 * @swagger
 * /{year}/{month}/{day}:
 *  get:
 *    summary: Retrieves places which are available on a given date.
 *    description: Returns a list of available places on the given date.
 *    parameters:
 *      - in: path
 *        name: year
 *        required: true
 *        description: Year in YYYY format
 *        schema:
 *          type: string
 *          example: 2023
 *      - in: path
 *        name: month
 *        required: true
 *        description: Month in MM format
 *        schema:
 *          type: string
 *          example: 12
 *      - in: path
 *        name: day
 *        required: true
 *        description: Day in DD format
 *        schema:
 *          type: string
 *          example: '04'
 *    responses:
 *      200:
 *        description: The list of available places.
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                  type: string
 *              example: [ Yonge, College ]
 *      400:
 *        description: 'Bad request: invalid params provided.'
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *                cause:
 *                  type: string
 *              example:
 *                message: Invalid date format!
 *                cause: Invalid day!
 */
app.get('/:year/:month/:day', availability);
