const bcrypt = require("bcryptjs");
const NewUser = require("../models/User.model");
const { Error } = require("mongoose");


//--- vista temporal para testear ruta segura ---//
const secureView = (req, res) => { 
  res.render("securetest")
}
//-----------------render loging form page ---------------------//
const loginView = (req, res) => { 
  res.render("logIn")
}
//-----------------render gignup form page ---------------------//
const signupView = (req, res) => { 
  res.render("signup")
}
//-----------------render home page---------------------//
const indexView = (req, res) => {  
  res.render("home")
}


//---Mongoose error = { code 11000, message: "email is not unique"}--//
const isMongooseValidationError = (error) => 
error instanceof Error.ValidationError;

const isMongoError = ({ code: errorCode }) => errorCode === 11000;

//---funtion to check correct formas password---//
//min 6 caracteres + un mayus + un numero + minimo una minuscula
const hasCorrectPasswordFormat = password => {
  const passwordRegex = new RegExp(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/);
  return passwordRegex.test(password);
}

//---post check: missing credentials?---//
const checkCredentials = (req, res, next) => {  
  const { password, username, email } = req.body;
  const hasMissingCredential = !username || !password || !email;
  if (hasMissingCredential) {
    return res.send("credentials missing");
  }
  next();
};
//---Signup new user---//

const signup = async (req, res) => {
  try {
    const { password, username, email } = req.body;
    const isAlreadyUser = await NewUser.findOne({ email });
    
    if (isAlreadyUser) {
      return res.send("user already exists");
    }
    if(!hasCorrectPasswordFormat(password)){
      return res.send("incorrect password format")
    }

    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashPassword = await bcrypt.hash(password, salt);
    const user2 = await NewUser.create({ username, email, passwordHash: hashPassword })
    console.log("user", user2);

   // req.session.currentUser = user._id // para persitir la sesion (falta revisar)
    res.send("user created successful");

  } catch (err) {
   if (isMongooseValidationError(err)) {
   //  return res.send("validarion error", err.message)
   }
   if(isMongoError(err)) {
     return res.send("mongo error" + err.message)
   }
   console.error(err);
  }
};

//---Login user---//

const login = async (req, res) => {
  try {
    const { password, email } = req.body;
    const user = await NewUser.findOne({ email });
    if (!user) {
      return res.send("user does not exist");
    }
    const verifyPassword = await bcrypt.compare(password, user.passwordHash); // comparamos password con hash password de la data base
    if (!verifyPassword) {
      return res.send("wrong credentials");
    }
    req.session.currentUser = user // persistimos la sesion
    console.log("login success")
    return res.redirect("/animes");
  } catch (err) {
    console.log(err);
  }
};

//---secure route middleware---//

const userSecureRoute = (req, res, next) => {  
  const isUser = req.session.currentUser 
  if (!isUser) {
    console.log("login first to see this page")
    
    return res.redirect("/login")

   // res.send("create acc first");
  }
  next();
};

//---logout end session---//

const logout = (req, res, next) => {
  console.log("log out success")
  req.session.destroy();
  res.redirect("/")
};


module.exports = { 
    signupView,
    indexView,
    loginView,
    signup,
    checkCredentials,
    login,
    secureView,
    userSecureRoute,
    logout,
   };