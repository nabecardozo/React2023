import CardWidget from "../CardWidget";
import "./navbar.css";



function NavBar () {

    return (
        <div className="inicio">
            <ul>
                <li>
                    <button>Farmacia</button>
                </li>
                <li>
                    <button>Cósmetica</button>
                </li>
                <li>
                    <button>Cuidados y belleza</button>
                </li>
            </ul>
            <CardWidget />
        </div>
    );
}







export default NavBar;