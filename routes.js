const express = require('express');
const router = express.Router();

//include controller
const {
    getAllCustomers,
    getCustomerById,
    addCustomer,
    updateCustomer,
    deleteCustomer
} = require('./customerController');
const {
    getAllProducts,
    getProductById,
    addProduct,
    updateProduct,
    deleteProduct
} = require('./productController');

//Customer routes
router.get('/customers', getAllCustomers);
router.get('/customers/:id', getCustomerById);
router.post('/customers', addCustomer);
router.put('/customers/:id', updateCustomer);
router.delete('/customers/:id', deleteCustomer);

//Product routes
router.get('/products', getAllProducts);
router.get('/products/:id', getProductById);
router.post('/products', addProduct);
router.put('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);

module.exports = router;