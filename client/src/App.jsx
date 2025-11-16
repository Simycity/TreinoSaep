import "./App.css";

// Importando o Outlet, do rea
import { Outlet } from "react-router-dom";

// Importação do componente do bootstrap
import Container from "react-bootstrap/Container";

function App() {
  return (
    <>
      <div>
        <Container>
          <Outlet />
        </Container>
      </div>
    </>
  );
}

export default App;
