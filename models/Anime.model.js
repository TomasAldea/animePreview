const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const AnimeSchema = new Schema({
    name: { 
       type: String,
       require: true,
    }, 
    category: {
      type: String,
      require: true,
    },
    image: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    trailer: {
        type: String,
        require: true,
    },
    rate: [],
    owner: { type: Schema.Types.ObjectId, ref: "User.model" } 
})

module.exports = mongoose.model("Anime.model", AnimeSchema)