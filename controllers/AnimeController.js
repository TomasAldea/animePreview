const Animes = require("../models/Anime.model");
const { userSecureRoute } = require("./userController");
const User = require("../models/User.model");

const deleteFormOptions = (animeId) => ({
  action: `/animes/${animeId}`,
  btnText: "delete anime",
  method: "POST",
  restMethod: "DELETE",
});

function animeDeleteOptions(oneAnime) {
  const deleteOptions = deleteFormOptions(oneAnime._id);
  return {
    ...oneAnime,
    ...deleteOptions,
  };
}

const getAnimes = async (req, res) => {
  try {
    const anime = await Animes.find().lean();
    const animesDeleted = anime.map(animeDeleteOptions);
  
    res.render("animes", { anime: animesDeleted });
  } catch (err) {
    console.log(err);
  }
};

const editFormOptions = (animeId) => ({
  action: `/animes/${animeId}`,
  btnText: "edit anime",
  method: "POST",
  restMethod: "PATCH",
});

const getAnime = async (req, res) => {
  try {
    const { animeId } = req.params;
    const oneAnime = await Animes.findById(animeId).lean();
    res.render("anime-detail", { ...oneAnime, ...editFormOptions(animeId) });
  } catch (err) {
    console.log(err);
  }
};

const createAnime = async (req, res) => {
  console.log("SESSION:", req.session.currentUser._id)
  try {
    const { name, category, rate, description } = req.body;
    const anime = await Animes.create({
      name,
      category,
      rate,
      description,
      owner: req.session.currentUser._id,
    });
    await User.findByIdAndUpdate(req.session.currentUser._id, {
      $push: { createAnime: anime._id },
    });

    res.redirect("/animes");
  } catch (err) {
    console.log(err);
  }
};

const updateAnime = async (req, res) => {
  try {
    const { animeId } = req.params;
    const { name, category, rate, description } = req.body;
    const updatedCelebrity = await Animes.findByIdAndUpdate(animeId, {
      name,
      category,
      rate,
      description,
    });
    res.redirect(`/animes/${animeId}`);
  } catch (err) {
    console.log(err);
  }
};

const deleteAnime = async (req, res) => {
  try {
    const { animeId } = req.params;
    const deletedanime = await Animes.findByIdAndDelete(animeId);
    console.log("deleted anime", deletedanime);
    res.redirect("/animes");
  } catch (err) {
    console.log(err);
  }
};

const getUser = async (req, res) => {
  try {
    const oneUser = await User.findById(req.session.currentUser._id)
    .populate("createAnime").lean();
    console.log("User prueba" , oneUser)
    res.render("userprofile", {oneUser});
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getAnimes,
  getAnime,
  createAnime,
  updateAnime,
  deleteAnime,
  getUser,
};
