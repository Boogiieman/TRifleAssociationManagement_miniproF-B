import React from "react";
import Header from "../../Navbaru";
import DetailsUpload from "../Fees_Membership_Components/DetailsMembershipForm";
import TransactionDetails from "../Fees_Membership_Components/TransactionDetails";
import FeePaymentDetails from "../Fees_Membership_Components/FeePaymentDetails";
import {
  Navbar,
  Nav,
  Button,
  NavDropdown,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { Link } from "react-router-dom";
function MembershipFormDetails() {
  return (
    <div
      className="container-fluid"
      style={{ maxwidth: "0px", padding: "0px" }}
    >
      <div
        className="row-fluid"
        style={{ marginLeft: "10px", marginRight: "10px" }}
      >
        <Header />
      </div>
      <DetailsUpload />
      <FeePaymentDetails />
      
    </div>
  );
}
export default MembershipFormDetails;
