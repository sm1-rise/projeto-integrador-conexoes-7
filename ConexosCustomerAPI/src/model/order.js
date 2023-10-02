const sequelize = require ("sequelize");
const db = require("../config/database.js");

const Order = db.define(
    "Order",{
        id:{
            type: sequelize.INTEGER.UNSIGNED,
            primaryKey:true,
            autoIncrement:true,
            allowNull: false,
        },
        nome:{
            type: sequelize.STRING(255),
            allowNull: false,
        },
        cpf:{
            type:sequelize.STRING(20),
            allowNull:false,
            unique:true 
        },
        telefone:{
            type: sequelize.STRING(20),
            allowNull:false,
        },
        plano:{
            type:sequelize.STRING(100),
            allowNull:false,
        },
        email:{
            type: sequelize.STRING(100),
            allowNull: false
        },
        horario:{
            type:sequelize.STRING(100),
            allowNull:false,
        },
        status:{
            type:sequelize.STRING(100),
            allowNull:false,
        },
    },
    {
        tableName:"order",
    }
);

Order.sync()
    .then(() => {
        console.log("Tabela 'order' criada com sucesso.");
    })
    .catch((error) => {
        console.error("Erro ao criar a tabela 'order':", error);
    });

module.exports = Order;