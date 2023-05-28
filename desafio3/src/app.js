//import express from 'express';
const express = require('express');
const app = express();
const ProductManager = require('./ProductManager');

app.get('/productos', (req, res) => {
    const limit = req.query.limit;
    const products = ProductManager.getAllProducts();
    if (limit) {
        const limitedProducts = products.slice(0, limit);
        res.json(limitedProducts);
    } else {
        res.json(products);
    }
});

app.get('/productos/:id', (req, res) => {
    const productId = req.params.pid;
    const product = ProductManager.getProductById(productId);
    if (product) {
        res.json(product);
    
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
});

const port = 8080;
app.listen(port, () => {
    console.log(`Servidor iniciado en http://localhost:${port}`);
});

