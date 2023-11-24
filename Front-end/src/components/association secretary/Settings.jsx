import React from "react";
import Header from "../Navbaru";
import { Navbar, Nav, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  TbCircle1Filled,
  TbCircle2Filled,
  TbCircle3Filled,
  TbCircle4Filled,
  TbCircle5Filled,
} from "react-icons/tb";

function Settings() {
  return (
    <div class="mainDiv container-fluid">
      <div class="subDiv row-fluid">
        {/*Header here*/}
        <div class="subDiv row-fluid">
          <h1
            className="main-heading"
            style={{ marginTop: "50px", marginBottom: "50px" }}
          >
            Settings
          </h1>
          <Container className="d-flex">

          <Col md={4}  > 
          
          </Col>
          <Col md={4} style={{}}>
          <Row className="row-fluid" style={{ padding: "20px" }}>
            <Col className="col-fluid text-center d-flex justify-content-left align-items-center">
              <Link to="/MembershipSetting" className="d-flex">
                <TbCircle1Filled
                  size="28.8px"
                  className="TbCircleFilled"
                  style={{ color: "#408697", marginRight: "20px" }}
                />
                <h4
                  className="mb-0 ml-2"
                  style={{ color: "#408697", fontFamily: "cursive" }}
                >
                  Types of Memberships
                </h4>
              </Link>
            </Col>
          </Row>

          <Row className="row-fluid" style={{ padding: "20px" }}>
            <Col className="col-fluid text-center d-flex justify-content-left align-items-center">
              <Link to="/BankAccountList" className="d-flex">
                <TbCircle2Filled
                  size="28.8px"
                  className="TbCircleFilled"
                  style={{ color: "#408697", marginRight: "20px" }}
                />
                <h4
                  className="mb-0 ml-2"
                  style={{ color: "#408697", fontFamily: "cursive" }}
                >
                  Association Bank Accounts
                </h4>
              </Link>
            </Col>
          </Row>

          <Row className="row-fluid" style={{ padding: "20px" }}>
            <Col className="col-fluid text-center d-flex justify-content-left align-items-center">
              <Link to="/Club" className="d-flex">
                <TbCircle3Filled
                  size="28.8px"
                  className="TbCircleFilled"
                  style={{ color: "#408697", marginRight: "20px" }}
                />
                <h4
                  className="mb-0 ml-2"
                  style={{ color: "#408697", fontFamily: "cursive" }}
                >
                  Manage Club
                </h4>
              </Link>
            </Col>
          </Row>

          <Row className="row-fluid" style={{ padding: "20px" }}>
            <Col className="col-fluid text-center d-flex justify-content-left align-items-center">
              <Link to="/ManageChampionship" className="d-flex">
                <TbCircle4Filled
                  size="28.8px"
                  className="TbCircleFilled"
                  style={{ color: "#408697", marginRight: "20px" }}
                />
                <h4
                  className="mb-0 ml-2"
                  style={{ color: "#408697", fontFamily: "cursive" }}
                >
                  Manage Championship
                </h4>
              </Link>
            </Col>
          </Row>

          <Row className="row-fluid" style={{ padding: "20px" }}>
            <Col className="col-fluid text-center d-flex justify-content-left align-items-center">
              <Link to="/" className="d-flex">
                <TbCircle5Filled
                  size="28.8px"
                  className="TbCircleFilled"
                  style={{ color: "#408697", marginRight: "20px" }}
                />
                <h4
                  className="mb-0 ml-2"
                  style={{ color: "#408697", fontFamily: "cursive" }}
                >
                  Manage Training Batch
                </h4>
              </Link>
            </Col>
          </Row>
          </Col>
          <Col md={4} >
          
          </Col>
        
          </Container>
        </div>
      </div>
    </div>
  );
}
export default Settings;
