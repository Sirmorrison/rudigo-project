var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var User = new Schema({
    username: String,
    OauthId: String,
    OauthToken: String,
    image_url: String,
    // likes : [{ type: Schema.ObjectId, ref: ['Item' , 'comments']}],
    // dislike : [{ type: Schema.ObjectId, ref: ['Item' , 'comments']}],
    admin: {
            type: Boolean,
            default: false
        }
    }, {
        timestamps: true
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);
