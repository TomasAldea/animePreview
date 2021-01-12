const Animes = require("../models/Anime.model");
const { userSecureRoute } = require("./userController");
const User = require("../models/User.model");
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
        const anime = await Animes.create({name,category,rate,description,owner:req.session.currentUser._id}) 
        await User.findByIdAndUpdate(req.session.currentUser._id, {$push:{createAnime:anime._id}})
        console.log("Animes",anime)
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