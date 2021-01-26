const Animes = require("../models/Anime.model");
const { userSecureRoute } = require("./userController");
const User = require("../models/User.model");
const fileParser = require("./../configs/cloudinary.config")


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
    const anime = await Animes.find().lean().populate("owner")
    const animesDeleted = anime.map(animeDeleteOptions);
    
  
    res.render("animes", { anime: animesDeleted , class: 'backgroundColor'  });
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
    res.render("anime-detail", { ...oneAnime, ...editFormOptions(animeId) , class: 'backgroundColor' });
    
  } catch (err) {
    console.log(err);
  }
};

const getAnimeEdit = async (req, res) => {
  try {
    const { animeId } = req.params;
    const oneAnime = await Animes.findById(animeId).lean();
    res.render("editview", { ...oneAnime, ...editFormOptions(animeId) , class: 'backgroundColor' });
  } catch (err) {
    console.log(err);
  }
};

const createAnime = async (req, res) => {
  console.log("SESSION:", req.session.currentUser._id)
  try {
    const { name, category, rate, description, trailer } = req.body;
    let imgRequire;
    if (req.file !== undefined) {
      imgRequire = req.file.path
    }
    // https://youtu.be/ZPdMeNFx1TM -> mobile youtube format
    // https://www.youtube.com/watch?v=cN0ZvBL1Ia4 -> desktop youtube format
    // function to change url string
    let url = trailer
    if (url.includes("/watch?v=")) {
      url = url.replace('/watch?v=','/embed/')
    } 
    if (url.includes(".be/")) {
      url = url.replace('.be/','be.com/embed/')
    }
    
    console.log("url replace:", url) 
    const anime = await Animes.create({
      name,
      category,
      rate,
      description,
      trailer: url,
      image: imgRequire,
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
    const { name, category, rate, description, trailer, image } = req.body;
    let animeToUpdate = await Animes.findById(animeId)
    // console.log("existingImg", existingImg)
    let imageUrl;
  if (req.file) {
    imageUrl = req.file.path;
  } else {
    imageUrl = animeToUpdate.image
  }

  // function to change url string
  let url = trailer
  if (url.includes("/watch?v=")) {
    url = url.replace('/watch?v=','/embed/')
  } 
  if (url.includes(".be/")) {
    url = url.replace('.be/','be.com/embed/')
  }

    const updatedAnime = await Animes.findByIdAndUpdate(animeId, {
      name,
      category,
      rate,
      description,
      image: imageUrl,
      trailer: url,
    });
     res.redirect("/animes");
  } catch (err) {
    console.log(err);
  }
};

const deleteAnime = async (req, res) => {
  try {
    const { animeId } = req.params;
    const deletedanime = await Animes.findByIdAndDelete(animeId);
    res.redirect("/animes");
  } catch (err) {
    console.log(err);
  }
};

const getUser = async (req, res) => {
  try {
    const oneUser = await User.findById(req.session.currentUser._id)
    .populate("createAnime").lean();
   
    const animes = oneUser.createAnime.map(animeDeleteOptions);
    res.render("userprofile", {oneUser,  animes , class: 'backgroundColor' } );
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
  getAnimeEdit,
};
