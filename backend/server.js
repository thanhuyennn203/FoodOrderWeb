const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  return res.json("From backend side");
});

//connect to database
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "food",
});

//get category list
app.get("/category", (req, res) => {
  const sql = "SELECT * from category";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

// get product list
app.get("/product", (req, res) => {
  const sql = "SELECT * from product";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

//get user from database
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const checkEmail = "SELECT * from user where email=?";
  db.query(checkEmail, [email], (err, results) => {
    if (err) return res.json(err);

    if (results.length === 0) {
      return res
        .status(400)
        .json({ success: false, message: "Email doesn't exist!" });
    }

    const user = results[0];

    //check password
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) {
        return res
          .status(500)
          .json({ success: false, message: "Failed to check password!" });
      }

      if (!isMatch) {
        return res
          .status(400)
          .json({ success: false, message: "Wrong password!" });
      }

      // password is correct
      res.status(200).json({ success: true, message: "Sign in successfully!" });
    });
  });
});

//Assign new user account
app.post("/register", (req, res) => {
  const { name, email, password } = req.body;

  const checkEmailExist = "SELECT * FROM user where email = ?";
  db.query(checkEmailExist, [email], (err, results) => {
    if (err) {
      return res
        .status(500)
        .json({ success: false, message: "Failed to conect to the database!" });
    }

    //check email existed
    if (results.length !== 0) {
      return res
        .status(400)
        .json({ success: false, message: "Email already exist!" });
    }

    bcrypt.hash(password, 10, (err, hashedPassword) => {
      if (err) {
        return res
          .status(500)
          .json({ success: false, message: "Fail to hash the password!" });
      }

      const sql =
        "INSERT INTO user(full_name ,email ,password, role_id, deleted) value (?,?,?,3,0)";

      db.query(sql, [name, email, hashedPassword], (err, result) => {
        if (err) {
          return res
            .status(500)
            .json({ success: false, message: "Lỗi khi lưu vào cơ sở dữ liệu" });
        }
        res.status(200).json({ success: true, message: "Đăng ký thành công" });
      });
    });
  });
});

app.listen(8801, () => {
  console.log("listening");
});
