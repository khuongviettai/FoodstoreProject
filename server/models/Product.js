const mongoose = require("mongoose");


const productSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            require: true,
        },
        image:{
            type: String,
            require: true,
        },
        category:{
            type: String,
            require: true
        },
        description: {
            type: String,
            require: true,
        },
        rating :{
            type: Object,
            require: true,
            default: 0,
        },
        price:{
            type: Number,
            require: true,
            default: 0,
        }
    }
)

module.exports = mongoose.model("Product", productSchema);