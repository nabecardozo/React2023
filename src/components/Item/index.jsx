import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";



function Item({ products }) {
    return (

      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={products.image} />
      <Card.Body>
        <Card.Title> {products.name} </Card.Title>
        <Card.Text>
          {products.description}
        </Card.Text>
        <Link to={`/Item/${products.id}`}>
        <Button variant="primary">IR AL DETALLE</Button>
        </Link>
      </Card.Body>
    </Card>

    
    );
  }
  
  export default Item;