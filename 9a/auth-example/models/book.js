const { Schema, model } = require("mongoose");
const Joi = require("joi");

const bookSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    genres: {
      type: String,
      enum: ["fantastic", "science", "love"],
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { versionKey: false, timestamps: true }
);

const addSchema = Joi.object({
  title: Joi.string().required(),
  author: Joi.string().required(),
  favorite: Joi.boolean(),
  genres: Joi.string().valueOf("fantastic", "science", "love").required(),
});

const updateFavoriteSchema = Joi.object({
  favorite: Joi.boolean().required(),
});

const schemas = {
  add: addSchema,
  updateFavorite: updateFavoriteSchema,
};

const Book = model("book", bookSchema);

module.exports = {
  Book,
  schemas,
};
