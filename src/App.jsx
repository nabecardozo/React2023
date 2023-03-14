import { useEffect, useState } from "react"; 
import ItemListContainer from "./components/ItemListConteiner";
import NavBar from "./components/NavBar/index";

function App() {
const [ greeting , setGreeting]= useState(1);

const handleChange = () => {
    setGreeting(greeting + 1);


};



    return (
        <div>
            
            <NavBar changeValue={handleChange}/>
            <ItemListContainer greeting= {greeting} />
        </div>
    );
}

export default App;









        

     
