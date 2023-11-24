import React from "react";
import Header from "../../Navbaru";
import { Navbar, Nav, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function ClubRegisterDetails() {
  return (
    <div className="mainDiv">
      <div className="subDiv">
        <Container className="d-flex" style={{ paddingTop: "40px" }}>
          <Col style={{ paddingTop: "50px", paddingBottom: "50px" }}>
            <table className="table" style={{ justifyContent: "center" }}>
              <thead className="thead-dark">
                <tr className="d-flex">
                  <th scope="col" className="col-md">
                    #
                  </th>
                  <th scope="col" className="col-md">
                    Registration Number
                  </th>
                  <th scope="col" className="col-md" style={{}}>
                    Registration From
                  </th>
                  <th scope="col" className="col-md" style={{}}>
                    Registration To
                  </th>
                  <th scope="col" className="col-md" style={{}}>
                    Status
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
                </tr>
              </tbody>
            </table>
          </Col>
        </Container>
      </div>
    </div>
  );
}
export default ClubRegisterDetails;
