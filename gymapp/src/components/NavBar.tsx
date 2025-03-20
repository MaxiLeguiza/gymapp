import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export const NavBar = () => {
  return (
    
    <Navbar className="bg-body-tertiary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Nombre de GYM</Navbar.Brand>
        <Navbar.Toggle />
      {/** <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login"> Usuario </a>
          </Navbar.Text>
        </Navbar.Collapse> */} 
      </Container>
    </Navbar>
  );
}
