import Item from "../Item";
import "./ItemList.css";

function ItemList({ products }) {
  return (
    <div className="contenedor-productos">
      <ul className="lista-productos">
        {products.map((products, index) => (
          <Item products={products} key={products.id} />
        ))}
      </ul>
    </div>
  );    
}

export default ItemList;