const express = require('express');
const router = express.Router();


const {
    signupView,
    indexView,
    createAnimeView,
    signup,
    checkCredentials,
} = require("../controllers/userController");


router
    .get("/", indexView)
    .get("/signup", signupView)
    .get("/create", createAnimeView)
    .post("/signup", checkCredentials, signup)
  

module.exports = router;
