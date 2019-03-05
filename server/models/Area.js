const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AreasSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
    },
    city:{
        type:String
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
const Areas = mongoose.model('Areas', AreasSchema);

module.exports = Areas;
