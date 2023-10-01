const User = require ("../model/user.js");

const userController = {
    getAll:async (req, res)=>{
        try {
            const getAllUser = await User.findAll();
            if (getAllUser === 0) return res.json({
                messege:'Não há usuários cadastrado'
            })
            res.status(200).json(getAllUser);
        }catch(error){
            console.log(error)
            res.status(500).json({messege:'Erro interno'});
        }
    },

    getById:async(req, res) =>{
        try{
            const id = req.params.id;
            const user = await User.findByPk(id);
            if(!user){
                return res.status(404).json({
                    messege:'Não há usuários cadastrado'
                });
            } 
            res.status(200).json(user);
        }catch(error){
            console.log(error)
            res.status(500).json({messege:'Erro interno'});
        }
    },

    createUser:async(req,res)=>{
        try{
            const {nome, codigoAcesso, senha} = req.body;
            const newUser = await User.create({
                nome,
                codigoAcesso, 
                senha
            });
            res.status(201).json({newUser,  messege:"Usuário criado com sucesso"});
        }catch(error){
            console.log(error)
            res.status(500).json({messege:'Erro interno'});
        }
    },

    updateUser:async(req,res) =>{
        try{
            const {id} = req.params;
            const {nome, codigoAcesso, senha} = req.body; 
            const [updateUser] = await User.update({
                nome,
                codigoAcesso, 
                senha
            },
            {
                where:{id},
            });
            if (updateUser === 0) return res.status(404).json({messege: 'Usuário não encontrado'});
            
            res.json("Usuário atualizado com sucesso!");

        }catch(error){
            console.log(error)
            res.status(500).json({messege:'Erro interno'});
        }
    },

    deleteUser:async(req,res) =>{
        try{
            const {id} = req.params;
            const deleteUser = await User.destroy({where:{id}});
            
            if (deleteUser === 0) return res.status(404).json({messege: 'Usuário não encontrado'});
            
            res.status(204).json({ message: 'Usuário excluído com sucesso' });

        }catch(error){
            console.log(error)
            res.status(500).json({messege:'Erro interno'});
        }
    },
}

module.exports = userController;