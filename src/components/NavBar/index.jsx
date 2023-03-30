import CardWidget from "../CardWidget";
import "./navbar.css";

//boots
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";




function NavBar () {

    return (

     <Navbar bg="secundary" variant="dark">
        <Container>
        <NavLink to="/">BIENVENIDOS</NavLink>
          <Nav className="me-auto">
          <NavLink to={"/category/farma"}>FARMACIA</NavLink>
          <NavLink to={"/category/pelo"}>CÓSMETICA</NavLink>
            </Nav>
            <CardWidget/>
        </Container>
      </Navbar>





       
    );
}







export default NavBar;