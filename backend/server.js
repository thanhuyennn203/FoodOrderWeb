const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/", (re, res) => {
  return res.json("From backend side");
});

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "food",
});

app.get("/category", (req, res) => {
  const sql = "SELECT * from category";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get("/product", (req, res) => {
  const sql = "SELECT * from product";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.listen(8801, () => {
  console.log("listening");
});
