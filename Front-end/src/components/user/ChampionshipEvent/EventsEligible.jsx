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

function EventsEligible() {
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
        <h1 className="main-heading" style={{ textAlign: "center", color: "gray",paddingBottom:"50px" ,fontWeight: "bold" }}>
          Events Eligible
        </h1>
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
                    <Form.Check className="TbCircleFilled" type="checkbox" label="" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Row>
        <Row class="row-fluid" style={{ padding: "2px" }}>
          <div>
            <table class="table" style={{ textAlign: "center", width: "100%",border:"none" }}>
              <thead>
                <tr style={{border:"none"}}>
                  <th style={{border:"none",borderTop:"none"}} scope="col" className="col-md-3"></th>
                  <th
                    scope="col"
                    className="col-md-3"
                    style={{
                      verticalAlign: "middle",
                      textAlign: "right",
                      color: "gray",
                      fontWeight: "bold",
                      border: "none"
                    }}
                  >
                    <h4>Total Fees:</h4>
                  </th>
                  <th scope="col" style={{border:"none"}} className="col-md-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Fees"
                      style={{ width: "100%", textAlign: "center" }}
                      required
                    />
                  </th>
                  <th style={{border:"none"}} scope="col" className="col-md-3"></th>
                </tr>
              </thead>
            </table>
          </div>
        </Row>
        <Row className="d-flex" style={{ justifyContent:"center",textAlign: "center" }}>
        <div
            className="col-md-12 d-flex justify-content-center"
            style={{ padding: "30px", paddingTop: "30px" }}
          >
          <h4 className="color" style={{marginRight:"12px"}}>Payment Mode</h4>
          <Combobox
                style={{width:"30%"}}
                data={["Online Payment","Bank Transfer"]}
                placeholder="Online Payment/Bank Transfer"
              required/>
          </div>
        </Row>

        <Row style={{ textAlign: "center" }}>
          <div
            className="col-md-12"
            style={{ padding: "30px", paddingTop: "30px" }}
          >
          <Link to='/EventTransaction'>
            <Button
              className="btn-info btn-rounded"
              style={{
                color: "white",
                fontWeight: "bolder",
                width: "79.6px",
              }}
            >
              Save
            </Button>
            </Link>
            
          </div>
          </Row>
        </Row>
      </div>
      
    </div>
  );
}
export default EventsEligible;
