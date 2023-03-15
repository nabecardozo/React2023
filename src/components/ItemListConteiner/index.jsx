import{useEffect, useState} from "react"
//lista de prodcutos
import ItemList from "../ItemList";
import products from "../../mocks/products";



function ItemListContainer({ greeting }) {
   const [products, setProducts] = useState([]);
   
   useEffect (( )=> {
      const productsPromise = new Promise((resolve, reject)=>
      setTimeout(() => resolve(products),2000)
      );

      productsPromise
       .then((response)=> setProducts(response))
       .catch((err)=>console.log(err));

    },[]);

    console.log({products});

 
    return (
       <div>
        <ItemList products={products} />
       </div>
    );
}

export default ItemListContainer;