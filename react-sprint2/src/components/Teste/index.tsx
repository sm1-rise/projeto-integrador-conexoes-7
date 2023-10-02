import axios from "axios";
import { useEffect, useState } from "react";


export default function TesteConsumoApi(){
    const [order, setOrder] = useState <any>([]);

    useEffect(()=>{
        axios.get("http://localhost:3000/order/7")
        .then((response) =>{setOrder(response.data)
        }).catch(error =>{console.log("Não foi possivel consumir a api", error)
    });
    },[])

    return <>
        <div>
            
                <div> 
                    <p>{order.id}</p>
                    <p>{order.nome}</p>
                     <p>{order.status}</p>
                </div>
               
        </div>
    </>


}

