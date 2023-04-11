const { Schema, model } = require("mongoose");
// const Joi = require("joi");

const emailRegexp = /\S+@\S+\.\w{2,3/;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, match: emailRegexp, unique: true, required: true },
  password: { type: String, minlength: 6, required: true },
});

const User = model("user", userSchema);

module.exports = { User };
