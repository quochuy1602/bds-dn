const mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;
const Schema = mongoose.Schema;

var ProductSchema = new Schema({
    id:{
        type:ObjectId
    },
    type:{
        type: String, // 0 dat , 1 nha
    },
    street:{
        type: String,
    },
    direction:{
        type: String
    },
    price: {
        type: String,
    },
    stretch:{
        type: String,
    },
    number:{
        type: String,
    },
    blockBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Blocks'
    },
    areaBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Areas'
    },
    "geo":{
        type:Array
    },
    active:{
        type:String
    },
    userId:{
        type:String
    },
    postBy: [{
        email: String,
        phone: String,
        postedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Users'
        },
        owner:{
            type: Number, // 0:cc,1 ncc,2 other
        },
        datePost: {
            type: Date,
            default: Date.now
        }
    }],
    date: {
        type: Date,
        default: Date.now
    }
});
// create index
ProductSchema.index({"number":1,"blockBy":1,"areaBy":1},{unique: true});

module.exports = mongoose.model("Products", ProductSchema);
