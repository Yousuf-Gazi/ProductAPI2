const express = require('express');
const router = express.Router();
const dataService = require('./dataService');

const getAllCustomers = (req, res) => {
    const customers = dataService.getDataByType('customers');
    res.json(customers);
};

const getCustomerById = (req, res) => {
    const { id } = req.params;
    const customer = dataService.getDataById('customers', id);
    if (customer) {
        res.json(customer);
    } else {
        res.status(404).json({ 
            message: 'Customer not found' 
        });
    }
};

const addCustomer = (req, res) => {
    const newCustomer = dataService.addData('customers', req.body);
    res.status(201).json(newCustomer);
};

const updateCustomer = (req, res) => {
    const { id } = req.params;
    const updatedCustomer = dataService.updateData('customers', id, req.body);
    if (updatedCustomer) {
        res.json(updatedCustomer);
    } else {
        res.status(404).json({ 
            message: 'Customer not found' 
        });
    }
};

const deleteCustomer = (req, res) => {
    const { id } = req.params;
    const deletedCustomerId = dataService.deleteData('customers', id);
    if (deletedCustomerId) {
        res.json({ 
            message: `Customer with id ${deletedCustomerId} has been deleted` 
        });
    } else {
        res.status(404).json({ 
            message: 'Customer not found' 
        });
    }
};

module.exports = {
    getAllCustomers,
    getCustomerById,
    addCustomer,
    updateCustomer,
    deleteCustomer,
};