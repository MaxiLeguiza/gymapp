import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar.tsx";
import { SubNavBar } from "./components/SubNavBar.tsx";
import { Listados } from "./components/Listados.tsx";
//Importes para poder organizar el viewport
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Container fluid="bg">
      <Row>
        <Col>
          <NavBar />
        </Col>
      </Row>
      <Row>
        <Col>
        <Listados/>
        </Col>
      </Row>
      <Row>
        <Col>
          <SubNavBar />
        </Col>
      </Row>
    </Container>
  </StrictMode>
);
