const express = require ("express");
const router = require("./src/routes/router.js");
const { Model } = require("sequelize");
const app = express();

app.use(express.json());
app.use(router);

module.exports = app;