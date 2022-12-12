const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    default: Date.now,
  },
  batch: {
    type: String,
    required: true,
  },
});

module.exports = User = mongoose.model("yoga_form_user", UserSchema);
