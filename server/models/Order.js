const mongoose = require("mongoose");


const orderSchema = new mongoose.Schema(
    {
       User: {
        type: String,
        require: true
       },
       fullName: {
        type: String,
        require: true
       },
       phoneNumber: {
        type: Number,
        require: true
       },
       city: {
        type: String,
        require: true
       },
       district: {
        type: String,
        require: true
       },
       address: {
        type: String,
        require: true
       },
       notes: {
        type: String
       },
       listProducts: {
        type: Array,
        require: true
       },
       total:{
        type: Number,
        required: true
       }
    },
    { timestamps: true }
)

module.exports = mongoose.model("Order", orderSchema);