const Sequelize = require("sequelize");
const dotenv = require("dotenv");

dotenv.config();

const connection = Sequelize.createConnection(process.env.DATABASE_URL)

connection.query('show tables', function (err, results, fields) {
  console.log(results) // results contains rows returned by server
  console.log(fields) // fields contains extra metadata about results, if available
})

connection.query('select 1 from dual where ? = ?', [1, 1], function (err, results) {
  console.log(results)
})

connection.end()

Object.assign(connection);

module.exports = connection;

