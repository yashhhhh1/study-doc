const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const keyscreat = "paelyashyogeshbhaipaelyashyogesh";

const userSchema = new mongoose.Schema({
  fname: { type: String, required: true },
  lname: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  tokens: [
    {
      token: {
        type: String,
        required: true
      }
    }
  ],
 
},
{ timestamps: true}
);

userSchema.methods.generateAuthToken = async function () {
  try {
    let token = jwt.sign({ _id: this._id }, keyscreat, {
      expiresIn: "1d"
    });

    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    return token;
  } catch (error) {
    rs
    res.status(404).json(error);
  }
};

module.exports = mongoose.model('User', userSchema);
