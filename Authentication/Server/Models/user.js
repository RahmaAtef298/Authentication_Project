const mongoose = require('mongoose');
let AutoIncrement = require('mongoose-sequence')(mongoose);

const UserSchema = new mongoose.Schema({
    user_ID:Number,
    email:String,
    password:String
});

UserSchema.plugin(AutoIncrement,{inc_field : 'user_ID'});
module.exports = mongoose.model('user',UserSchema,'Users');