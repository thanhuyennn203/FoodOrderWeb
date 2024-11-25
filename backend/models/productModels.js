const db = require("../db");

function getAllProducts() {
  return new Promise((resolve, reject) => {
    const sql = "SELECT * from product";
    db.query(sql, (err, data) => {
      if (err) {
        return reject(err);
      }
      resolve(data);
    });
  });
}

function getAllMenuList() {
  return new Promise((resolve, reject) => {
    const sql = "SELECT * FROM category";
    db.query(sql, (err, results) => {
      if (err) return reject(err);
      resolve(results);
    });
  });
}

module.exports = { getAllProducts, getAllMenuList };
