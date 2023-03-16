import{useEffect, useState} from "react"
import Products from "../../mocks/Products";
//lista de prodcutos
import ItemList from "../ItemList";




function ItemListContainer({ greeting }) {
   const [Products, setProducts] = useState([]);
   
   useEffect (( )=> {
      const productsPromise = new Promise((resolve, reject)=>
      setTimeout(() => resolve(Products),2000)
      );

      productsPromise
       .then((response)=> setProducts(response))
       .catch((err)=>console.log(err));

    },[]);

    console.log({Products});

 
    return (
       <div>
        <ItemList Products={Products} />
       </div>
    );
}

export default ItemListContainer;