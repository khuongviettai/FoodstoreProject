const express = require("express");
const asyncHandler = require('express-async-handler');
const Product = require("../models/Product");

const productRoutes = require("express").Router();





// All Products
productRoutes.get("/", asyncHandler (
    async(req, res) => {
        const products = await Product.find({});
        res.json(products);
    }
))

// Single Products

productRoutes.get("/:id", asyncHandler (
    async(req, res) => {
        const product = await Product.findById(req.params.id);
        if(product){
            res.json(product);
        }
        else{
            res.status(404);
            throw new Error("Product Not Found")
        }
    }
))




productRoutes.delete("/:id", asyncHandler (
    async(req, res) => {
        const product = await Product.findByIdAndDelete(req.params.id);
        if(product){
            res.json("done");
        }
        else{
            res.status(404);
            throw new Error("Product Not Found")
        }
    }
))

productRoutes.put("/:id", asyncHandler(
    
    async(req, res) => {
        const product = await Product.findByIdAndUpdate({_id:   req.params.id},{
            title: req.body.title,
            category: req.body.category,
            description: req.body.description,
            price: req.body.price
        })
        if(product){
            res.json(product);
        }
        else{
            res.status(404);
            throw new Error("Product Not Found")
        }
    }
))







module.exports = productRoutes;