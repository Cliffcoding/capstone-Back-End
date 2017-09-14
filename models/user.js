const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bcrypt = require('bcrypt');



var userSchema = new Schema({
  first_name: String,
  last_name: String,
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

userSchema.methods.encryptPassword = (password) =>{
  return bcrypt.hashSync(password, bcrypt.genSaltSync(5), null)
}

userSchema.methods.validPassword = (password) =>{
  return bcrypt.compareSync(password, this.password)
}

const User = mongoose.model('User', userSchema);
module.exports = User;
