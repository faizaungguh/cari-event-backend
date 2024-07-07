import express from 'express';
import admin from '../controller/admin.js';

const privateRouter = new express.Router();

// Admin API
privateRouter.post('/admin', admin.createAdmin);

export { privateRouter };
