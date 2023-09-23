const Order = require("../model/order.js");

const orderController ={

    getAll:async (req, res)=>{
        try {
            const getAllOrder = await Order.findAll();
            if (getAllOrder === 0) return res.json({messege:'Não há pedidos'})
            res.status(200).json(getAllOrder);
        }catch(error){
            console.log(error)
            res.status(500).json({messege:'Erro interno'});
        }
    },

    getById:async(req, res) =>{
        try{
            const id = req.params.id;
            const order = await Order.findByPk(id);
            if(!order){
                return res.status(404).json({messege:'Pedido não encontrado'});
            } 
            res.json({order, message:"Pedido encontrado com sucesso"});
        }catch(error){
            console.log(error)
            res.status(500).json({messege:'Erro interno'});
        }
    },

    createOrder:async(req,res)=>{
        try{
            const {nome, cpf, telefone,servico_escolhido, preferencia_horario} = req.body;
            const newOrder = await Order.create({
                nome,
                cpf,
                telefone,
                servico_escolhido,
                preferencia_horario,
            });
            res.status(201).json({newOrder,  messege:"Pedido criado com sucesso"});
        }catch(error){
            console.log(error)
            res.status(500).json({messege:'Erro interno'});
        }
    },

    updateOrder:async(req,res) =>{
        try{
            const {id} = req.params;
            const {nome, cpf, telefone,servico_escolhido, preferencia_horario} = req.body;
            const [updateOrder] = await Order.update({
                nome,
                cpf,
                telefone,
                servico_escolhido,
                preferencia_horario,
            },
            {
                where:{id},
            });
            if (updateOrder === 0) return res.status(404).json({messege: 'Pedido não encontrado'});
            
            res.json("Pedido atualizado com sucesso!");

        }catch(error){
            console.log(error)
            res.status(500).json({messege:'Erro interno'});
        }
    },

    deleteOrder:async(req,res) =>{
        try{
            const {id} = req.params;
            const deleteOrder = await Order.destroy({where:{id}});
            
            if (deleteOrder === 0) return res.status(404).json({messege: 'Pedido nao encontrado'});
            
            res.status(204).json({ message: 'Pedido excluído com sucesso' });

        }catch(error){
            console.log(error)
            res.status(500).json({messege:'Erro interno'});
        }
    },
}

module.exports = orderController;
