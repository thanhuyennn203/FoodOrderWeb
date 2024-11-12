const express = require("express");
const router = express.Router();
const userController = require("../controllers/userControllers.js");

router.post("/login", userController.loginUser);
router.post("/register", userController.registerUser);

// route yêu cầu xác thực (để truy cập vào profile)
// router.get('/profile', isAuthenticated, (req, res) => {
//     res.render('profile', { user: req.session.user }); // Truyền thông tin người dùng vào view
//   });
module.exports = router;
