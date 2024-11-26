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
    console.log("user loged: ", user.user_id);
    res.status(200).json(user.user_id);
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

async function userAccountInfo(req, res) {
  try {
    const { userId } = req.body;

    const getUser = await userModel.getUserById(userId);
    // console.log(getUser);

    return res.status(200).json(getUser);
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Failed to get account information!" });
  }
}
async function editAccount(req, res) {
  try {
    const { userInfo } = req.body;
    console.log("edit user", userInfo);

    const editSuccess = userModel.editUserAccount(
      userInfo.company,
      userInfo.email,
      userInfo.fullname,
      userInfo.phone
    );

    if (editSuccess) {
      res.status(200).json({ succes: true, message: "Edited successfully!" });
    }
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Failed to edit account information!" });
  }
}

module.exports = { loginUser, registerUser, userAccountInfo, editAccount };
