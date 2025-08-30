const mongoose = require("mongoose");
const { nanoid } = require("nanoid"); // works now with v3

const urlSchema = new mongoose.Schema({
  longUrl: {
    type: String,
    required: true,
  },
  shortId: {
    type: String,
    required: true,
    default: () => nanoid(7), // 7-character short ID
  },
  clicks: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Url", urlSchema);
