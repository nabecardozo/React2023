import ItemListContainer from "../components/ItemListContainer";
import NavBar from "../components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from "react-router-dom";

function Root() {

  const parametro = useParams()
  const isCategoryRoute = Boolean(parametro.id);


  

  return (
    <div>
      <NavBar />
      <ItemListContainer isCategoryRoute={isCategoryRoute}categoryId={parametro.id} />
     
    </div>
  );
}

export default Root;








        

     
