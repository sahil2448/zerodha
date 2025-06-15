const { model } = require("mongoose");

const { userSchema } = require("../Schemas/UserSchema");

const UserModel = new model("User", userSchema);

module.exports = { UserModel };
