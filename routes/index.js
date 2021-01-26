const express = require('express');
const router = express.Router();


const {
    logout,
    signupView,
    indexView,
    loginView,
    signup,
    checkCredentials,
    login,

} = require("../controllers/userController");


router
    .get("/", indexView)
    .get("/signup", signupView)
    .get("/logIn",loginView)
    .post("/signup", checkCredentials, signup)
    .post("/login", login)
    .get("/logout", logout)

  

module.exports = router;
