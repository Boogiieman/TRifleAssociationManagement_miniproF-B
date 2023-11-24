import React from "react";
import Header from "../../Navbaru";
import SideNav from "../../Sidebar";
import {
    Navbar, 
    Nav, 
    Button,
    NavDropdown,  
    Container,
    Row,
    Col } 
    from "react-bootstrap";
import { Link } from "react-router-dom";
function MemberEvent(){
    return(
        <div className="container-fluid" style={{maxwidth:"0px",padding:"0px"}}>
            <div className="row-fluid" style={{marginLeft:"10px",marginRight:"10px"}}>
            <Header/>
            </div>
            <div className="container-fluid" style={{padding:"0px"}}>
            <div className="row" style={{marginRight:"12px"}}>
            <div className="col"   >
            <SideNav />
            </div>
            <Col className="" style={{padding:"0px"}} >

            
            </Col>
            </div>
        </div>

        </div>
        
    );
}export default MemberEvent;