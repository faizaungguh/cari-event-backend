import express from 'express';
import cors from 'cors';
import xss from 'xss';
import { privateRouter } from '../route/private.js';
import { errorMiddleware } from '../middleware/error.js';
import helmet from 'helmet';

export const web = express();

//json and security
web.use(express.urlencoded());
web.use(express.json());
web.use(cors());
web.use((req, res, next) => {
  // res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader('Access-Control-Allow-Origin', '*'); //ell url can acccess
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATH, OPTIONS'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});
web.use(helmet());
web.use(xss());

//Route
web.use('/api/v1', privateRouter);

web.use(errorMiddleware);
