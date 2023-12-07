import { Router } from 'express';
import { availability, ping } from './controllers.js';

export const router = Router();

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
router.get('/', ping);

/**
 * @swagger
 * /{year}/{month}/{day}:
 *  get:
 *    summary: Retrieves places which are available on a given date.
 *    description: Returns a list of available places on the given date. Date must not be in the past.
 *    parameters:
 *      - in: path
 *        name: year
 *        required: true
 *        description: Year in YYYY format
 *        schema:
 *          type: string
 *          example: 2024
 *      - in: path
 *        name: month
 *        required: true
 *        description: Month in MM format
 *        schema:
 *          type: string
 *          example: '01'
 *      - in: path
 *        name: day
 *        required: true
 *        description: Day in DD format
 *        schema:
 *          type: string
 *          example: '01'
 *    responses:
 *      200:
 *        description: The list of available places.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                availablePlaces:
 *                  type: array
 *                  items:
 *                    type: string
 *              example: 
 *                availablePlaces: [ Yonge, College ]
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
router.get('/:year/:month/:day', availability);
