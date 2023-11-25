import React from "react";
import Header from "../Navbaru";
import {
  Navbar,
  Nav,
  Button,
  Container,
  Row,
  Col,
  Placeholder,
  Form,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { Combobox } from "react-widgets";

function ScoreEntry() {
  return (
    <div className="mainDiv container-fluid">
      <div className="subDiv row-fluid">{/*<Header />*/}</div>
      <Container
        className="d-flex"
        style={{ padding: "40px", marginTop: "30px", justifyContent: "left" }}
      >
        <Row className="d-flex" style={{}}>
          <h1
            className="main-heading"
            style={{
              justifyContent: "left",
              paddingBottom: "",
            }}
          >
            Score Entry
          </h1>
        </Row>
      </Container>
      <Container
        className="align-items-center"
        style={{ padding: "40px", paddingBottom: "0px", justifyContent: "left" }}
      >
        <Row
          className="d-flex align-items-center"
          style={{ justifyContent: "left", width: "100%" }}
        >
          <Col
            md={5}
            className="align-items-center"
            style={{ justifyContent: "space-between" }}
          >
            <Row
              className="d-flex align-items-center"
              style={{
                justifyContent: "left",
                paddingBottom: "5px",
                width: "100%",
              }}
            >
              <Col
                className="d-flex align-items-center"
                style={{ justifyContent: "space-between" }}
              >
                <h4
                  className="color"
                  style={{
                    justifyContent: "left",
                    paddingBottom: "",
                    paddingRight: "5px",
                  }}
                >
                  Championship
                </h4>
                <Combobox
                  style={{ justifyContent: "end" }}
                  width="100%"
                  placeholder=""
                  data={[""]}
                />
              </Col>
            </Row>
            <Row
              className="d-flex align-items-center"
              style={{
                justifyContent: "left",
                paddingBottom: "5px",
                width: "100%",
              }}
            >
              <Col
                className="d-flex align-items-center"
                style={{ justifyContent: "space-between" }}
              >
                <h4
                  className="color"
                  style={{
                    justifyContent: "left",
                    paddingBottom: "",
                    paddingRight: "5px",
                  }}
                >
                  Time Slot
                </h4>
                <Combobox width="100%" placeholder="" data={[""]} />
              </Col>
            </Row>
          </Col>
          <Col
            md={5}
            className="d-flex "
            style={{ justifyContent: "" }}
          >
            
          </Col>
        </Row>
      </Container>
      <Container 
        className="d-flex"
        style={{ padding: "40px", marginTop: "0px", justifyContent: "left" }}>
      <table className="table" style={{ justifyContent: "center" }}>
              <thead className="thead-dark">
                <tr className="d-flex">
                  <th scope="col" className="col-md">
                    #
                  </th>
                  <th scope="col" className="col-md">
                    Name of Participant
                  </th>
                  <th scope="col" className="col-md" style={{}}>
                    Competitor No:
                  </th>
                  <th scope="col" className="col-md" style={{}}>
                    Line No:
                  </th>
                  <th scope="col" className="col-md" style={{}}>
                    Event Category
                  </th>
                  <th scope="col" className="col-md" style={{}}>
                    Score
                  </th>
                  <th scope="col" className="col-md" style={{}}>
                   Manage 
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="d-flex">
                  <th scope="row" className="col-md"></th>
                  <td className="col-md"></td>
                  <td className="col-md"></td>
                  <td className="col-md"></td>
                  <td className="col-md"></td>
                  <td className="col-md"></td>
                  <td className="col-md"><button className="btn btn-outline-danger">Edit</button></td>
                </tr>
              </tbody>
            </table>
            
      </Container>
      {/*<Row className="" style={{justifyContent:"center"}}>
        <button style={{width:"10%",fontWeight:"bolder"}} className="btn btn-outline-danger">Download</button>
     </Row>*/}



    </div>
  );
}
export default ScoreEntry;

