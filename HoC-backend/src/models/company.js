import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const CompanySchema = new Schema({
  username: String,
  hashedPassword: String,
  companyName: String,
  address: String,
  phoneNumber: String,
});

CompanySchema.methods.setPassword = async function (password) {
  const hash = await bcrypt.hash(password, 10);
  this.hashedPassword = hash;
};

CompanySchema.methods.checkPassword = async function (password) {
  const result = await bcrypt.compare(password, this.hashedPassword);
  return result;
};

CompanySchema.statics.findByUsername = function (username) {
  return this.findOne({ username });
};

CompanySchema.methods.serialize = function () {
  const data = this.toJSON();
  delete data.hashedPassword;
  return data;
};

CompanySchema.methods.generateToken = function () {
  const token = jwt.sign(
    {
      _id: this.id,
      username: this.username,
      address: this.address,
      position: this.position,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '7d',
    }
  );
  return token;
};

const Company = mongoose.model('Company', CompanySchema);
export default Company;
