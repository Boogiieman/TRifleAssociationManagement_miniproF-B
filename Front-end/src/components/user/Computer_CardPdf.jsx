import React from "react";
import Header from "../Navbaru";
import Uform from "../Uform";
import { Container,Col, Row } from "react-bootstrap";
function ComputerCardPdf(){
    return (
        <div className="container-fluid" style={{maxwidth:"0px",padding:"0px"}}>
            <div className="row-fluid" style={{marginLeft:"10px",marginRight:"10px"}}><Header/></div>
        <div class="container-fluid" style={{padding:"10px"}}>
        <div class="row-md" style={{marginTop:"50px"}}>
        
 
    
      <div className="container mx-auto px-4">
        <div className="flex flex-row justify-center items-center">
          <div className="text-center">
            <h4 className="main-heading" style={{paddingBottom:"0px",marginBottom:"0px"}}>Name of Championship</h4>
            <p className="text-base">(Details of Championship)</p>
          </div>
        </div>
      </div>
      <Container className="d-flex" style={{ paddingTop: "50px" }}>
      <div className="col-md-6 align-items">
        <Row className="d-flex">
            <Col md={5} className="d-flex justify-content-start"> <h4 className="color" style={{fontWeight:"bold"}}>Competitor No</h4> </Col><Col className="d-flex justify-content-center"><h4 className="color" style={{fontWeight:"bold"}}>:</h4> </Col><Col md={5} className="d-flex justify-content-end"> <h4 className="color" style={{fontWeight:"bold"}}>3</h4> </Col>
        </Row>
        <Row className="d-flex">
        <Col md={5} className="d-flex justify-content-start"><h4 className="color" style={{fontWeight:"bold"}}>Name of Competitor </h4> </Col><Col className="d-flex justify-content-center"><h4 className="color" style={{fontWeight:"bold"}}>:</h4> </Col><Col md={5} className="d-flex justify-content-end"> <h4 className="color" style={{fontWeight:"bold"}}>name</h4> </Col>
        </Row>
        <Row className="d-flex">
        <Col md={5} className="d-flex justify-content-start"> <h4 className="color" style={{fontWeight:"bold"}}>Age</h4> </Col><Col className="d-flex justify-content-center"><h4 className="color" style={{fontWeight:"bold"}}>:</h4> </Col><Col md={5} className="d-flex justify-content-end"> <h4 className="color" style={{fontWeight:"bold"}}>3</h4> </Col>
        </Row>
        <Row className="d-flex">
        <Col md={5} className="d-flex justify-content-start"> <h4 className="color" style={{fontWeight:"bold"}}>Age Category</h4> </Col><Col className="d-flex justify-content-center"><h4 className="color" style={{fontWeight:"bold"}}>:</h4> </Col><Col md={5} className="d-flex justify-content-end"> <h4 className="color" style={{fontWeight:"bold"}}>3</h4> </Col>
        </Row>
        <Row className="d-flex">
        <Col md={5} className="d-flex justify-content-start"> <h4 className="color" style={{fontWeight:"bold"}}>Gender</h4> </Col><Col className="d-flex justify-content-center"><h4 className="color" style={{fontWeight:"bold"}}>:</h4> </Col><Col md={5} className="d-flex justify-content-end"> <h4 className="color" style={{fontWeight:"bold"}}>3</h4> </Col>
        </Row>
      </div>

      <div className="col-md-6 d-flex justify-content-center">
        <img
          className="rounded-circle shadow-4-strong"
          style={{
            width: "200px",
            height: "200px",
            objectFit: "cover",
          }}
          alt="avatar2"
          src="https://surgassociates.com/wp-content/uploads/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.jpg"
        />
      </div>
    </Container>
    <Container 
        className=""
        style={{ padding: "40px",paddingTop:"40px", marginTop: "0px", justifyContent: "left" }}>
        <Row><h2 className="color">Events Registered</h2></Row>
        <Row>

      <table className="table" style={{ justifyContent: "center" }}>
              <thead className="thead-dark">
                <tr className="d-flex">
                  <th scope="col" className="col-md">
                   Code
                  </th>
                  <th scope="col" className="col-md">
                    Event Name
                  </th>
                  <th scope="col" className="col-md">
                    Event Category
                  </th>
                  <th scope="col" className="col-md" style={{}}>
                   Slot Time
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="d-flex">
                  <th scope="row" className="col-md"></th>
                  <td className="col-md"></td>
                  <td className="col-md"></td>
                  <td className="col-md"></td>
                </tr>
              </tbody>
            </table>
            </Row>
      </Container>
    
        </div>
        </div>
        </div>
    );
}
export default ComputerCardPdf;