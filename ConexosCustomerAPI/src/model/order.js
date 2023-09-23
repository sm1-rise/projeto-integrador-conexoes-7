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
            type:sequelize.STRING(11),
            allowNull:false,
            unique:true 
        },
        cpf:{
            type:sequelize.STRING(255),
            allowNull:false,
        },
        telefone:{
            type: sequelize.STRING(20),
            allowNull:false,
        },
        servico_escolhido:{
            type:sequelize.STRING(100),
            allowNull:false,
        },
        preferencia_horario:{
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