const { adminLogin } = require('../controllers/auth');
const {
  createAdmin,
  getAllAdmin,
  getAdminById,
  updateAdmin,
  deleteAdmin,
} = require('../controllers/admin');
const { getAllCreator, getCreatorById } = require('../controllers/creator');
const {
  getAllCustomer,
  getCustomerById,
  updateCustomer,
  deleteCustomer,
} = require('../controllers/customer');
const {
  createEvent,
  updateEvent,
  deleteEvent,
} = require('../controllers/event');
const {
  getAllOrder,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder,
} = require('../controllers/order');
const {
  getAllTransaction,
  getTransactionById,
  createTransaction,
  updateTransaction,
  deleteTransaction,
} = require('../controllers/transaction');
const { getTicketById } = require('../controllers/ticket');
const { createBlog, updateBlog, deleteBlog } = require('../controllers/blog');
const { createInfo, updateInfo, deleteInfo } = require('../controllers/info');

const privateRouter = require('express').Router();

// Auth API | Login Admin
privateRouter.post('/auth/admin', adminLogin);

// Admin API | Create, GetAll, GetById, Update, Delete
privateRouter.post('/admin', createAdmin);
privateRouter.get('/admins', getAllAdmin);
privateRouter.get('/admin/:id', getAdminById);
privateRouter.patch('/admin/:id', updateAdmin);
privateRouter.delete('/admin/:id', deleteAdmin);

// Creator API
// Admin Role can do
privateRouter.get('/creators', getAllCreator);
privateRouter.get('/creator/:id', getCreatorById);

// Customer API
// Admin Role can do
privateRouter.get('/customers', getAllCustomer);
privateRouter.get('/customer/:id', getCustomerById);
// Customer Role can do
privateRouter.patch('/customer/:id', updateCustomer);
privateRouter.delete('/customer/:id', deleteCustomer);

// Event API
privateRouter.post('/event/:id', createEvent);
privateRouter.patch('/event/:id', updateEvent);
privateRouter.delete('/event/:id', deleteEvent);

// Order API
// Admin can do
privateRouter.get('/orders', getAllOrder);
privateRouter.get('/orders/:id', getOrderById);
// Customer can do
privateRouter.post('/orders', createOrder);
privateRouter.get('/order/:id', getOrderById);
privateRouter.patch('/order/:id', updateOrder);
privateRouter.delete('/order/:id', deleteOrder);

// Transaction API
// Admin can do
privateRouter.get('/transactions', getAllTransaction);
privateRouter.get('/transactions/:id', getTransactionById);
// Customer can do
privateRouter.post('/transaction', createTransaction);
privateRouter.get('/transaction/:id', getTransactionById);
privateRouter.patch('/transaction/:id', updateTransaction);
privateRouter.delete('/transaction/:id', deleteTransaction);

// Tickets API
privateRouter.get('/ticket/:id', getTicketById);

// Blog API
// Admin can do
privateRouter.post('/blog', createBlog);
privateRouter.patch('/blog/:id', updateBlog);
privateRouter.delete('/blog/:id', deleteBlog);

// Info API
privateRouter.post('/info', createInfo);
privateRouter.patch('/info/:id', updateInfo);
privateRouter.delete('/info/:id', deleteInfo);

module.exports = { privateRouter };
