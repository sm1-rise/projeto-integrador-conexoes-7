import axios from 'axios';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import styled from 'styled-components';

const ChartContainer = styled.div`
    width: 300px;
    height: 300px;
`;

ChartJS.register(ArcElement, Tooltip, Legend);

interface Order {
    plano: string;
}

export default function Chart() {
    
    const [order, setOrder] = useState<Order[]>([]);
    const [planCounts, setPlanCounts] = useState<{ [key: string]: number }>({});

    useEffect(() => {
        axios.get('http://localhost:3000/order')
            .then((response) => {
                setOrder(response.data);
            })
            .catch((error) => {
                console.log("Erro ao buscar os pedidos: ", error);
            });
    }, []);

    useEffect(() => {
        // Processar os dados dos pedidos para contar a quantidade de cada plano
        const counts: { [key: string]: number } = {};

        order.forEach((item) => {
            if (item.plano in counts) {
                counts[item.plano]++;
            } else {
                counts[item.plano] = 1;
            }
        });

        setPlanCounts(counts);
    }, [order]);

    const data = {
        labels: Object.keys(planCounts),
        datasets: [
            {
                label: '# of Votes',
                data: Object.values(planCounts),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <>
            <ChartContainer>
                <Doughnut data={data} />
            </ChartContainer>
        </>
    );
}
