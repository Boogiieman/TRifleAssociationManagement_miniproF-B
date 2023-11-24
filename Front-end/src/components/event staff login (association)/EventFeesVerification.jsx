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

function EventFeesVerification() {
  return (
    <div className="mainDiv container-fluid">
      <div className="subDiv row-fluid">{/*<Header />*/}</div>
      <Container className="" style={{ padding: "40px", marginTop: "30px" }}>
        <Row style={{ width: "100%" }}>
          <h1
            className="main-heading"
            style={{
              justifyContent: "center",
              paddingBottom: "",
            }}
          >
            Event Fees Verification
          </h1>
        </Row>
        <Row
          className="d-flex"
          style={{ padding: "10px", justifyContent: "center" }}
        >



          <Row
            className="row-md"
            style={{ padding: "10px" }}
          >
            <Col className="col-md-3" style={{ }}>
              <h4 className="color" style={{textAlign:"right"}}>Select Championship</h4>
            </Col>
            <Col className="col-md">
            <Combobox
                data={["1","2","3"]}
                placeholder="Select Championship"
              required/>
            </Col>
          
            <Col className="col-md-3" style={{alignContent:"Left"}}>
            <h4 className="color"  style={{textAlign:"right"}}>Status</h4>
            </Col>
            <Col className="col-md">
            <Combobox
                data={["1","2","3"]}
                placeholder="Status"
              required/>
            </Col>
          </Row>
        </Row>
        <Col style={{ paddingTop: "30px", paddingBottom: "" }}>
            <table className="table" style={{ justifyContent: "center" }}>
              <thead className="thead-dark">
                <tr className="d-flex">
                  <th scope="col" className="col-md">
                    #
                  </th>
                  <th scope="col" className="col-md">
                    Name of Applicant
                  </th>
                  <th scope="col" className="col-md" style={{}}>
                    Type of Membership
                  </th>
                  <th scope="col" className="col-md" style={{}}>
                    Amount
                  </th>
                  <th scope="col" className="col-md" style={{}}>
                    Date of Transaction
                  </th>
                  <th scope="col" className="col-md" style={{}}>
                    Remarks
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
                  <td className="col-md"><Form.Check className="TbCircleFilled" type="checkbox" label="" /></td>
                </tr>
              </tbody>
            </table>
          </Col>



       





      </Container>
    </div>
  );
}
export default EventFeesVerification;
