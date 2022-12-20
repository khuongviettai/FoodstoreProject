const express = require("express");
const products = require("./data/data");
const Product = require("./models/Product");
const Order = require("./models/Order");



const ImportData = require("express").Router();


// import products file js
ImportData.post("/products", async (req, res) => {
    await Product.remove({});
    const importProducts = await Product.insertMany(products);
    res.send({importProducts});
})


//import single product

ImportData.post('/singleproduct', (req, res) => {
    const importProduct = req.body
    Product.create(importProduct, (err, data) => {
        if(err) {
        res.status(500).send(err)
    } 
    else {
        res.status(201).send(data)
    }
})
})


// import Products

ImportData.post('/order', (req, res) => {
    const ImportData = req.body
    Order.create(ImportData, (err, data) => {
        if(err) {
        res.status(500).send(err)
    } 
    else {
        res.status(201).send(data)
    }
})
})









module.exports = ImportData;