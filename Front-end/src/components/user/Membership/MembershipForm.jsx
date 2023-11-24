import React from "react";
import Header from "../../Navbaru";
import ChooseMembership from "../Fees_Membership_Components/ChooseMembership";
import TransactionDetails from "../Fees_Membership_Components/TransactionDetails";
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
import FeePaymentDetails from "../Fees_Membership_Components/FeePaymentDetails";
function MembershipForm(){
    return(
        <div className="container-fluid" style={{maxwidth:"0px",padding:"0px"}}>
            <div className="row-fluid" style={{marginLeft:"10px",marginRight:"10px"}}>
            <Header/>
            </div>
            <ChooseMembership />
            {/*<FeePaymentDetails />*/}
            {/*<TransactionDetails />*/}
        </div>
    );
}
export default MembershipForm;