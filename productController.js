const express = require('express');
const router = express.Router();
const dataService = require('./dataService');

const getAllProducts = (req, res) => {
    const products = dataService.getDataByType('products');
    res.json(products);
};

const getProductById = (req, res) => {
    const { id } = req.params;
    const product = dataService.getDataById('products', id);
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ 
            message: 'Product not found' 
        });
    }
};

const addProduct = (req, res) => {
    const newProduct = dataService.addData('products', req.body);
    res.status(201).json(newProduct);
};

const updateProduct = (req, res) => {
    const { id } = req.params;
    const updatedProduct = dataService.updateData('products', id, req.body);
    if (updatedProduct) {
        res.json(updatedProduct);
    } else {
        res.status(404).json({ 
            message: 'Product not found' 
        });
    }
};

const deleteProduct = (req, res) => {
    const { id } = req.params;
    const deletedProductId = dataService.deleteData('products', id);
    if (deletedProductId) {
        res.json({ 
            message: `Product with id ${deletedProductId} has been deleted` 
        });
    } else {
        res.status(404).json({ 
            message: 'Product not found' 
        });
    }
};

module.exports = {
    getAllProducts,
    getProductById,
    addProduct,
    updateProduct,
    deleteProduct,
};