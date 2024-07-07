import express from 'express';
import { privateRouter } from '../route/private.js';
import { publicRouter } from '../route/public.js';
import { errorMiddleware } from '../middleware/error.js';

export const web = express();

web.use(express.json());
web.use('/api/v1/private', privateRouter);
web.use('/api/v1/public', publicRouter);
web.use(errorMiddleware);
