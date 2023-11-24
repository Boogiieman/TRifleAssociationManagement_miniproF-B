import React from "react";
import Header from "../../Navbaru";
import { Navbar, Nav, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function EventSlotSetting(){
    return(
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
                paddingBottom: ""
              }}
            >
              Event Slot
            </h1>
            
          </Row>
          <Row>
          <Col style={{ paddingTop: "30px", paddingBottom: "" }}>
            <table className="table" style={{ justifyContent: "center" }}>
              <thead className="thead-dark">
                <tr className="d-flex">
                  <th scope="col" className="col-md">
                    #
                  </th>
                  <th scope="col" className="col-md">
                    Date
                  </th>
                  <th scope="col" className="col-md" style={{}}>
                    Type Range
                  </th>
                  <th scope="col" className="col-md" style={{}}>
                    Number of Lines
                  </th>
                  <th scope="col" className="col-md" style={{}}>
                    Time
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
                  <td className="col-md">10 meter</td>
                  <td className="col-md"></td>
                  <td className="col-md"></td>
                  <td className="col-md"></td>
                </tr>
                <tr className="d-flex">
                  <th scope="row" className="col-md"></th>
                  <td className="col-md"></td>
                  <td className="col-md">25 meter</td>
                  <td className="col-md"></td>
                  <td className="col-md"></td>
                  <td className="col-md"></td>
                </tr>
                <tr className="d-flex">
                  <th scope="row" className="col-md"></th>
                  <td className="col-md"></td>
                  <td className="col-md">50 meter</td>
                  <td className="col-md"></td>
                  <td className="col-md"></td>
                  <td className="col-md"></td>
                </tr>
              </tbody>
            </table>
          </Col>
          </Row>
            
          </Container>
        </div>
    );
}
export default EventSlotSetting;