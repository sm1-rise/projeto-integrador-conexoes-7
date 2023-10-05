const User = require("../model/user.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const userController = {

    createUser: async (req, res) => {
        try {
            const { nome, codigoAcesso, senha } = req.body;

            const oldUser = await User.findOne({
                where: { codigoAcesso: codigoAcesso },
            });

            if (oldUser) {
                return res.status(409).json({
                    error: "Estudante já cadastrado"
                });
            }

            const salt = 10;
            const encryptedUserPassaword = await bcrypt.hash(senha, salt);

            const newUser = await User.create({
                nome,
                codigoAcesso,
                senha: encryptedUserPassaword
            });

            const token = jwt.sign(
                { user_id: newUser.id, codigoAcesso },
                process.env.TOKEN_KEY,
                { expiresIn: "5h" }
            )

            res.cookie("jwt", token);
            res.status(201).json({messege: "Usuário criado com sucesso" });
        } catch (error) {
            console.log(error)
            res.status(500).json({ messege: 'Erro interno' });
        }
    },


    getAll: async (req, res) => {
        try {
            const getAllUser = await User.findAll();
            if (getAllUser === 0) return res.json({
                messege: 'Não há usuários cadastrado'
            })
            res.status(200).json(getAllUser);
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Erro interno' });
        }
    },

    getById: async (req, res) => {
        try {
            const id = req.params.id;
            const user = await User.findByPk(id);
            if (!user) {
                return res.status(404).json({
                    messege: 'Não há usuários cadastrado'
                });
            }
            res.status(200).json(user);
        } catch (error) {
            console.log(error)
            res.status(500).json({ messege: 'Erro interno' });
        }
    },

   
    updateUser: async (req, res) => {
        try {
            const { id } = req.params;
            const { nome, codigoAcesso, senha } = req.body;
            const encryptedUserPassaword = await bcrypt.hash(senha, salt);
            const [updateUser] = await User.update({
                nome,
                codigoAcesso,
                senha: encryptedUserPassaword
            },
                {
                    where: { id },
                });
            if (updateUser === 0) return res.status(404).json({ messege: 'Usuário não encontrado' });

            res.json("Usuário atualizado com sucesso!");

        } catch (error) {
            console.log(error)
            res.status(500).json({ messege: 'Erro interno' });
        }
    },

    deleteUser: async (req, res) => {
        try {
            const { id } = req.params;
            const deleteUser = await User.destroy({ where: { id } });

            if (deleteUser === 0) return res.status(404).json({ messege: 'Usuário não encontrado' });

            res.status(204).json({ message: 'Usuário excluído com sucesso' });

        } catch (error) {
            console.log(error)
            res.status(500).json({ messege: 'Erro interno' });
        }
    },


    login: async (req, res) => {
        try {
            const { codigoAcesso, senha } = req.body;
            const user = await User.findOne({
                where: { codigoAcesso: codigoAcesso }
            });

            if (user && (await bcrypt.compare(senha, user.senha))) {
                const token = jwt.sign(
                    { user_id: user.id, codigoAcesso },
                    process.env.TOKEN_KEY,
                    {
                        expiresIn: "5h",
                    }
                );

                const {senha:_, ...userLogin} = user;
                return res.json({
                    user,
                    token: token,
                })
            }

            else{ res.json({error: "Código de Acesso ou Senha inválidos"}) }

        } catch (error) { res.status(500).json({ messege: "Erro Interno" }) }
    },
}

module.exports = userController;