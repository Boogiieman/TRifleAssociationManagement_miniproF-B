import React from "react";
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

function DetailsUpload() {
  return (
    <div
      className="row-fluid"
      style={{ textAlign: "center", padding: "90px", paddingBottom: "0px" }}
    >
      <h1 className="main-heading" style={{ textAlign: "left" }}>
        Details
      </h1>

      <Container>
        <Row style={{ paddingTop: "10px", justifyContent: "center" }}>
          <Col md={5} className="" style={{ justifyContent: "space-between" }}>
            <h4
              style={{
                textAlign: "left",
                color: "gray",
                fontWeight: "bold",
                marginRight: "10px",
              }}
            >
              Name
            </h4>
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              required
            />
          </Col>
          <Col md={5}>
            <h4
              style={{
                textAlign: "left",
                color: "gray",
                fontWeight: "bold",
                marginRight: "10px",
              }}
            >
              Aadhar No:
            </h4>
            <input
              type="number"
              className="form-control"
              placeholder="Last 4 Digits of Aadhar"
              pattern="[0-9]{4}"
              required
            />
          </Col>
        </Row>

        <Row style={{ paddingTop: "10px", justifyContent: "center" }}>
          <Col md={5} className="" style={{ justifyContent: "space-between" }}>
            <h4
              style={{
                textAlign: "left",
                color: "gray",
                fontWeight: "bold",
                marginRight: "10px",
              }}
            >
              Age
            </h4>
            <input
              type="number"
              className="form-control"
              placeholder="Age"
              required
            />
          </Col>
          <Col md={5}>
            <h4
              style={{
                textAlign: "left",
                color: "gray",
                fontWeight: "bold",
                marginRight: "10px",
              }}
            >
              Date of Birth
            </h4>
            <input type="date" className="form-control" required />
          </Col>
        </Row>
        <Row style={{ paddingTop: "10px", justifyContent: "center" }}>
          <Col md={5} className="" style={{ justifyContent: "space-between" }}>
            <h4
              style={{
                textAlign: "left",
                color: "gray",
                fontWeight: "bold",
                marginRight: "10px",
              }}
            >
              Gender
            </h4>
            <Combobox
              data={["Male", "Female", "non-binary"]}
              placeholder="Select Gender"
              required
            />
          </Col>
          <Col md={5}>
            <h4
              style={{
                textAlign: "left",
                color: "gray",
                fontWeight: "bold",
                marginRight: "10px",
              }}
            >
              Name of Guardian
            </h4>
            <input
              type="text"
              className="form-control"
              placeholder="name of guardian"
              required
            />
          </Col>
        </Row>
        <Row style={{ paddingTop: "10px", justifyContent: "center" }}>
          <Col md={10} className="" style={{ justifyContent: "space-between" }}>
            <h4
              style={{
                textAlign: "left",
                color: "gray",
                fontWeight: "bold",
                marginRight: "10px",
              }}
            >
              Address
            </h4>
            <textarea className="form-control" placeholder="Address" required />
          </Col>
        </Row>
        <Row style={{ paddingTop: "10px", justifyContent: "center" }}>
          <Col md={10} className="d-flex align-items-left" style={{}}>
            <h4
              style={{
                color: "gray",
                fontWeight: "bold",
                marginRight: "10px",
                textDecoration: "underline",
              }}
            >
              Upload Document
            </h4>
          </Col>
        </Row>
        <Row style={{ paddingTop: "5px", justifyContent: "center" }}>
          <Col
            md={10}
            className="d-flex align-items-center"
            style={{ justifyContent: "" }}
          >
            <div style={{ paddingRight: "40px" }}>
              <h4
                style={{
                  textAlign: "left",
                  color: "gray",
                  fontWeight: "bold",
                  marginRight: "10px",
                }}
              >
                Police Clearance Certificate/School Certificate
              </h4>
            </div>
            <div style={{ verticalAlign: "" }}>
              <input
                style={{ justifyContent: "" }}
                type="file"
                accept=".pdf, .jpg, .jpeg, .png"
                required
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default DetailsUpload;
