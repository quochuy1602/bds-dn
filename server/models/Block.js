const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BlocksSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    areaBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Areas'
    },
    geo:{
        type:{
            type:String,
            enum: [
                'Point','Polygon'
            ],
            default: 'Polygon'
        },
        coordinates:{
            type: Array
        }
    },
    fillColor: {
        type: String,
    },
    strokeColor: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
});
BlocksSchema.index({"name":1,"areaBy":1},{unique: true});
const Blocks = mongoose.model('Blocks', BlocksSchema);

module.exports = Blocks;
