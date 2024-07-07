import express from 'express';
import admin from '../controller/actor/admin.js';
import creator from '../controller/actor/creator.js';

const privateRouter = new express.Router();

// Auth || Signin Admin, Customer, Creator
privateRouter.post('/signin/admin');
privateRouter.post('/signin/customer');
privateRouter.post('/signin/creator');

// Admin API
privateRouter.post('/admin', admin.create);
privateRouter.get('/admins', admin.list); //? Get All Admin
privateRouter.get('/admin/:id', admin.select); //? Get Admin by Id
privateRouter.patch('/admin/:id', admin.update); //? Update Admin by Id
privateRouter.delete('/admin/:id', admin.drop); //? Delete Admin by Id

// Category API || Only Admin can make and edit
privateRouter.post('/category'); //? Add category
privateRouter.patch('/category/:id'); //? Update category
privateRouter.delete('/category/:id'); //? Delete category

// Customer API
//* Admin can do too
privateRouter.get('/customers'); //? Get All Customer || Customer & Admin can access
privateRouter.get('/customer/:id'); //? Get Customer by Id || Customer & Admin can access
privateRouter.delete('/customer/:id'); //? Delete Customer by Id
//* Just Customer can do
privateRouter.patch('/customer/:id'); //? Update Customer by Id

// Creator API
privateRouter.patch('/creator/:id'); //? Update Customer by Id
privateRouter.delete('/creator/:id', creator.drop); //? Delete Customer by Id

// Event API || Only Creator can Make Event
privateRouter.post('/event'); //? Add event
privateRouter.patch('/event/:id'); //? Update event by Id
privateRouter.delete('/event/:id'); //? Delete event by Id

// Order API || Only Customer can Make Order
privateRouter.post('/order'); //? Add order
privateRouter.patch('/order/:id'); //? Update order by Id
privateRouter.delete('/order/:id'); //? Delete order by Id
//* Just Admin can do
privateRouter.get('/orders'); //? Get All order

// Transaction API || Only Customer can Make Transaction from Order
privateRouter.post('/transaction'); //? Add transaction
privateRouter.patch('/transaction/:id'); //? Update transaction by Id
privateRouter.delete('/transaction/:id'); //? Delete transaction by Id
//* Just Admin can do
privateRouter.get('/transactions'); //? Get All transaction

// Tickets API || Customer Ticket from Transaction
privateRouter.get('/my_tickets'); //? Customer can see
privateRouter.get('/tickets'); //? Creator can see || Admin and Creator

// Blog API || Only Admin can make blog
privateRouter.post('/blog'); //? Add Blog
privateRouter.patch('/blog/:id'); //? Update blog by Id
privateRouter.delete('/blog/:id'); //? Delete blog by Id

export { privateRouter };
