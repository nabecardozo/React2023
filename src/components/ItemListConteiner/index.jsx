import products from "../../mocks/products"

function ItemListContainer({ greeting }) {
  console.log(products);
    return (
        <div style={{ fontSize: "3rem"}}>
            <h1>{greeting}</h1>
        </div>
    );
}

export default ItemListContainer;