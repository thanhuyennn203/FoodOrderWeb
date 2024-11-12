const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const app = express();
const session = require("express-session");
const userRoutes = require("./routes/userRoutes.js");
const productRoutes = require("./routes/productRoutes.js");

app.use(
  session({
    secret: "mySecret", // Dùng để mã hóa session ID
    resave: false, // Không lưu lại session nếu không thay đổi
    saveUninitialized: false, // Không lưu phiên chưa được khởi tạo
    cookie: { secure: false }, // Set to `true` nếu sử dụng HTTPS
  })
);
app.use(cors());
app.use(express.json());

app.use("/api", productRoutes);
app.use("/api", userRoutes);

// app.get('/profile', (req, res) => {
//   if (req.session.user) {
//     res.render('profile', { user: req.session.user });
//   } else {
//     res.redirect('/login');
//   }
// });

app.listen(8801, () => {
  console.log("listening");
});
