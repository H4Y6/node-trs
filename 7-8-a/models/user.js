const { Schema, model } = require("mongoose");
const Joi = require("joi");

const emailRegext = /^\w+@\w+\.\w{2,3}$/;

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, match: emailRegext, unique: true, required: true },
    password: { type: String, minlength: 6, required: true },
    token: { type: String },
  },
  { versionKey: false, timestamps: true }
);

const User = model("user", userSchema);

const registerSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().pattern(emailRegext).required(),
  password: Joi.string().min(6).required(),
});

const loginSchema = Joi.object({
  email: Joi.string().pattern(emailRegext).required(),
  password: Joi.string().min(6).required(),
});

const schemas = { register: registerSchema, login: loginSchema };

module.exports = { User, schemas };
