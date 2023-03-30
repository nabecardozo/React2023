import Item from "../Item";
import "./ItemList.css";

function ItemList({ products }) {
  return (
    <div className="contenedor-productos">
      <ul className="lista-productos">
        {products.map((product, index) => (
          <Item product={product} key={product.id} />
        ))}
      </ul>
    </div>
  );
}

export default ItemList;