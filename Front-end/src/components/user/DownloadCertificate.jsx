import React from "react";
import Header from "../Navbaru";
import SideNav from "../Sidebar";
import {
    Navbar, 
    Nav, 
    Button,
    NavDropdown,  
    Container,
    Row,
    Col } 
    from "react-bootstrap";
import { Link } from "react-router-dom";
import { Combobox } from "react-widgets";

function DownloadCertificate() {
  return (
    <div className="mainDiv container-fluid">
      <div className="subDiv row-fluid"><Header /></div>
      <Container
        className="d-flex"
        style={{ padding: "40px", paddingBottom: "0px" ,marginTop: "30px", justifyContent: "left" }}
      >
        <Row className="d-flex" style={{}}>
          <h1
            className="main-heading"
            style={{
              justifyContent: "left",
              paddingBottom: "",
            }}
          >
            Download
          </h1>
        </Row>
      </Container>
      <Container className="d-flex"
        style={{justifyContent: "center" }}>
      <Row style={{width:"40%"}}>
      <p className="round3 d-flex" style={{justifyContent:"space-evenly"}}>
                    <label
                      className="color"
                      style={{ fontWeight: "bolder", marginRight: "10px" }}
                    >
                      <input
                        type="radio"
                        name="viewType"
                        value="eventWise"
                        style={{ marginRight: "5px" }}
                      />
                      Event Wise
                    </label>
                    <label
                      className="color"
                      style={{ fontWeight: "bolder", marginRight: "10px" }}
                    >
                      <input
                        type="radio"
                        name="viewType"
                        value="slotTimeWise"
                        style={{ marginRight: "5px" }}
                      />
                      Slot Time Wise
                    </label>
                  </p>
      </Row>
      </Container>
      <Container>
      <Row className="d-flex align-items-center" style={{justifyContent:"center",paddingTop: "5px" }}>
        <Col xs="2" style={{justifyContent:"center" }}>
          <h4 className="color" style={{ margin: "0px", padding: "0px" }}>Championship</h4>
        </Col>
        <Col xs="3">
          <Combobox 
            placeholder=""
            data={[""]}
            required
          />
        </Col>
      </Row>
      {/*<Row className="d-flex align-items-center" style={{justifyContent:"center",paddingTop: "5px" }}>
        <Col xs="2" style={{justifyContent:"center"}}>
          <h4 className="color" style={{ margin: "0px", padding: "0px" }}>Event</h4>
        </Col>
        <Col xs="3">
          <Combobox 
            placeholder=""
            data={[""]}
            required
          />
        </Col>
      </Row>*/}
    </Container>
    <Container 
        className=""
        style={{ padding: "40px",paddingTop:"10px", marginTop: "0px", justifyContent: "left" }}>
        <Row><h2 className="color">Event</h2></Row>
        <Row>

      <table className="table" style={{ justifyContent: "center" }}>
              <thead className="thead-dark">
                <tr className="d-flex">
                  <th scope="col" className="col-md">
                    #
                  </th>
                  <th scope="col" className="col-md">
                    Event Name
                  </th>
                  <th scope="col" className="col-md" style={{}}>
                   Select 
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="d-flex">
                  <th scope="row" className="col-md"></th>
                  <td className="col-md"></td>
                  <td className="col-md">
                  <input className="TbCircleFilled" style={{height:"15px",width:"15px"}} type="checkbox" id="check" name="check1"/>
                  </td>
                </tr>
              </tbody>
            </table>
            </Row>
      </Container>
      <Row className="" style={{justifyContent:"center"}}>
        <button style={{width:"10%",fontWeight:"bolder"}} className="btn btn-outline-danger">Download</button>
     </Row>



    </div>
  );
}
export default DownloadCertificate;
