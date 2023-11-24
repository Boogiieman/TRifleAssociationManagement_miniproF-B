import React from "react";
import Header from "../../Navbaru";
import { Navbar, Nav, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function ManageChampionship() {
  return (
    <div className="mainDiv">
      <div className="subDiv">
        {/*<Header />*/}
        </div>
        <Container className="" style={{ padding: "40px",marginTop:"30px" }}>
          <Row style={{ width: "100%" }}>
            <h1
              className="main-heading"
              style={{
                justifyContent: "center",
                paddingBottom: "60px"
              }}
            >
              Event Selection
            </h1>
            
          </Row>

          <Row
            className="row justify-content-md-center"
            style={{ padding: "10px" }}
          >
            <Col className="col-md-3">
              <h4 className="color">Name of Championship</h4>
            </Col>
            <Col className="col-md-3">
              <input
                type="text"
                className="form-control"
                placeholder="Name of Championship"
                style={{ width: "100%", textAlign: "center" }}
                required
              />
            </Col>
          </Row>

          <Row
            className="row justify-content-md-center"
            style={{ padding: "10px" }}
          >
            <Col className="col-md-3">
              <h4 className="color">Location</h4>
            </Col>
            <Col className="col-md-3">
              <input
                type="text"
                className="form-control"
                placeholder="Location"
                style={{ width: "100%", textAlign: "center" }}
                required
              />
            </Col>
          </Row>

          <Row
            className="d-flex"
            style={{ padding: "10px",justifyContent:"center" }}
          >
            <Col className="col-md-3">
              <h4 style={{textAlign:""}}  className="color">Date From :</h4>
            
              <input
                type="Date"
                className="form-control"
                placeholder="Date From"
                style={{ width: "100%", textAlign: "left" }}
                required
              />
            </Col>
            <Col className="col-md-3">
              <h4 style={{textAlign:"right"}} className="color">Date To :</h4>
            
              <input
                type="Date"
                className="form-control"
                placeholder="Date To"
                style={{ width: "100%", textAlign: "" }}
                required
              />
            </Col>
          </Row>

          <Row
            className="row justify-content-md-center"
            style={{ padding: "10px" }}
          >
            <Col className="col-md-3">
              <h4 className="color">Details</h4>
            </Col>
            <Col className="col-md-3">
              <textarea
                className="form-control"
                placeholder="Details"
                style={{ width: "100%", textAlign: "center" }}
                required
              />
            </Col>
          </Row>

          <Row className="row justify-content-md-center"  style={{padding:"10px"}}>
            <Col className="col-md-3">
            
            </Col>
            <Col className="col-md-3 " style={{textAlign:"right"}}>
            <Button className="btn-info" style={{color:"white",fontWeight:"Bold",width:"79px"}}>Save</Button>
            </Col>
            </Row>
          
        </Container>
      
    </div>
  );
}
export default ManageChampionship;
