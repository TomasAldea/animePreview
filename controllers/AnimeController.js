const Animes = require("../models/Anime.model");

//----------------render anime create form page----------------------//
const getAnimes = async(req, res)=> {
    try{
        const anime = await Animes.find()
        res.render("animes",{anime})
    }catch(err){
        console.log(err)
    }

}

const getAnime = async (req, res) =>{
    try{
        const { animeId }  = req.params;
        const oneAnime = await Animes.findById(animeId)
        res.render("anime-detail",oneAnime)

    }catch(err){
        console.log(err)
    }
}


const createAnime = async (req,res) =>{
    try{
        const {name,category,rate,description} = req.body;
        const animes = await Animes.create({name,category,rate,description})
        console.log("Animes",animes)
        res.redirect("/animes")
    }catch(err){
        console.log(err)
    }
}

  
module.exports = { 
    getAnimes,
    getAnime,
    createAnime
    
 };