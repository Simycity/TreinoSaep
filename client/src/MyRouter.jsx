import { createBrowserRouter } from "react-router-dom";

// importando as páginas principais
import App from "./App.jsx";
import PaginaErro from "./pages/PaginaErro/PaginaErro.jsx";
import Login from "./pages/Login.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <PaginaErro />,
    children: [
      { index: true, element: <Login /> },
      { path: "login", element: <Login /> },
    ],
  },
]);

export default router;