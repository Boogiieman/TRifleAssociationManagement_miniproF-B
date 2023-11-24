import React from "react";
import Header from "../../Navbaru";
import { Navbar, Nav, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Combobox } from "react-widgets";

function EditMembershipSetting(){
    return(
        <div className="mainDiv">
            <div className="subDiv" style={{marginTop: "50px", marginBottom: "50px"}} >
                {/*<Header />*/}
            </div>
            <Container  className="" style={{justifyContent:"center",paddingTop:"130px"}} >
            <Row className="row justify-content-md-center"  style={{padding:"10px"}}>
            <Col className="col-md-4">
            <h4 className="color">Name of Membership</h4>
            </Col>
            <Col className="col-md-5">
            <input
                      type="text"
                      className="form-control"
                      placeholder="Name of Membership"
                      style={{ width: "100%", textAlign: "center" }}
                      required
                    />
            </Col>
            </Row>

            <Row className="row justify-content-md-center" style={{padding:"10px"}}>
            <Col className="col-md-4">
            <h4 className="color">Type</h4>
            </Col>
            <Col className="col-md-5">
            <Combobox
                data={["Temporary","Annual","Life Time"]}
                placeholder="Temporary/Annual/Life Time"
              required/>
            </Col>
            </Row>

            <Row className="row justify-content-md-center"  style={{padding:"10px"}}>
            <Col className="col-md-4">
            <h4 className="color">First Installment</h4>
            </Col>
            <Col className="col-md-5">
            <input
                      type="text"
                      className="form-control"
                      placeholder="First Installment"
                      style={{ width: "100%", textAlign: "center" }}
                      required
                    />
            </Col>
            </Row>

            <Row className="row justify-content-md-center"  style={{padding:"10px"}}>
            <Col className="col-md-4">
            <h4 className="color">Upcoming Amount (Yearly) </h4>
            </Col>
            <Col className="col-md-5">
            <input
                      type="text"
                      className="form-control"
                      placeholder="Upcoming Amount (Yearly)"
                      style={{ width: "100%", textAlign: "center" }}
                      required
                    />
            </Col>
            </Row>

            <Row className="row justify-content-md-center"  style={{padding:"10px"}}>
            <Col className="col-md-4">
            <h4 className="color">Details </h4>
            </Col>
            <Col className="col-md-5">
            <textarea  className="form-control" placeholder="Details" required />
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
export default EditMembershipSetting;