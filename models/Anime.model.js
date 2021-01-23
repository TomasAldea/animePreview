const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const AnimeSchema = new Schema({
    name: String,
    category : String,
    rate: Number,
    image: String,
    description: String,
    trailer: String,
    owner: { type: Schema.Types.ObjectId, ref: "User.model" } 

})

module.exports = mongoose.model("Anime.model", AnimeSchema)