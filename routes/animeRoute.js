const express = require('express');
const {getAnime,getAnimes,createAnime} = require("../controllers/AnimeController")
const router = express.Router();

router
    .get("/",getAnimes)
    .get("/:animeId",getAnime)
    .post("/",createAnime)
    
    
    
  

module.exports = router;