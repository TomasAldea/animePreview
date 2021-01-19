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
  .get("/", userSecureRoute, getAnimes)
  .get("/userprofile", userSecureRoute, getUser)
  .get("/:animeId", userSecureRoute, getAnime)
  .post("/", fileParser.single("image"), userSecureRoute, createAnime)
  .patch("/:animeId",fileParser.single("image"), updateAnime)
  .delete("/:animeId", deleteAnime);

module.exports = router;



