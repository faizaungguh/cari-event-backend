import express from 'express';
import customer from '../controller/actor/customer.js';
import creator from '../controller/actor/creator.js';

const publicRouter = new express.Router();

// Auth || Signup Customer & Creator
publicRouter.post('/signup/customer', customer.registrationCustomer);
publicRouter.post('/signup/creator', creator.registrationCreator);

// Creator API
publicRouter.get('/creators');
publicRouter.get('/creator/:id');

// Event API
publicRouter.get('/events');
publicRouter.get('/event/:id');

// Blog API
publicRouter.get('/blogs');
publicRouter.get('/blog/:id');

export { publicRouter };
