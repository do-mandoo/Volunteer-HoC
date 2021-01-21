import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const PersonSchema = new Schema({
  username: String,
  hashedPassword: String,
  address: String,
  phoneNumber: String,
  email: String,
});

PersonSchema.methods.setPassword = async function (password) {
  const hash = await bcrypt.hash(password, 10);
  this.hashedPassword = hash;
};

PersonSchema.methods.checkPassword = async function (password) {
  const result = await bcrypt.compare(password, this.hashedPassword);
  return result;
};

PersonSchema.statics.findByUsername = function (username) {
  return this.findOne({ username });
};

PersonSchema.methods.serialize = function () {
  const data = this.toJSON();
  delete data.hashedPassword;
  return data;
};

PersonSchema.methods.generateToken = function () {
  const token = jwt.sign(
    {
      _id: this.id,
      username: this.username,
      position: this.position,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '7d',
    }
  );
  return token;
};

const Person = mongoose.model('Person', PersonSchema);
export default Person;
