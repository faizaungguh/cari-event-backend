import express from 'express';
import admin from '../controller/actor/admin.js';
import creator from '../controller/actor/creator.js';
import customer from '../controller/actor/customer.js';
import event from '../controller/event.js';
import category from '../controller/category.js';

const privateRouter = new express.Router();

// Auth || Signin Admin, Customer, Creator
privateRouter.post('/signin/admin');
privateRouter.post('/signin/customer');
privateRouter.post('/signin/creator');

// Admin API
privateRouter.post('/admin', admin.create);
privateRouter.get('/admins', admin.list);
privateRouter.get('/admin/:id', admin.select);
privateRouter.patch('/admin/:id', admin.update);
privateRouter.delete('/admin/:id', admin.drop);

// Category API || Only Admin can make and edit
privateRouter.post('/category');
privateRouter.patch('/category/:id');
privateRouter.delete('/category/:id');

// Customer API
//* Admin can do too
privateRouter.get('/customers', customer.list);
privateRouter.get('/customer/:id', customer.select);
privateRouter.delete('/customer/:id', customer.drop);
//* Just Customer can do
privateRouter.patch('/customer/:id');

// Creator API
privateRouter.patch('/creator/:id', creator.update);
privateRouter.delete('/creator/:id', creator.drop);

// Category API || Only Admin can make category
privateRouter.post('/category', category.create);
privateRouter.get('/categories', category.list);
privateRouter.get('/category/:id', category.select);
privateRouter.patch('/category/:id', category.update);
privateRouter.delete('/category/:id', category.drop);

// Event API || Only Creator can Make Event
privateRouter.post('/event', event.create);
privateRouter.patch('/event/:id', event.update);
privateRouter.delete('/event/:id', event.drop);

// Order API || Only Customer can Make Order
privateRouter.post('/order');
privateRouter.patch('/order/:id');
privateRouter.delete('/order/:id');
//* Just Admin can do
privateRouter.get('/orders');

// Transaction API || Only Customer can Make Transaction from Order
privateRouter.post('/transaction');
privateRouter.patch('/transaction/:id');
privateRouter.delete('/transaction/:id');
//* Just Admin can do
privateRouter.get('/transactions');

// Tickets API || Customer Ticket from Transaction
privateRouter.get('/my_tickets');
privateRouter.get('/tickets');

// Blog API || Only Admin can make blog
privateRouter.post('/blog');
privateRouter.patch('/blog/:id');
privateRouter.delete('/blog/:id');

export { privateRouter };
