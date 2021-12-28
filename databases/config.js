const mysql2 = require("mysql2");
const connection = mysql2.createConnection({
  host: "localhost",
  password: "",
  port: "3306",
  user: "root",
});

module.exports = connection.promise();
