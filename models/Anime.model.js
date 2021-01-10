const mongoose = require("mongoose")

const AnimeSchema = new mongoose.Schema({
    name: String,
    category : String,
    rate: Number,
    image: String,
    description: String,
    
})

module.exports = mongoose.model("Anime.model", AnimeSchema)