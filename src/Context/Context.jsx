import { createContext, useState } from "react";

export const Context = createContext();
export function CustomProvider({ children }) {
    const [productsAdded, setProductsAdded] = useState([]);

    function onAdd(products, quantity) {
        const isAlreadyAdded = isInCart (products);

        if (isAlreadyAdded) {
            const productToModify = productsAdded.find(productsAdded => productsAdded.id === products.id);

                const productModified = {
                    ...productToModify,
                    quantity: productToModify.quantity + quantity,
                  };
            
                  setProductsAdded((prevState) =>
                    prevState.map((productsAdded) =>
                      productsAdded.id === products.id ? productModified : productsAdded
                    )
                  );        

        }else {
            setProductsAdded((prevState) =>
              prevState.concat({ ...products, quantity })
            );  
        }    
    }

    function removeItem(itemId) {}
    function clear() {}

    function isInCart(products) {
        return productsAdded.some((productAdded) => productAdded.id === products.id);
      }


    return <Context.Provider value={{ productsAdded, onAdd }}> {children} </Context.Provider>;
}