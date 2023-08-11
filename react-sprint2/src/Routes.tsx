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
            path: "/services",
            element: <Services />
        },
        {
            path: "/detailsService",
            element: <ServicoDetalhe />
        },
        {
            path: "/relatorios",
            element: <Relatorio />
        },
        {
            path: '/testes',
            element: <Teste />
        }
    ]);

    return <RouterProvider router={routes} />;
}