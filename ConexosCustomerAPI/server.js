const app = require("./app.js")
const dotenv = require("dotenv");
const db = require("./src/config/database.js");

dotenv.config();
const portExpress = 3000;
const PORT = process.env.PORT || 3333;

db.hasConection();
app.listen(portExpress, () =>console.log(`Localhost in: ${portExpress} and Database connected in ${PORT}`));