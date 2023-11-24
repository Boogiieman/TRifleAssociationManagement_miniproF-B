import React from "react";
import Header from "../../Navbaru";
import Combobox from "react-widgets/Combobox";
import {
  Navbar,
  Nav,
  Button,
  Container,
  Row,
  Col,
  Form,
} from "react-bootstrap";
import { Link } from "react-router-dom";

function MembershipVerification() {
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
          <h1
            className="main-heading"
            style={{
              textAlign: "center",
              color: "gray",
              paddingBottom: "50px",
              fontWeight: "bold",
            }}
          >
            Membership Verification
          </h1>
          <Row
            className="row-fluid"
            style={{ padding: "2px", justifyContent: "space-between" }}
          >
            <Col className="d-flex" style={{}}>
              <h5 className="color" style={{ marginRight: "15px" }}>
                Name of Association{" "}
              </h5>
              <input
                type="text"
                style={{ width: "30%" }}
                className="form-control"
                placeholder="Name of Association"
                required
              />
            </Col>
            <Col className="d-flex justify-content-end" style={{}}>
              <h5 className="color" style={{ marginRight: "15px" }}>
                Name of Association{" "}
              </h5>
              <Combobox
                data={["Verification Pending"]}
                placeholder="Status"
              required/>
            </Col>
            {/*<Col className="d-flex" style={{ padding: "2px", justifyContent: "space-between" }}>
              <h5 className="color" style={{ justifyContent: "left",marginRight: "15px" }}>
                Status
              </h5>
              <Combobox
                style={{ width: "30%" }}
                data={["Verification Pending"]}
                placeholder="Verification Pending"
                required
              />
            </Col>*/}
          </Row>
          <Row class="row-fluid" style={{ padding: "2px" }}>
            <div>
              <table class="table" style={{ textAlign: "center" }}>
                <thead class="thead-dark">
                  <tr>
                    <th scope="col" className="col-md-3">
                      #
                    </th>
                    <th scope="col" className="col-md-3">
                      Name of Event
                    </th>
                    <th scope="col" className="col-md-3">
                      Fees
                    </th>
                    <th scope="col" className="col-md-3">
                      Select
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row" className="col-md-3">
                      1
                    </th>
                    <td className="col-md-3">Pistol </td>
                    <td className="col-md-3">6000 Rs</td>
                    <td className="col-md-3">
                      <Form.Check
                        className="TbCircleFilled"
                        type="checkbox"
                        label=""
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Row>
        </Row>
      </div>
    </div>
  );
}

export default MembershipVerification;
