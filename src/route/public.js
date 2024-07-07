import express from 'express';
import customer from '../controller/actor/customer.js';
import creator from '../controller/actor/creator.js';
import event from '../controller/event.js';
import category from '../controller/category.js';

const publicRouter = new express.Router();

// Auth || Signup Customer & Creator
publicRouter.post('/signup/customer', customer.registration);
publicRouter.post('/signup/creator', creator.registration);

// Creator API
publicRouter.get('/creators', creator.list);
publicRouter.get('/creator/:id', creator.select);

// Category API
publicRouter.get('/categories', category.list);
publicRouter.get('/category/:id', category.select);

// Event API
publicRouter.get('/events', event.list);
publicRouter.get('/event/:id', event.select);

// Blog API
publicRouter.get('/blogs');
publicRouter.get('/blog/:id');

export { publicRouter };
