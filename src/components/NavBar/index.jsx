import CardWidget from "../CardWidget";
import "./navbar.css";

//boots
import Container from 'react-bootstrap/Container';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";




function NavBar () {

    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">FARMACIA</a>
      
       
      
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              <NavLink to="/">BIENVENIDOS</NavLink>
            </li>
            <li class="nav-item">
              <NavLink to={"/category/farma"}>FARMACIA</NavLink>
            </li>
            <li class="nav-item">
              <NavLink to={"/category/pelo"}>CÓSMETICA</NavLink>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
          </form>
        </div>
      </nav>
    );
}







export default NavBar;