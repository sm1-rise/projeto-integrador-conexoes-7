const app = require("./app")
const dotenv = require("dotenv");
const db = require("./config/database.js");

dotenv.config();
const portExpress = 3000;
const PORT = process.env.PORT || 3333;

db.hasConection();
app.listen(portExpress, () =>console.log(`Localhost in: ${portExpress} and Database connected in ${PORT}`));