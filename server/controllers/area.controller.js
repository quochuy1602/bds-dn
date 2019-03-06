const express = require('express');
const router = express.Router();

const Area = require('../models/Area');
function AreaCtrl() {};
AreaCtrl.prototype.save = function(req,res){
    const newArea = new Area({
        name: req.body.name,
        geo:req.body.geo,
        city:req.body.city,
        fillColor:req.body.fillColor,
        strokeColor:req.body.strokeColor,
    });
    newArea
        .save()
        .then(post => {
            res.json(post)
        }).catch(function(err) {
            if(err.code === 11000){
                res.json({"message" : "Area is exists"})
            }else{
                return res.status(400).send({
                    message: err
                });
            }
        });
}
AreaCtrl.prototype.list = function(req,res){
    Area.find({})
        .exec(function(err, result) {
            if (err) {
                return res.status(400).send({
                    message: err
                });
            }
            Area.count().exec(function(err, count) {
                res.json({"list":result,"count":count})
            });

        });
}
AreaCtrl.prototype.listCity = function(req,res){
    Area.find({"city":req.params.city})
        .exec(function(err, result) {
            if (err) {
                return res.status(400).send({
                    message: err
                });
            }
            Area.count().exec(function(err, count) {
                res.json({"list":result,"count":count})
            });

        });
}
AreaCtrl.prototype.findGeoLocation = function(req,res){
    let  coordinates = req.body.coordinates;
    let  zoom = req.body.zoom;
    Area.find({
        geo:{
            $geoIntersects: {
                $geometry: {
                    type : "Polygon" ,
                    coordinates: coordinates
                }
            }
        }
    })
        .exec(function(err, result) {
            if (err) {
                return res.status(400).send({
                    message: err
                });
            }
            Area.count({
                geo:{
                    $geoIntersects: {
                        $geometry: {
                            type : "Polygon" ,
                            coordinates: coordinates
                        }
                    }
                }
            }).exec(function(err, count) {
                if (err) {
                    return res.status(400).send({
                        "message": err
                    });
                }
                res.json({"list":result,"count":count})
            });

        });

}
module.exports = AreaCtrl;
