const { Signup, Login } = require("../Controllers/AuthController");
const { userVerification } = require("../Middlewares/Authmiddleware");
const express = require("express");
const router = express.Router();

router.post("/signup", Signup);
router.post("/login", Login);
router.post("/", userVerification);
module.exports = router;
