import { Container } from "react-bootstrap";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetail";

function ItemRoot() {
  return (
    <div>
     <Container>
     <ItemDetailContainer/>
     </Container>
      
    </div>
  );
}

export default ItemRoot;