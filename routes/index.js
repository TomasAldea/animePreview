const express = require('express');
const router = express.Router();


const {
    logout,
    userSecureRoute,
    signupView,
    indexView,
    loginView,
    signup,
    checkCredentials,
    login,
    secureView, // vista temporal para testear ruta segura
} = require("../controllers/userController");


router
    .get("/", indexView)
    .get("/signup", signupView)
    .get("/logIn",loginView)
    .post("/signup", checkCredentials, signup)
    .post("/login", login)
    .get("/logout", logout)
//animeF
  

module.exports = router;
