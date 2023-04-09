import {doc, getDoc, getFirestore} from "firebase/firestore";
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

function ItemDetailContainer(){
    const [products, setProducts] = useState(null);
    const params = useParams()

 useEffect (() => {
  const db = getFirestore()
  const itemRef = doc(db, 'items', params.id);

  getDoc(itemRef).then((snapshot)=>{
    if (snapshot.exists()) {
      setProducts({id: snapshot.id, ...snapshot.data()})
   console.log(snapshot.data());

    }
  }).catch((error)=> console.log({error}))

},[])
  
if (!products) {
  return <p>loging...</p>;
   }
    return(
        <div>
        <ItemDetail products={products} />
        </div>
    );
}

export default ItemDetailContainer;