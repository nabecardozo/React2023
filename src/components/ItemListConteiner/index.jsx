import { useEffect, useState } from "react";
import Productos from "../../mocks/Productos";
//lista de prodcutos
import ItemList from "../ItemList";




function ItemListContainer({ greeting }) {

   const [Productos, setProducts] = useState([]);

   useEffect(() => {
      const productsPromise = new Promise((resolve, reject) =>
         setTimeout(() => resolve(Productos), 2000)
      );

      productsPromise
         .then((response) => setProducts(response))
         .catch((err) => console.log(err));

   }, []);

   console.log({ Productos });


   return (
      <div>
         <ItemLiFst Productos={Productos} />
      </div>
   );
}

export default ItemListContainer;