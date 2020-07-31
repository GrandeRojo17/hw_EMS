//decided to set up the connection query with async await instead of call backs.
//UTIL Takes a function following the common error-first callback style, i.e. taking a (err, value) => ... callback as the last argument
//returns a version that returns promises.
const util = require('util');
var mysql = require("mysql");//set the file up to work with mysql.
const connection = mysql.createConnection({
    host: "localhost", port: 3356, user: "root", password: "password", database: "employeetracker_db"
});
connection.connect();
connection.query = util.promisify(connection.query);
module.exports = connection;
