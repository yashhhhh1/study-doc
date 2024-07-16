const mongoose = require("mongoose");

const upload_doc = new mongoose.Schema({
  c_name: {
    type: String,
    required: true,
  },
  s_name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  filePath: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model("upload_doc", upload_doc);
