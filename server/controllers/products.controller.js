const express = require('express');
const router = express.Router();
const Promise =  require('bluebird');
const Product = require('../models/Product');
const Area = require('../models/Area');
const Block = require('../models/Block');
function ProductCtrl() {};

ProductCtrl.prototype.save = function(req,res){
    const newProduct = new Product({
        type: req.body.type,
        stretch:req.body.stretch,
        direction:req.body.direction,
        number:req.body.number,
        blockBy:req.body.blockBy,
        areaBy:req.body.areaBy,
        postBy:req.body.postBy,
        geo:req.body.geo
    });
    newProduct
        .save()
        .then(product => {
            res.json(product)
        }).catch(function(err) {
            if(err.code === 11000){
                res.json({"message" : "Product is exists"})
            }else{
                return res.status(400).send({
                    message: err
                });
            }
        });
}

ProductCtrl.prototype.list = function(req,res){
    Product.find({})
        .populate('blockBy')
        .populate('areaBy')
        .populate('postBy.postedBy')
        .exec(function(err, result) {
            /* Product.count().exec(function(err, count) {
                 res.json({"list":result,"count":count})
             });*/
            if (err) {
                return res.status(400).send({
                    message: err
                });
            }
            res.json(result)
        });
}
ProductCtrl.prototype.get = function(req,res){

    Product.findById(req.params.id)
        .populate('blockBy')
        .exec(function(err, result) {
            if (err) {
                return res.status(400).send({
                    message: err
                });
            }
            console.log(result);
            res.json(result)

        });
}
ProductCtrl.prototype.findGeoLocation = function(req,res){
    let  coordinates = req.body.coordinates;
    let  type = req.body.type; // type = 1 nha,type = 2 dat
    let  service = req.body.service;
    let  price = req.body.price;
    let  stretch = req.body.stretch;

    let  zoom = req.body.zoom;
    Promise.all([
        Product.find({

                geo:{
                    $geoIntersects: {
                        $geometry: {
                            type : "Polygon" ,
                            coordinates: coordinates
                        }
                    }
                 },
                 active:"ok",
                 $or:[{}]
        }).exec(),
        Block.find({
            geo:{
                $geoIntersects: {
                    $geometry: {
                        type : "Polygon" ,
                        coordinates: coordinates
                    }
                }
            }
        }).exec()

    ]).spread((listProduct,listBlock)=>{
        let object ={
            "products":listProduct,
            "blocks":listBlock
        }
        res.json(object);
    });

}
module.exports = ProductCtrl;
