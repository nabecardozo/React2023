import ItemListContainer from "../components/ItemListContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from "react-router-dom";

function Root() {

  const parametro = useParams()
  const isCategoryRoute = Boolean(parametro.id);


  

  return (
    <div>
     
      <ItemListContainer isCategoryRoute={isCategoryRoute}categoryId={parametro.id} />
     
    </div>
  );
}

export default Root;








        

     
