const app = require("./app.js")
const dotenv = require("dotenv");
const db = require("./src/config/database.js");

dotenv.config();

const PORT = process.env.PORT || 3333;

db.hasConection();
// app.listen(3000, () =>console.log(`Connected in ${PORT}`));