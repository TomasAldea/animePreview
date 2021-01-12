const mongoose = require("mongoose")

const AnimeSchema = new mongoose.Schema({
    name: String,
    category : String,
    rate: Number,
    image: String,
    description: String,
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User.model" }

})

module.exports = mongoose.model("Anime.model", AnimeSchema)