import { useContext, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Farma from "../../imagenes/farma.jpg";
import { Context } from "../../Context/Context";
import ItemCount from "../ItemCount";
import "./itemDetail.css";

function ItemDetail({ products }) {
  const { onAdd } = useContext(Context);
  const [added, setAdded] = useState(0);

  function onAddProduct(count) {
    setAdded(count);
    
    onAdd(products, count);
  }

  return (
    <Container>
      <div className="item-detail-container">
        <div>
          <img src={Farma} alt="Product imagen" />
        </div>
        <div className="product-information">
          <h1>{products.title}</h1>
          <p>{products.description}</p>
          <span className="product-price">Price: ${products.precio}</span>
          <span className="product-stock">Stock: {products.stock}</span>

          <div>
            {added == 0 && (
              <ItemCount stock={products.stock} onAdd={onAddProduct} />
            )}
            <div className="ctas-container">
              {added >= 1 && (
                <Link to="/cart">
                  <Button>Terminar compra</Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default ItemDetail;