const { Schema, model } = require("mongoose");

const Joi = require("joi");

const addSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
  favorite: Joi.boolean(),
});

const updateStatusSchema = Joi.object({
  favorite: Joi.boolean().required(),
});

const contactsSchema = new Schema(
  {
    name: { type: String, required: [true, "Set name for contact"] },
    email: {
      type: String,
      match: /\w+@\w+\.\w+/,
      required: true,
      unique: true,
    },
    phone: { type: String, required: true },
    favorite: { type: Boolean, default: false },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
const Contact = model("contact", contactsSchema);

const schemas = { add: addSchema, updateStatus: updateStatusSchema };

module.exports = { Contact, schemas };
