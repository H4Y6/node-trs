const path = require("path")
const fs = require("fs/promises")

const {basedir} = global

const avatarsDir = path.join(basedir, "public", "avatars")

const setAvatar = async(req, res) => {}

module.exports = setAvatar