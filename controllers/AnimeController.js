const express = require("express");
const router = express.Router();
const Animes = require("../models/Anime.model");
const { Error } = require("mongoose");

//----------------render anime create form page----------------------//
const createAnimeView = (req, res) => {  
    res.render("animecreate")
  }



  
  module.exports = { 
    createAnimeView,
    
 };