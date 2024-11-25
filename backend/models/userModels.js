const db = require("../db");

//login for user
function getUserByEmail(email) {
  console.log(email);
  return new Promise((resolve, reject) => {
    const sql = "SELECT * FROM user WHERE email = ?";
    db.query(sql, email, (err, results) => {
      if (err) {
        return reject(err);
      }
      console.log(results);
      resolve(results);
    });
  });
}

function addNewUser([name, email, hashedPassword]) {
  return new Promise((resolve, reject) => {
    const sql =
      "INSERT INTO user(full_name ,email ,password, role_id, deleted) value (?,?,?,3,0)";
    db.query(sql, [name, email, hashedPassword], (err, results) => {
      if (err) {
        return reject(err);
      } else {
        resolve(results);
      }
    });
  });
}

module.exports = { getUserByEmail, addNewUser };
