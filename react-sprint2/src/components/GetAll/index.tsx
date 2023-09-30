import axios from "axios";
import { useState, useEffect } from "react";

interface Order {
    id: number;
    nome: string;
    cpf: string;
    telefone: string;
    servico_escolhido: string;
    preferencia_horario: string;
    updatedAt: Date;
    status: string;
}

export default function GetAll() {

    const [order, setOrder] = useState<Order[]>([]);
    useEffect(() => {
        axios.get('http://localhost:3000/order')
            .then(response => {
                setOrder(response.data);
                return response.data
            })
            .catch(error => {
                console.error('Erro ao buscar os pedidos:', error);
            });
    }, []);
}
