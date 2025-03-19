import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

export const SubNavBar = () => {
  return (
    <Container className="bg-body-tertiary" data-bs-theme="dark">
      <Nav variant="underline" defaultActiveKey="/home" className="justify-content-center">
        <Nav.Item>
          <Nav.Link href="/home">Turno</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Rutina</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" >Tienda</Nav.Link>
        </Nav.Item>
      </Nav>
    </Container>
  );
};
