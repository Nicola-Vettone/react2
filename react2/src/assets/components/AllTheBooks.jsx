import { Button, Card } from "react-bootstrap";
import fantasy from "../books/fantasy.json";
import { Component } from "react";

class Libri extends Component {
  state = {
    cover: null,
  };
  render() {
    return (
      <div className="d-flex flex-wrap justify-content-between">
        {fantasy.map((libro) => (
          <Card style={{ width: "18rem", margin: "10px" }} key={libro.asin}>
            <Card.Img variant="top" src={libro.img} alt={libro.title} />
            <Card.Body>
              <Card.Title>{libro.title}</Card.Title>
              <Card.Text>Categoria : {libro.category}€</Card.Text>
              <Card.Text>{libro.price}€</Card.Text>
              <Button variant="primary" className="btn-success">
                Acquista
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    );
  }
}
export default Libri;
