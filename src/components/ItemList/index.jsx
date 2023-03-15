import Item from "../Item"
function ItemList({ products }) {
    return (

        <div>
        <ul>
            {products.map((product, index) => ( <Item></Item>
          
         ))}
        </ul>
    </div >
    
    
    );
   

 
}




export default ItemList;