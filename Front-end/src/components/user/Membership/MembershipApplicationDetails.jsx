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
  Col,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { Combobox } from "react-widgets";
function MembershipApplicationDetails() {
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
      <div className="container-fluid d-flex" style={{ padding: "60px",paddingBottom:"20px" }}>
        <Row className=""> <h4 className="main-heading" style={{justifyContent:"left"}}>Application Details</h4> </Row>
      </div>
      <Container className="container-fluid" style={{paddingBottom:"0px" }}>
  <Row className="align-items-center">
    <Col md={2}>
      <h4 className="color">Name</h4>
    </Col>
    <Col md={1} className="text-center">
      <h4 className="color">:</h4>
    </Col>
    <Col md={2}>
      <h4 className="color">Name</h4>
    </Col>
  </Row>
  <Row className="align-items-center">
    <Col md={2}>
      <h4 className="color">Type of Membership</h4>
    </Col>
    <Col md={1} className="text-center">
      <h4 className="color">:</h4>
    </Col>
    <Col md={2}>
      <h4 className="color">Type of Membership</h4>
    </Col>
  </Row>
  <Row className="align-items-center">
    <Col md={2}>
      <h4 className="color">Address</h4>
    </Col>
    <Col md={1} className="text-center">
      <h4 className="color">:</h4>
    </Col>
    <Col md={2}>
      <h4 className="color">Address</h4>
    </Col>
  </Row>
  <Row className="align-items-center">
    <Col md={2}>
      <h4 className="color">Phone No</h4>
    </Col>
    <Col md={1} className="text-center">
      <h4 className="color">:</h4>
    </Col>
    <Col md={2}>
      <h4 className="color">Phone No</h4>
    </Col>
  </Row>
  <Row className="align-items-center">
    <Col md={2}>
      <h4 className="color">Fees</h4>
    </Col>
    <Col md={1} className="text-center">
      <h4 className="color">:</h4>
    </Col>
    <Col md={2}>
      <h4 className="color">Fees</h4>
    </Col>
  </Row>
  <Row className="align-items-center">
    <Col md={2}>
      <h4 className="color">Payment Status</h4>
    </Col>
    <Col md={1} className="text-center">
      <h4 className="color">:</h4>
    </Col>
    <Col md={2}>
      <h4 className="color">Payment Status</h4>
    </Col>
  </Row>
</Container>

 <div className="container-fluid d-flex" style={{ padding: "60px",paddingBottom:"20px",paddingTop:"2px" }}>
        <Row className=""> <h4 className="main-heading" style={{justifyContent:"left"}}>Documents</h4> </Row>
      </div>
      <Container className="container-fluid">

  <Row className="align-items-center">
    <Col md={3}>
      <h4 className="color">1. PCC/School Certificate</h4>
    </Col>
    <Col md={1} className="text-center">
      <h4 className="color">:</h4>
    </Col>
    <Col md={2} className="d-flex" style={{justifyContent:"space-between"}}>
      <h4 className="color" style={{marginRight:"10px"}}>Certificate</h4><button className="btn btn-outline-success">View</button>
    </Col>
  </Row>
  <Row className="align-items-center" style={{padding:"2px"}}>
    <Col md={3}>
      <h4 className="color">2. Transaction Receipt</h4>
    </Col>
    <Col md={1} className="text-center">
      <h4 className="color">:</h4>
    </Col>
    <Col md={2} className="d-flex" style={{justifyContent:"space-between"}}>
      <h4 className="color" style={{marginRight:"10px"}}>Receipt</h4><button className="btn btn-outline-success">View</button>
    </Col>
  </Row>
  <Row className="" style={{padding:"12px"}}>
    <Col md={3}>
      <h4 className="color">Remarks:</h4>
      <textarea></textarea>
    </Col>
    <Col md={1} className="text-center">
      <h4 className="color"></h4>
    </Col>
    <Col md={3} className="" style={{justifyContent:""}}>
      <h4 className="color">Status:</h4>
      <Combobox
        data={['Verified','Verified with Comments']}
        placeholder="Verified/Verified with Comments"
        required
      />
    </Col>
  </Row>
  <Row className="align-items-center" style={{padding:"12px",justifyContent:"center"}}>
    <Button className="btn-info" style={{color:"white",fontWeight:"bolder",width:"10%",justifyContent:"center"}}>Submit</Button>
  </Row>
  
</Container>


  
    </div>
  );
}
export default MembershipApplicationDetails;
