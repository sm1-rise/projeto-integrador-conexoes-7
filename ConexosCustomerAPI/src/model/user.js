const sequelize = require ("sequelize");
const db = require("../config/database.js");

const User = db.define(
    "User",{
        id:{
            type: sequelize.INTEGER.UNSIGNED,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        nome:{
            type: sequelize.STRING(35),
            allowNull: false
        },
        codigoAcesso:{
            type:sequelize.STRING(35),
            allowNull: false,
        },
        senha:{
            type:sequelize.STRING(100),
            allowNull: false,
        }
    },
    {
        tableName: "user"
    }
);

User.sync()
    .then(() => {
        console.log("Tabela 'user' criada com sucesso.");
    })
    .catch((error) => {
        console.error("Erro ao criar a tabela 'user':", error);
    });

module.exports = User;