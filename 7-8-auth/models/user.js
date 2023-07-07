const { Schema, model } = require("mongoose");
const Joi = require("joi");

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, match: emailRegexp, unique: true, required: true },
  password: { type: String, minlength: 6, required: true },
});

const registerSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
});

const loginSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
});

const User = model("user", userSchema);

const schemas = { register: registerSchema, login: loginSchema };

module.exports = { User, schemas };
