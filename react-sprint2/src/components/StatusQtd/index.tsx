import axios from "axios";
import {useEffect, useState } from "react";
import { Quadrado } from "./style";

interface StatusQtdProps{
  statusDesejado: string;
}

interface Order {
  status: string;
}

export default function StatusQtd ({statusDesejado}:StatusQtdProps){

  const [order, setOrder] = useState<Order[]>([]);

  useEffect(()=>{
    axios.get('http://localhost:3000/order')
    .then(response =>{setOrder(response.data)
    })
    .catch(error =>{console.log("Erro ao buscar os pedidos: ", error)
  });  
  },[]);

  
  const quantityStatus =order.filter(order => order.status === statusDesejado).length;

  return (
    <>
    <Quadrado>
          <h2>{statusDesejado}</h2>
          <p>{quantityStatus}</p>
    </Quadrado>
     
    </>
  )
}