import express from 'express';
const publicRouter = new express.Router();

// Auth || Signup Customer & Creator
publicRouter.post('/signup/customer');
publicRouter.post('/signup/creator');

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
