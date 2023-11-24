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

function TransactionDetailsVerification() {
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
            Transaction Details
          </h1>
        </Row>
        <Row
          className="d-flex"
          style={{ padding: "10px", justifyContent: "center" }}
        >



          <Row
            className="row justify-content-md-center"
            style={{ padding: "10px" }}
          >
            <Col className="col-md-3">
              <h4 className="color">Name of Applicant</h4>
            </Col>
            <Col className="col-md-4">
              <input
                type="text"
                className="form-control"
                placeholder="Name of Applicant"
                style={{ width: "", textAlign: "center" }}
                required
              />
            </Col>
          </Row>




          <Row
            className="row justify-content-md-center"
            style={{ padding: "10px" }}
          >
            <Col className="col-md-3">
            <h4 className="color">Type of Membership</h4>
            </Col>
            <Col className="col-md-4">
            <input
                type="text"
                className="form-control"
                placeholder="Type of Membership"
                style={{ width: "", textAlign: "center" }}
                required
              />
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
                <th scope="col" className="col-md" style={{}}>
                  Type of Transaction
                </th>
                <th scope="col" className="col-md" style={{}}>
                  Transaction Number
                </th>
                <th scope="col" className="col-md" style={{}}>
                  Transaction Date
                </th>
                <th scope="col" className="col-md" style={{}}>
                  Amount
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



        <Row
          className="d-flex"
          style={{ padding: "10px", justifyContent: "center" }}
        >



          <Row
            className="row justify-content-md-center"
            style={{ padding: "10px" }}
          >
            <Col className="col-md-3">
              <h4 className="color">Received Amount</h4>
            </Col>
            <Col className="col-md-4">
              <input
                type="text"
                className="form-control"
                placeholder="Received Amount"
                style={{ width: "", textAlign: "center" }}
                required
              />
            </Col>
          </Row>




          <Row
            className="row justify-content-md-center"
            style={{ padding: "10px" }}
          >
            <Col className="col-md-3">
            <h4 className="color">Received Bank</h4>
            </Col>
            <Col className="col-md-4">
            <Combobox
                data={["1","2","3"]}
                placeholder="Bank"
              required/>
            </Col>
          </Row>


          <Row
            className="row justify-content-md-center"
            style={{ padding: "10px" }}
          >
            <Col className="col-md-3">
            <h4 className="color">Status</h4>
            </Col>
            <Col className="col-md-4">
            <Combobox
                data={["Reconciled","Unreconciled"]}
                placeholder="Status"
              required/>
            </Col>
          </Row>
        </Row>





      </Container>
    </div>
  );
}
export default TransactionDetailsVerification;
