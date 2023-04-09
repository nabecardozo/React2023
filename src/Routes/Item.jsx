import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import ItemDetailContainer from "../components/ItemDetailContainer";
import {doc, getDoc, getFirestore} from 'firebase/firestore'


function ItemRoot() {
  
  return (
    <div>
     <Container>
     <ItemDetailContainer  />
     </Container>
      
    </div>
  );
}

export default ItemRoot;