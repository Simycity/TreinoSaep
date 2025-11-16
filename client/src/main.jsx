import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// Import do provedor de rotas, do react-router
import { RouterProvider } from "react-router-dom";

// Importando MyRouter para definição de rotas
import MyRouter from "./MyRouter.jsx";

// Importando Bootstrap
// import "bootstrap/dist/css/bootstrap.min.css"

// Importando o provedor do contexto de usuário
import { AuthProvider } from "./contexts/UserContext.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Fornece as informações de contexto pra toda a aplicação */}
    <AuthProvider>
      {/* Faz o provedor utilizar as rotas definidas no MyRouter */}
      <RouterProvider router={MyRouter} />
    </AuthProvider>
  </StrictMode>
);
