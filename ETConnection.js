var mysql = require("mysql");

var connection = mysql.createConnection({
  // host is the computer "address" for the database server
  host: "localhost",

  // Your port; if not 3306 WE could schangfe this isn the setup if you wish
  port: 3356,

  // Your username
  //gerenarl practice is a bad idea
  user: "root",

  // Your password this is the password set up to our sql server
  password: "password",
  //This is the same thing as schema
  database: "employeeTracke_db",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  afterConnection();
});
function afterConnection() {
  connection.query("SELECT * FROM department", (err, res) => {
    if (err) throw err;
    console.log(res);
    connection.end();
  });
}
