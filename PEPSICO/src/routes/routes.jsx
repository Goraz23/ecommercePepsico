import {createBrowserRouter} from "react-router-dom";
import NuevosLanzamientos from "../NuevosLanzamientos";
import NuestrasMarcas from "../pages/NuestrasMarcas";
import Ofertas from "../pages/Ofertas";
import Bebidas from "../pages/Bebidas";
import Alimentos from "../pages/Alimentos";
import App from "../App";
import Navbar from "../components/Navbar";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Navbar/>,
        children: [
            {            
                path:"/",
                element:<App/>
            },
            {
                path: "/NuevosLanzamientos",
                element: <NuevosLanzamientos/>
            },
            {
                path:"/NuestrasMarcas",
                element: <NuestrasMarcas/>
            },
            {
                path:"/Ofertas",
                element:<Ofertas/>
            },
            {
                path:"/Bebidas",
                element:<Bebidas/>
            },
            {
                path:"/Alimentos",
                elements: <Alimentos/>
            },
        ]
    },
    {
        path:"*",
        element: <h1>Error, no encontramos la página</h1>
    }
])