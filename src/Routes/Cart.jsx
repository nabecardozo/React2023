import { useContext } from "react";
import { Container } from "react-bootstrap";
import {Context} from "../Context/Context"
import {collection, getFirestore, addDoc, doc, updateDoc} from 'firebase/firestore';

function Cart (){
    const {productsAdded} = useContext(Context);
    const db = getFirestore();

    function updateOrder(productsId, finalStock){
        const itemRef= doc(db, "items", productsId);
        updateDoc(itemRef, {stock: finalStock}).catch((error)=>
        console.log({error}));
    }

    function sendOrder() {
      const total = productsAdded.reduce ((acc, products) =>acc + products.quantity+ products.precio,0);

      const order = {
        buyer:{name:"ana", email:"nair_belenc@hotmail.com", phone:"1125365123"},
        items: productsAdded,
        total,
      };

    
      const collectionRef = collection(db, "orders");
      addDoc(collectionRef, order)
      .then(()=> {
        
        productsAdded.map((products)=>{
            const finalStock = products.stock - products.quantity;
        updateOrder(products.id, finalStock);
        });
      })
      .catch((error)=>console.log({error}))
    }    


    return (
       <Container className="route-container">
        {productsAdded.map((products)=>
        <div>
            <span>Name : {products.title} </span>
            <br />
            <span>quantity : {products.quantity} </span>
        </div>
    )}
        <button onClick={sendOrder}>Pagar</button>
         </Container>
    );
}

export default Cart;