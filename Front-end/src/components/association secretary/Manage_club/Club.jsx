import React from "react";
import Header from "../../Navbaru";
import { Navbar, Nav, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Combobox } from "react-widgets";

function Club() {
  return (
    <div className="mainDiv">
      <div className="subDiv">
        <Container
          className=""
          style={{ justifyContent: "center", paddingTop: "130px" }}
        >
          <Row
            className="row justify-content-md-center"
            style={{ padding: "10px" }}
          >
            <Col className="col-md-2">
              <h4 className="color">Name of Club</h4>
            </Col>
            <Col className="col-md-5">
              <input
                type="text"
                className="form-control"
                placeholder="Name of Club"
                style={{ width: "100%", textAlign: "center" }}
                required
              />
            </Col>
          </Row>

          <Row
            className="row justify-content-md-center"
            style={{ padding: "10px" }}
          >
            <Col className="col-md-2">
              <h4 className="color">Address</h4>
            </Col>
            <Col className="col-md-5">
              <textarea
                className="form-control"
                placeholder="Address"
                required
              />
            </Col>
          </Row>

          <Row
            className="row justify-content-md-center"
            style={{ padding: "10px" }}
          >
            <Col className="col-md-2">
              <h4 className="color">Person in Charge</h4>
            </Col>
            <Col className="col-md-5">
              <input
                type="text"
                className="form-control"
                placeholder="Person in Charge"
                style={{ width: "100%", textAlign: "center" }}
                required
              />
            </Col>
          </Row>

          <Row
            className="row justify-content-md-center"
            style={{ padding: "10px" }}
          >
            <Col className="col-md-2">
              <h4 className="color">Contact Number</h4>
            </Col>
            <Col className="col-md-5">
              <input
                type="text"
                className="form-control"
                placeholder="Contact Number"
                style={{ width: "100%", textAlign: "center" }}
                required
              />
            </Col>
          </Row>

          <Row
            className="row justify-content-md-center"
            style={{ padding: "10px" }}
          >
            <Col className="col-md-2">
              <h4 className="color">Location</h4>
            </Col>
            <Col className="col-md-5">
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
            className="row justify-content-md-center"
            style={{ padding: "10px" }}
          >
            <Col className="col-md-2">
              <h4 className="color">Status</h4>
            </Col>
            <Col className="col-md-5">
              <Combobox
                data={["Good", "Pending", "Temporary"]}
                placeholder="Status"
                required
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
export default Club;
