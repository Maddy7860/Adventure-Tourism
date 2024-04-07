const {model, Schema} = require('../connection');

const mySchema = new Schema({
    title : {type : String, required : true},
    user : String,
    bookedAt : Date,
    description : String,
    image : String,
    name : {type : Number, default : 0},
    email : {type : email, default : 0},
    password : {type : password, default : 0},
    avitor : {type : Number, default : 0},
    role : {type : Number, default : 0}

});

module.exports = model('BookedCollection', mySchema);