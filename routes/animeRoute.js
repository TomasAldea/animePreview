const express = require('express');
const {getAnime,getAnimes,createAnime} = require("../controllers/AnimeController")
const router = express.Router();

const {
    userSecureRoute,
} = require("../controllers/userController");

router
    .get("/", userSecureRoute, getAnimes)
    .get("/:animeId",userSecureRoute, getAnime)
    .post("/",userSecureRoute, createAnime)
    
    
    
  

module.exports = router;