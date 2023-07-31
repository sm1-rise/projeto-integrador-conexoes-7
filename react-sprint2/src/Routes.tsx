import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Services from "./pages/Services"

export default function Routes() {
    const routes = createBrowserRouter([
        {
            path: "/",
            element: <Login />,
        },
        {
            path: "/services",
            element: <Services />
        }
    ]);

    return <RouterProvider router={routes} />;
}