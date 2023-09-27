
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MyComponent: React.FC = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const apiUrl = 'http://localhost:3000/order/3';
    axios.get(apiUrl)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Erro ao fazer a requisição:', error);
      });
  }, []);

  return (
    <div>
      <h1>Exemplo de Requisição com Axios</h1>
      {data ? (
        <div>
          <h2>Título: {data.nome}</h2>
          <p>Conteúdo: {data.cpf}</p>
        </div>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
};

export default MyComponent;
