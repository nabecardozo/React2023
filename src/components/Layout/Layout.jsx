import NavBar from "../NavBar";
import { Outlet as Page } from "react-router-dom";
function Layout (){
    return (
        <main>
            <NavBar></NavBar>
            <Page/>
        </main>
    );
}

export default Layout;


