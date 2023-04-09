
import ItemListContainer from "../components/ItemListContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from "react-router-dom";
import { Context, CustomProvider } from "../Context/Context";
import { Container } from "react-bootstrap";
import { useContext } from "react";

function Root() {

  const parametro = useParams()
  const isCategoryRoute = Boolean(parametro.id);

  const contextValues = useContext(Context);


  return (
    <div>
      <CustomProvider>
        <Container>
          <ItemListContainer isCategoryRoute={isCategoryRoute}
           categoryId={parametro.id} />
        </Container>
      </CustomProvider>



    </div>
  );
}

export default Root;









