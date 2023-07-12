const { Schema, model } = require("mongoose");
const Joi = require("joi");

const emailRegexp = /^\w+@\w+\.\w{2,3}$/;

const userSchema = new Schema(
  {
    name: String,
    email: String,
    password: String,
  },
  { versionKey: false, timestamps: true }
);

const User = model("user", userSchema);

const registerSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
});

const loginSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
});

const schemas = { register: registerSchema, login: loginSchema };

module.exports = { User, schemas };
