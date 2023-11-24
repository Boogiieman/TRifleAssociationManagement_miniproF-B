import React from "react";
import Header from "../../Navbaru";
import { Combobox } from "react-widgets";
import {
  Form,
  Navbar,
  Nav,
  Button,
  NavDropdown,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { Link } from "react-router-dom";

function ChampionshipSelection() {
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
      <div class="row-fluid" style={{ textAlign: "center", padding: "30px" }}>
        <Row
          style={{
            paddingTop: "60px",
            paddingBottom: "50px",
            justifyContent: "center",
          }}
        >
          <h1 className="main-heading" style={{ paddingBottom: "50px" }}>
            Event Registration
          </h1>

          <Col md={2}>
            <h5
              style={{ textAlign: "center", color: "gray", fontWeight: "bold" }}
            >
              Select Championship
            </h5>
          </Col>
          <Col md={5}>
            <Combobox
              style={{ textAlign: "left" }}
              data={["One", "Two", "Three"]}
              placeholder="Select Championship"
              required
            />
          </Col>
        </Row>
        <Row
          style={{
            justifyContent: "center",
          }}
        >
          <Col md={2}>
            <h4
              className="color" style={{ textAlign: "left", color: "gray", fontWeight: "bold" }}
            >
              Name
            </h4>
          </Col>
          <Col md={1}>
            <h4 className="color">:</h4>
          </Col>
          <Col md={2}>
            Name
          </Col>
        </Row>
        <Row
          style={{
            justifyContent: "center",
          }}
        >
          <Col md={2}>
            <h4
              className="color" style={{ textAlign: "left", color: "gray", fontWeight: "bold" }}
            >
              Age
            </h4>
          </Col>
          <Col md={1}>
            <h4 className="color">:</h4>
          </Col>
          <Col md={2}>
            Age
          </Col>
        </Row>
        <Row
          style={{
            justifyContent: "center",
          }}
        >
          <Col md={2}>
            <h4
              className="color" style={{ textAlign: "left", color: "gray", fontWeight: "bold" }}
            >
              Date of Birth
            </h4>
          </Col>
          <Col md={1}>
            <h4 className="color">:</h4>
          </Col>
          <Col md={2}>
            DOB
          </Col>
        </Row>
        <Row
          style={{
            justifyContent: "center",
          }}
        >
          <Col md={2}>
            <h4
              className="color" style={{ textAlign: "left", color: "gray", fontWeight: "bold" }}
            >
              Age Category
            </h4>
          </Col>
          <Col md={1}>
            <h4 className="color">:</h4>
          </Col>
          <Col md={2}>
            Age Category
          </Col>
        </Row>
        <Row
          style={{
            justifyContent: "center",
          }}
        >
          <Col md={2}>
            <h4
              className="color" style={{ textAlign: "left", color: "gray", fontWeight: "bold" }}
            >
              Gender
            </h4>
          </Col>
          <Col md={1}>
            <h4 className="color">:</h4>
          </Col>
          <Col md={2}>
            Gender
          </Col>
        </Row>
        <Row
          style={{
            justifyContent: "center",paddingTop:"100px"
          }}
        >
          <Col md={2}>
            <Link to={'/EventsEligible'}>
            <Button className="btn-info btn-rounded" style={{color:"white",fontWeight:"bolder"}}>Proceed</Button>
            </Link>
          </Col>
        </Row>
        
      </div>
    </div>
  );
}
export default ChampionshipSelection;
