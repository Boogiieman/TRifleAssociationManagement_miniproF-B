import React from "react";
import Header from "../../Navbaru";
import { Navbar, Nav, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Combobox } from "react-widgets";

function SubBankAccount(){
    return(
        <div className="mainDiv">
            <div className="subDiv" style={{marginTop: "50px", marginBottom: "50px"}} >
                {/*<Header />*/}
            </div>
            <Container  className="" style={{justifyContent:"center",paddingTop:"130px"}} >
            <Row className="row justify-content-md-center"  style={{padding:"10px"}}>
            <Col className="col-md-4">
            <h4 className="color">Account Name</h4>
            </Col>
            <Col className="col-md-5">
            <input
                      type="text"
                      className="form-control"
                      placeholder="Account Name"
                      style={{ width: "100%", textAlign: "center" }}
                      required
                    />
            </Col>
            </Row>

            <Row className="row justify-content-md-center" style={{padding:"10px"}}>
            <Col className="col-md-4">
            <h4 className="color">Account Number</h4>
            </Col>
            <Col className="col-md-5">
            <input
                      type="text"
                      className="form-control"
                      placeholder="Account Number"
                      style={{ width: "100%", textAlign: "center" }}
                      required
                    />
            </Col>
            </Row>

            <Row className="row justify-content-md-center"  style={{padding:"10px"}}>
            <Col className="col-md-4">
            <h4 className="color">Name of Bank</h4>
            </Col>
            <Col className="col-md-5">
            <input
                      type="text"
                      className="form-control"
                      placeholder="Name of Bank"
                      style={{ width: "100%", textAlign: "center" }}
                      required
                    />
            </Col>
            </Row>

            <Row className="row justify-content-md-center"  style={{padding:"10px"}}>
            <Col className="col-md-4">
            <h4 className="color">Name of Branch </h4>
            </Col>
            <Col className="col-md-5">
            <input
                      type="text"
                      className="form-control"
                      placeholder="Name of Branch"
                      style={{ width: "100%", textAlign: "center" }}
                      required
                    />
            </Col>
            </Row>

            <Row className="row justify-content-md-center"  style={{padding:"10px"}}>
            <Col className="col-md-4">
            <h4 className="color">IFS Code</h4>
            </Col>
            <Col className="col-md-5">
            <input
                      type="text"
                      className="form-control"
                      placeholder="IFSC"
                      style={{ width: "100%", textAlign: "center" }}
                      required
                    />
            </Col>
            </Row>

            <Row className="row justify-content-md-center"  style={{padding:"10px"}}>
            <Col className="col-md-4">
            
            </Col>
            <Col className="col-md-5 " style={{textAlign:"right"}}>
            <Button className="btn-info" style={{color:"white",fontWeight:"Bold",width:"79px"}}>Save</Button>
            </Col>
            </Row>

            </Container>
        </div>
    );
}
export default SubBankAccount;