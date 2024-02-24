const mongoose = require("mongoose");

const uploader = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: [true, "email is mendatory"],
    unique: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const uploads = mongoose.model("uploader", uploader);
module.exports = uploads;
