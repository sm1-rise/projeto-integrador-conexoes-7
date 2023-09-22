import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Services from "./pages/Services"
import ServicoDetalhe from "./pages/ServicoDetalhe";
import Relatorio from "./pages/Relatorio";
import Teste from "./pages/Testes";

export default function Routes() {
    const routes = createBrowserRouter([
        {
            path: "/",
            element: <Login />,
        },
        {
            path: "/servicos",
            element: <Services />
        },
        {
            path: "/detalhesServicos",
            element: <ServicoDetalhe />
        },
        {
            path: "/relatorios",
            element: <Relatorio />
        },


        {
            path: "/teste",
            element: <Teste/>

        },
        
    ]);

    return <RouterProvider router={routes} />;
}