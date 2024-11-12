const bcrypt = require("bcryptjs");
const userModel = require("../models/userModels");
//const session = require("express-session");

async function loginUser(req, res) {
  try {
    const { email, password } = req.body;

    const results = await userModel.getUserByEmail(email);

    if (results.length === 0) {
      return res
        .status(400)
        .json({ success: false, message: "Email doesn't exist!" });
    }

    const user = results[0];

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res
        .status(400)
        .json({ success: false, message: "Wrong password!" });
    }
    req.session.user = user;
    res.status(200).json({ success: true, message: "Sin in successfully!" });
  } catch (err) {
    res.status(400).json({ succes: false, message: "Error during login!" });
  }
}

async function registerUser(req, res) {
  try {
    const { name, email, password } = req.body;

    const getEmail = await userModel.getUserByEmail(email);

    //check email existed
    if (getEmail.length !== 0) {
      return res
        .status(400)
        .json({ success: false, message: "Email already exist!" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    try {
      const results = await userModel.addNewUser([name, email, hashedPassword]);

      return res
        .status(200)
        .json({ success: true, message: "Create new user successfully!" });
    } catch (error) {
      return res.status(500).json("Fail to create new user!");
    }
  } catch (err) {
    res
      .json(500)
      .json({ succes: false, message: "Failed to check email existed!" });
  }
}

// function logoutUser(req, res) {
//   req.session.destroy((err) => {
//     if (err) {
//       return res
//         .status(500)
//         .json({ success: false, message: "Failed to log out!" });
//     }
//     res
//       .status(200)
//       .json({ success: true, message: "Logged out successfully!" });
//   });
// }
module.exports = { loginUser, registerUser };
