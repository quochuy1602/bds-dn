var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
    title: String,
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    },
    comments: [{
        text: String,
        postedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Users'
        }
    }],
    blockBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Blocks'
    }
});

module.exports = mongoose.model("Post", PostSchema);
