const express = require('express');
const {getAnime,getAnimes,createAnime} = require("../controllers/AnimeController")
const router = express.Router();

const {
    userSecureRoute,
} = require("../controllers/userController");

router
    .get("/", userSecureRoute, getAnimes)
    .get("/:animeId",getAnime)
    .post("/",createAnime)
    
    
    
  

module.exports = router;