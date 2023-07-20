const { Schema, model } = require("mongoose");

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

module.exports = Contact;
