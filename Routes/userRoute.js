const express = require("express");
const { registerController } = require("../Controllers/userCTRL");

//router object

const route = express.Router();

// // login route post
// route.post("/login", loginController);

// Registraion route post

route.post("/Register", registerController);

module.exports = route;
