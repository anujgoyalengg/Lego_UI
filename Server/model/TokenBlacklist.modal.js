const mongoose = require("mongoose");

const TokenBlacklistSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true,
    unique: true,
  },

  createdAt: {
    type: Date,
    expires: "1d",
    default: Date.now,
  },
});

module.exports = mongoose.model("TokenBlacklist", TokenBlacklistSchema);
