const express = require("express");
const {
  getAnime,
  getAnimes,
  createAnime,
  updateAnime,
  deleteAnime,
  getUser,
  getAnimeEdit,
  likeAddAnime,
} = require("../controllers/AnimeController");
const router = express.Router();

const { userSecureRoute } = require("../controllers/userController");
const fileParser = require("./../configs/cloudinary.config")



router
  .get("/animes", getAnimes)
  .get("/animes/userprofile", userSecureRoute, getUser)
  .get("/animes/:animeId", userSecureRoute, getAnime)
  .get("/animes/:animeId/editview", getAnimeEdit)
  .post("/animes/:animeId/rate", likeAddAnime)
  .post("/animes/", fileParser.single("image"), userSecureRoute, createAnime)
  .post("/animes/:animeId",fileParser.single("image"), updateAnime)
  .post("/animes/:animeId/delete", deleteAnime)

module.exports = router;




