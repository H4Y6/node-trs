const { Schema, model } = require("mongoose");
const Joi = require("joi");

const emailRegexp = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

const contactSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, match: emailRegexp, unique: true, required: true },
    phone: { type: String, required: true },
    favorite: { type: Boolean, default: false },
  },
  { versionKey: false, timestamps: true }
);

const Contact = model("contacts", contactSchema);

const addSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().pattern(emailRegexp).required(),
  phone: Joi.string().required(),
  favorite: Joi.boolean().default(false),
});

const updateStatusSchema = Joi.object({ favorite: Joi.boolean().required() });

const schemas = { add: addSchema, updateStatus: updateStatusSchema };

module.exports = { Contact, schemas };
