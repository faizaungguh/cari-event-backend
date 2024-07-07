import express from 'express';
import customer from '../controller/actor/customer.js';
import creator from '../controller/actor/creator.js';

const publicRouter = new express.Router();

// Auth || Signup Customer & Creator
publicRouter.post('/signup/customer', customer.registration);
publicRouter.post('/signup/creator', creator.registration);

// Creator API
publicRouter.get('/creators', creator.list);
publicRouter.get('/creator/:id', creator.select);

// Event API
publicRouter.get('/events');
publicRouter.get('/event/:id');

// Blog API
publicRouter.get('/blogs');
publicRouter.get('/blog/:id');

export { publicRouter };
