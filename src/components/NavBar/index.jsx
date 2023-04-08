import CardWidget from "../CardWidget";
import "./navbar.css";

//boots
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";



function NavBar () {
  const [isScrolling, setIsScrolling] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) setIsScrolling(true);
      else setIsScrolling(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

    return (
    
     <Navbar bg="secundary" variant="dark"  style={{ height: isScrolling ? 80 : 100 }}
     >
        <Container >
        <NavLink className="link" to="/">Home</NavLink>
        <img src="../../src/imagenes/salud.png"  style={{
                height: isScrolling ? 10 : 30,
                transition: "all .2s ease",
              }}/>
          < Nav className="me-auto">
          <NavLink  className="link"to={"/category/farma"}>Farmacia</NavLink>
          <NavLink className="link" to={"/category/pelo"}>Cósmetica</NavLink>
            </Nav>
            <CardWidget/>
        </Container>
      </Navbar>





       
    );
}







export default NavBar;