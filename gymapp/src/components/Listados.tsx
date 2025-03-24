import { Container } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";

export const Listados = () => {
  return (
    <Container fluid="md">
      <ListGroup>
      <ListGroup.Item className="text-center" fluid="md">Rutina</ListGroup.Item>
      <br></br>
      <ListGroup.Item action variant="secondary" className="text-center" >
        Dia uno
      </ListGroup.Item>
      <ListGroup.Item action variant="secondary"  className="text-center">
        Dia dos
      </ListGroup.Item>
      <ListGroup.Item action variant="secondary"  className="text-center">
        Dia tres
      </ListGroup.Item>
      <ListGroup.Item action variant="secondary"  className="text-center">
        Dia cuatro
      </ListGroup.Item>
      <ListGroup.Item action variant="secondary"  className="text-center">
        Dia cinco
      </ListGroup.Item>
      <br></br>
    </ListGroup>
    </Container>
    
  );
};
