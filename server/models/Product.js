const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    summary: {
        type: String,
    },
    description: {
        type: String,
    },
    lat: {
        type: String
    },
    lon: {
        type: String
    },
    address: {
        type: String,
    },
    price: {
        type: String,
    },
    status:{
        type:String
    },
    user:{
        type:String
    },
    zone:{
        type:String
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Product = mongoose.model('products', ProductSchema);

module.exports = Product;