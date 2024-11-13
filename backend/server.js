const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const app = express();
const userRoutes = require("./routes/userRoutes.js");
const productRoutes = require("./routes/productRoutes.js");

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
