import Item from "../Item"
function ItemList({ Productos }) {
    return (

        <div>
        <ul>
            {Productos.map((Productos, index) => ( <Item></Item>
          
         ))}
        </ul>
    </div >
    
    
    );
   

 
}




export default ItemList;