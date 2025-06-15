const { UserModel } = require("../models/UserModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcrypt");

module.exports.Signup = async (req, res, next) => {
  try {
    const { email, password, username, createdAt } = req.body;
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }
    // const user = await User.create({  });
    const user = await new UserModel({ email, password, username, createdAt });
    user.save();
    const token = await createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: true,
      sameSite: "lax",
      secure: false,
    });
    res
      .status(201)
      .json({ message: "User signed in successfully", success: true, user });
    next();
  } catch (error) {
    console.error(error);
  }
};

module.exports.Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.json({ message: "Email & password are required !" });
    }

    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.json({ message: "Email or password is incorrect !" });
    }

    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res.json({ message: "Incorrect password or email" });
    }
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: true,
      sameSite: "none",
      secure: true, // requires HTTPS, even on localhost
    });
    res
      .status(201)
      .json({ message: "User logged in successfully", success: true });
    next();
  } catch (error) {
    console.log(error);
  }
};
