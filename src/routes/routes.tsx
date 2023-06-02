import { createBrowserRouter } from "react-router-dom";
import Expedientes from "../pages/Expedientes";
import Trabajadores from "../pages/Trabajadores";
import Procesos from "../pages/Procesos";
import Auditorias from "../pages/Auditorias";
import Roles from "../pages/Roles";
import Trazas from "../pages/Trazas";
import Usuarios from "../pages/Usuarios";
import Layout from "../pages/Layout";
import ErrorPage from "../pages/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "usuarios",
        element: <Usuarios />,
      },
      {
        path: "roles",
        element: <Roles />,
      },
      {
        path: "trazas",
        element: <Trazas />,
      },
      {
        path: "auditorias",
        element: <Auditorias />,
      },
      {
        path: "expedientes",
        element: <Expedientes />,
      },
      {
        path: "trabajadores",
        element: <Trabajadores />,
      },
      {
        path: "procesos",
        element: <Procesos />,
      },
    ],
  },  
]);
