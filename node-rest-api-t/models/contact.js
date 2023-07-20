const { Schema, model } = require("mongoose");

const contactSchema = new Schema(
  {
    name: String,
    email: String,
    phone: String,
  },
  { versionKey: false, timestamps: true }
);

const Contact = model("contacts", contactSchema);

module.exports = Contact;
