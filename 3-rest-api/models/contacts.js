const { Schema, model } = require("mongoose");

const contactsSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, match: /\w+@\w+\.\w+/, required: true, unique: true },
  phone: { type: String, required: true },
});
const Contact = model("contact", contactsSchema);

module.exports = Contact;
