import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Nav";

export const SubNavBar = () => {
  return (
    <Navbar
      variant="underline"
      defaultActiveKey="/home"
      className="bg-body-tertiary"
      data-bs-theme="dark"
    >
      <Container>
        <Navbar.Item>
          <Navbar.Link href="/home">Turno</Navbar.Link>
        </Navbar.Item>
        <Navbar.Item>
          <Navbar.Link eventKey="link-1">Rutina</Navbar.Link>
        </Navbar.Item>
        <Navbar.Item>
          <Navbar.Link eventKey="link-2">Tienda</Navbar.Link>
        </Navbar.Item>
      </Container>
    </Navbar>
  );
};
