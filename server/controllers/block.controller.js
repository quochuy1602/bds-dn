const express = require('express');
const router = express.Router();

const Block = require('../models/Block');
function BlockCtrl() {};
BlockCtrl.prototype.save = function(req,res){
    const newBlock = new Block({
        name: req.body.name,
    });
    newBlock
        .save()
        .then(post => {
            res.json(post)
        }).catch(function(err) {
            if(err.code === 11000){
                res.json({"message" : "Block is exists"})
            }else{
                return res.status(400).send({
                    message: err
                });
            }

        });
}
BlockCtrl.prototype.list = function(req,res){
    Block.find({})
        .exec(function(err, result) {
            Block.count().exec(function(err, count) {
                if (err) {
                    return res.status(400).send({
                        message: err
                    });
                }
                res.json({"list":result,"count":count})
            });

        });
}
module.exports = BlockCtrl;
