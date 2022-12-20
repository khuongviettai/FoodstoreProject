const express = require("express");
const asyncHandler = require('express-async-handler');
const Order = require("../models/Order");


const orderRoutes = require("express").Router();





// get All Order
orderRoutes.get("/", asyncHandler (
    async(req, res) => {
        const order = await Order.find({});
        res.json(order);
    }
))


// get Single Order

orderRoutes.get("/:id", asyncHandler (
    async(req, res) => {
        const order = await Order.findById(req.params.id);
        if(order){
            res.json(order);
        }
        else{
            res.status(404);
            throw new Error("Order Not Found")
        }
    }
))







module.exports = orderRoutes;