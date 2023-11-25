import React from "react";
import Header from "../Navbaru";
import Uform from "../Uform";
import { Container, Col, Row } from "react-bootstrap";
function IDCardPdf() {
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
      <div class="container-fluid" style={{ padding: "10px" }}>
        <div class="row-md" style={{ marginTop: "50px" }}>
          <div className="container mx-auto px-4">
            <div className="flex flex-row justify-center items-center">
              <div className="text-center"></div>
            </div>
          </div>
          <Container className="d-flex" style={{ paddingTop: "50px" }}>
            <div className="col-md-6 align-items">
              <Row className="d-flex">
                <Col className="d-flex justify-content-center">
                  <img
                    className="rounded-circle shadow-4-strong"
                    style={{
                      width: "200px",
                      height: "200px",
                      objectFit: "cover",
                    }}
                    alt="Logo"
                    src="https://wwwspennarecom.cdn.triggerfish.cloud/uploads/2013/12/Your-Logo-Here-Black-21.jpg"
                  />
                </Col>
              </Row>
              <Row className="d-flex">
                <Col className="d-flex justify-content-center">
                  <h4 className="main-heading" style={{ fontSize: "40px" }}>
                    The Thiruvananthapuram District Rifle Association
                  </h4>
                </Col>
              </Row>
              <Row className="d-flex">
                <Col className="d-flex justify-content-center">
                  <img
                    className="rounded-circle shadow-4-strong"
                    style={{
                      width: "200px",
                      height: "200px",
                      objectFit: "cover",
                    }}
                    alt="Logo"
                    src="https://surgassociates.com/wp-content/uploads/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.jpg"
                  />
                </Col>
              </Row>
              <Row className="d-flex">
                <Col className="d-flex justify-content-center">
                  <h4 className="color">Name of Member</h4>
                </Col>
              </Row>
              <Row className="d-flex">
                <Col className="d-flex justify-content-center">
                  <h4 className="color">(Membership Number)</h4>
                </Col>
              </Row>
              <Row className="d-flex">
                <Col className="d-flex justify-content-center">
                  <h4 className="color">Valid up to (Date)</h4>
                </Col>
              </Row>
              <Row
                className="d-flex"
                style={{ backgroundColor: "gold", color: "white" }}
              >
                <Col className="d-flex justify-content-center">
                  <h4
                    className="color"
                    style={{ textShadow: "1px 1px 1px black" }}
                  >
                    Membership Type
                  </h4>
                </Col>
              </Row>
            </div>
            <div className="col-md-6 align-items">
              <Row className="d-flex">
                <Col className="d-flex justify-content-start">
                  <h4
                    className="color"
                    style={{ marginTop:"50px",marginBottom:"50px",marginRight: "15px", textDecoration: "underline" }}
                  >
                    Address:
                  </h4>
                </Col>
              </Row>
              <Row className="d-flex">
                <Col className="d-flex justify-content-center">
                  <textarea style={{height:"150px"}} className="form-control" placeholder="Address" />
                </Col>
              </Row>
              <Row className="d-flex" style={{ padding: "50px" }}>
                <Col className="d-flex justify-content-center">
                  <h4 className="color" style={{ marginRight: "15px" }}>
                    Phone:
                  </h4>
                  <input
                  
                    type="number"
                    className="form-control"
                    placeholder="Phone no"
                    pattern="[0-9]{10}"
                    required
                  />
                </Col>
              </Row>
              <Row className="d-flex" style={{marginTop:"80px"}}>
                <Col className="d-flex justify-content-end">
                  <h5 className="color" >Signature of secretary</h5>
                </Col>
              </Row>
              <hr className="rounded" />
              <Row className="d-flex">
                <Col className="d-flex justify-content-center">
                  <h4 className="color">Address of Association</h4>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
}
export default IDCardPdf;
