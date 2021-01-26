const express = require("express");
const {
  getAnime,
  getAnimes,
  createAnime,
  updateAnime,
  deleteAnime,
  getUser,
  getAnimeEdit,
  rateButton,
} = require("../controllers/AnimeController");
const router = express.Router();

const { userSecureRoute } = require("../controllers/userController");
const fileParser = require("./../configs/cloudinary.config")



router
  .get("/animes", getAnimes)
  .get("/animes/userprofile", userSecureRoute, getUser)
  .get("/animes/:animeId", userSecureRoute, getAnime)
  .get("/animes/:animeId/editview", getAnimeEdit)
  .post("/animes/", fileParser.single("image"), userSecureRoute, createAnime)
  .post("/animes/:animeId",fileParser.single("image"), updateAnime)
  .delete("/animes/:animeId", deleteAnime)
  .get("/animes/rate/:animeId", rateButton)

module.exports = router;




