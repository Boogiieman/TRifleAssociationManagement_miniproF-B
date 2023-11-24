import React from "react";
import Header from "../../Navbaru";
import { Navbar, Nav, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function EventSlot() {
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
      <div class="row-fluid" style={{ textAlign: "center", padding: "30px",marginTop:"70px"}}>
    
      
        
        

        
        <h1 className="main-heading"
          style={{
            paddingTop: "5px",
            paddingBottom: "30px"
          }}
        >
          Select Event Slot
        </h1>
        <Row style={{ padding: "2px" }}>
          <div>
            <table class="table" style={{ justifyContent:"center" }}>
              <thead class="thead-dark">
                <tr>
                  <th scope="col" className="col-md-4">#</th>
                  <th scope="col" className="col-md-4">Event Category</th>
                  <th scope="col" className="col-md-4" style={{}}>
                    Slot Timing
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className="col-md-4">1</th>
                  <td className="col-md-4">50m </td>
                  <td className="col-md-4" style={{ justifyContent:"center" }}>
                    <select
                      style={{ justifyContent:"center"}}
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Row>
        <Row
          style={{
            paddingTop: "20px",
            paddingBottom: "12px",
            textAlign: "center",
          }}
        >
          <Col>
            <Button
              className="btn-info btn-rounded"
              style={{
                color: "white",
                fontWeight: "bolder",
                width: "",
              }}
            >
              Submit
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  );
}
export default EventSlot;
