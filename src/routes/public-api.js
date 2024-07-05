const {
  creatorLogin,
  customerLogin,
  creatorRegister,
} = require('../controllers/auth');
const { getAllBlog, getBlogById } = require('../controllers/blog');
const { updateCreator, deleteCreator } = require('../controllers/creator');
const { getAllEvent, getEventById } = require('../controllers/event');
const { getAllInfo, getInfoById } = require('../controllers/info');

const publicRouter = require('express').Router();

// Auth | Creator, Customer
publicRouter.post('/register/creator', creatorRegister);
publicRouter.post('/register/customer', customerLogin);
publicRouter.post('/login/creator', creatorLogin);
publicRouter.post('/login/customer', customerLogin);

// Creator API
publicRouter.patch('/creator/:id', updateCreator);
publicRouter.delete('/creator/:id', deleteCreator);

// Event API
publicRouter.get('/events', getAllEvent);
publicRouter.get('/event/:id', getEventById);

// Blog API
publicRouter.get('/blogs', getAllBlog);
publicRouter.get('/blog/:id', getBlogById);

// Info API
publicRouter.get('/infos', getAllInfo);
publicRouter.get('/info/:id', getInfoById);

module.exports = { publicRouter };
