const { Schema, model } = require("mongoose");
const Joi = require("joi");

const emailRegexp = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

const contactSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, match: emailRegexp, unique: true, required: true },
    phone: { type: String, required: true },
  },
  { versionKey: false, timestamps: true }
);

const Contact = model("contacts", contactSchema);

const addSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().pattern(emailRegexp).required(),
  phone: Joi.string().required(),
});

const schemas = { add: addSchema };

module.exports = { Contact, schemas };
