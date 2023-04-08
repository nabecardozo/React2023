import { useContext } from "react";
import "./CardWidget.css";
import { Link } from "react-router-dom";
import { Context } from "../../Context/Context";


function CardWidget() {
    const { productsAdded } = useContext(Context);


    return (
        <Link to="/cart">
            <button className="CardWidget">

                <img src="https://cdn-icons-png.flaticon.com/512/2838/2838895.png" />
                {productsAdded.length}

               
            </button>
        </Link>
    );
}







export default CardWidget;



