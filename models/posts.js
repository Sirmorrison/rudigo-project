var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

//likes and dislike schema
// var actionSchema = new Schema({
//     likes: 'likes',
//
//     dislikes: 'dislikes',
//
//     postedBy: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'User'
//     }
// }, {
//     timestamps: true
// });

//user comments schema
var commentSchema = new Schema({
    comment: {
        type: String,
        required: true
    },

   // action:[actionSchema],

   postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
});

// post schema
var postSchema = new Schema({
    post: {
        type: String,
        required: true,
        unique: true
    },
    idea: String,

    rational: String,

    effect:String,

    // action:[actionSchema],

    comments: [commentSchema],

    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
});

var Posts = mongoose.model('Post', postSchema);

module.exports = Posts;