const express = require("express");
const {
  getAnime,
  getAnimes,
  createAnime,
  updateAnime,
  deleteAnime,
  getUser,
} = require("../controllers/AnimeController");
const router = express.Router();

const { userSecureRoute } = require("../controllers/userController");
const fileParser = require("./../configs/cloudinary.config")



router
  .get("/animes", getAnimes)
  .get("/animes/userprofile", userSecureRoute, getUser)
  .get("/animes/:animeId", userSecureRoute, getAnime)
  .post("/animes/", fileParser.single("image"), userSecureRoute, createAnime)
  .patch("/animes/:animeId",fileParser.single("image"), updateAnime)
  .delete("/animes/:animeId", deleteAnime)

module.exports = router;




