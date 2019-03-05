const express = require('express');
const router = express.Router();

const Area = require('../models/Area');
function AreaCtrl() {};
AreaCtrl.prototype.save = function(req,res){
    const newArea = new Area({
        name: req.body.name,
    });
    newArea
        .save()
        .then(post => {
            res.json(post)
        }).catch(function(err) {
            if(err.code === 11000){
                res.json({"message" : "Area is exists"})
            }
            res.json({"error" : err})
        });
}
AreaCtrl.prototype.list = function(req,res){
    Area.find({})
        .exec(function(err, result) {
            Area.count().exec(function(err, count) {
                res.json({"list":result,"count":count})
            });

        });
}
AreaCtrl.prototype.listCity = function(req,res){
    Area.find({"city":req.params.city})
        .exec(function(err, result) {
            Area.count().exec(function(err, count) {
                res.json({"list":result,"count":count})
            });

        });
}
module.exports = AreaCtrl;
