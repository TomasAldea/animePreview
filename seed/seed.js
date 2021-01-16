require("dotenv").config()
const mongoose = require("mongoose")
const data = require("./data")
const Anime = require("../models/Anime.model")

const dbOptions = {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }

async function seedDb(){
    try {
        await mongoose.connect(process.env.MONGODB_URI, dbOptions)
        const animes = await Anime.create(data)
        console.log(animes)
        mongoose.connection.close()
    }catch(err){
        console.error(err)
    }
}

seedDb()