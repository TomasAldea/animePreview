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

router
  .get("/", userSecureRoute, getAnimes)
  .get("/userprofile", userSecureRoute, getUser)
  .get("/:animeId", userSecureRoute, getAnime)
  .post("/", userSecureRoute, createAnime)
  .patch("/:animeId", updateAnime)
  .delete("/:animeId", deleteAnime);

module.exports = router;
