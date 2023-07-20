const { Schema, model } = require("mongoose");
const Joi = require("joi");

const emailRegExp = /\w+@\w+\.\w/;

const userSchema = Schema({
  password: {
    type: String,
    required: [true, "Set password for user"],
  },
  email: {
    type: String,
    match: emailRegExp,
    required: [true, "Email is required"],
    unique: true,
  },
  subscription: {
    type: String,
    enum: ["starter", "pro", "business"],
    default: "starter",
  },
  token: String,
});

const registerSchema = Joi.object({
  password: Joi.string().min(4).required(),
  email: Joi.string().pattern(emailRegExp).required(),
  subscription: Joi.string().valueOf("starter", "pro", "business"),
});

const loginSchema = Joi.object({
  password: Joi.string().min(6).required(),
  email: Joi.string().pattern(emailRegExp).required(),
});

const updateSubscriptionSchema = Joi.object({
  subscription: Joi.string().valueOf("starter", "pro", "business").required(),
});

const schemas = {
  register: registerSchema,
  login: loginSchema,
  updateSubscription: updateSubscriptionSchema,
};

const User = model("user", userSchema);

module.exports = {
  User,
  schemas,
};
