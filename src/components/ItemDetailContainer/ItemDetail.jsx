import { useContext } from "react";
import { Context } from "../../Context/Context";



function ItemDetailContainer(){
    const { onAdd, onRemove } = useContext(Context);
    return(
        <div>
        
        <button onClick={onAdd}>Add to cart</button> 
      <button onClick={onRemove}>Remove from cart</button> 
      
        </div>
    );
}

export default ItemDetailContainer;