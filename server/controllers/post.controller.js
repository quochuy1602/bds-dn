const express = require('express');
const router = express.Router();

const Post = require('../models/Post');
function PostCtrl() {};
PostCtrl.prototype.save = function(req,res){
    const newPost = new Post({
        title: req.body.title,
        postedBy:req.body.postedBy,
        comments:req.body.comments,
        blockBy:req.body.blockBy

    });
    newPost
        .save()
        .then(post => {
            res.json(post)
        }).catch(function(err) {
            if(err.code === 11000){
                res.json({"message" : "Post is exists"})
            }
            res.json({"error" : err})
        });
}
PostCtrl.prototype.list = function(req,res){
    Post.find({})
        .populate('postedBy') //  show postedBy
        .populate('comments.postedBy')
        .populate('blockBy')
        .exec(function(err, result) {
            Post.count().exec(function(err, count) {
                res.json({"list":result,"count":count})
            });

        });
}
module.exports = PostCtrl;
