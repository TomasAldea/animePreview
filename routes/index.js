const express = require('express');
const router = express.Router();


const {
    signupView,
    indexView,
    loginView,
    signup,
    checkCredentials,
} = require("../controllers/userController");


router
    .get("/", indexView)
    .get("/signup", signupView)
    .get("/logIn",loginView)
    .post("/signup", checkCredentials, signup)
  

module.exports = router;
