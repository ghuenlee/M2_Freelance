var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');
var shortid = require('shortid');


var userSchema = mongoose.Schema({
    _id: {
        type: String,
        default: shortid.generate
    },
    username: String,
    password: String,
    profil: {
        accountType: String,
        ID: {
            type: String,
            refPath: 'profil.accountType'
        }
    },
    messages_envoyes: [{
        type: String,
        ref: 'Message'
    }],
    messages_recus: [{
        type: String,
        ref: 'Message'
    }],
    dateCreated: {
        type: Date,
        default: Date.now()
    }
});



userSchema.plugin(passportLocalMongoose);

var User = mongoose.model('User', userSchema);

module.exports = User;