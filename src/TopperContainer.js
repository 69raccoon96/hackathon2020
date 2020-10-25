import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Nav, Navbar} from "react-bootstrap";


const styles = {

}
export default function TopperContainer(auth){
 return(
     <Navbar expand={"sm"}>
         <Nav className={"mr-auto"}>
             <div className={"not-auth-box"}>
                 <Nav.Link to={"/auth"} active><h1 className={"auth-link-text"}>Вы не авторизованы</h1></Nav.Link>
             </div>
         </Nav>
         <Nav className={"mr-1"}>
             <div className={"not-auth-button"}>
                 <Nav.Link to={"/auth"} active><h1 className={"auth1-link-text"}>Имя</h1> </Nav.Link>
             </div>
         </Nav>
     </Navbar>

 )
}