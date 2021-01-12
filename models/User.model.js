const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  passwordHash: {
    type: String,
    required: true,
    trim: true,
  },
  createAnime: [
     { type: mongoose.Schema.Types.ObjectId, ref: "Anime.model" } 
    ]
});

module.exports = mongoose.model("User.model", UserSchema);