const { Schema, model } = require("mongoose");
const Joi = require("joi");

const emailRegexp = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

const userSchema = new Schema(
  {
    password: { type: String, required: [true, "Set password for user"] },
    email: {
      type: String,
      match: emailRegexp,
      required: [true, "Email is required"],
      unique: true,
    },
    subscription: { type: String, enum: ["starter", "pro", "business"], default: "starter" },
    token: String,
  },
  { versionKey: false, timestamps: true }
);

const registerSchema = Joi.object({
  password: Joi.string().min(6).required(),
  email: Joi.string().pattern(emailRegexp).required(),
  subscription: Joi.string().valueOf().default("starter"),
  token: Joi.string(),
});

const loginSchema = Joi.object({
  password: Joi.string().min(6).required(),
  email: Joi.string().pattern(emailRegexp).required(),
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

module.exports = { User, schemas };
