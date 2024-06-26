const {model, Schema} = require('../connection');

const mySchema = new Schema({
   
    name : {type : String, require: true},
    place : {type : String, require: true},
    placeCover : String,
    price : Number,
    description: String,
    facilities : {type : Array, default : []},
    createAt : {type : Date, default : Date.now}

});

module.exports = model('packages', mySchema);