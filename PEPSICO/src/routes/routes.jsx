import {createBrowserRouter} from "react-router-dom";
import AcercaDe from "../acercade";
import App from "../App";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <App/>
    },
    {
        path: "/acercade",
        element: <AcercaDe/>
    },
    {
        path:"*",
        element: <h1>Error, no encontramos la página</h1>
    }
])