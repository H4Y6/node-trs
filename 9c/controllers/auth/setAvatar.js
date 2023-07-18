const multer = require("multer");
const fs = require("fs/promises");
const path = require("path");
const { basedir } = global;

const avatarsDir = path.join(basedir, "public", " avatars");

const setAvatar = async (req, res) => {};

module.exports = setAvatar;
