import CardWidget from "../CardWidget";
import "./navbar.css";



function NavBar ({changeValue}) {

    return (
        <div className="inicio">
            <ul>
                <li>
                    <a href="">Farmacia</a>
                </li>
                <li>
                    <a href="">Cósmetica</a>
                </li>
                <li>
                    <a href="">Cuidados y belleza</a>
                </li>

                <button onClick={changeValue}>conteo</button>
            </ul>
            <CardWidget />
        </div>
    );
}







export default NavBar;