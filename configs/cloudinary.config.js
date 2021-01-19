require("dotenv").config();
const cloudinary = require("cloudinary").v2;
const {CloudinaryStorage} = require("multer-storage-cloudinary");
const multer = require("multer");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});
/*
const storage = cloudinaryStorage({
  cloudinary:cloudinary,
  folder: "AnimeReview",
  allowedFormats: ["jpg", "png", "jpeg", "gif"],
  transformation: [{ width: 800, heigth: 500, crop: "limit" }],
});
*/

const storage = new CloudinaryStorage({
  cloudinary,
    folder: 'AnimeReview',
    allowedFormats: ['jpg', 'png'],
    transformation: [{ width: 800, heigth: 500, crop: "limit" }],
    filename: function (req, file, cb) {
      cb(null, file.originalname); // The file on cloudinary would have the same name as the original file name
    }
  
});


const fileParser = multer({storage})

module.exports = fileParser
