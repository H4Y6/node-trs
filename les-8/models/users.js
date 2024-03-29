const { Schema, model } = require("mongoose");
const Joi = require("joi");

const emailRegexp = /^\S+@\S+\.\w{2,3}$/;

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, match: emailRegexp, unique: true, required: true },
    password: { type: String, minlength: 6, required: true },
    token: String,
  },
  { versionKey: false, timestamps: true }
);

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

const User = model("user", userSchema);

module.exports = { User, schemas };
