const express = require('express');
const router = express.Router();


const {createAnimeView } = require("../controllers/AnimeController")

router
    .get("/create", createAnimeView)
    
  

module.exports = router;