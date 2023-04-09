function ItemDetail({ products })
{
  return (
    <div>
      <p> {products.title} </p>
      <p> {products.precio} </p>
      <p> {products.stock} </p>
    </div>
  );
}

export default ItemDetail;