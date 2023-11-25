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

function ParticipantsList() {
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
            Participants List
          </h1>
        </Row>
      </Container>
      <Container
        className="align-items-center"
        style={{ padding: "40px", paddingTop: "0px", justifyContent: "left" }}
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
                    paddingBottom: "",
                    paddingRight: "5px",
                  }}
                >
                  Event
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
            <Row
              className="d-flex"
              style={{ justifyContent: "center", width: "100%" }}
            >
              <Col
                className="d-flex align-items-center"
                style={{ justifyContent: "center" }}
              >
                <div style={{}}>
                  <p className="round3">
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
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Container 
        className="d-flex"
        style={{ padding: "40px", marginTop: "30px", justifyContent: "left" }}>
      <table className="table" style={{ justifyContent: "center" }}>
              <thead className="thead-dark">
                <tr className="d-flex">
                  <th scope="col" className="col-md">
                    #
                  </th>
                  <th scope="col" className="col-md">
                    Competitor No:
                  </th>
                  <th scope="col" className="col-md" style={{}}>
                    Name of Participant
                  </th>
                  <th scope="col" className="col-md" style={{}}>
                    Unit/Club
                  </th>
                  <th scope="col" className="col-md" style={{}}>
                    Age Category
                  </th>
                  <th scope="col" className="col-md" style={{}}>
                    Event Category
                  </th>
                  <th scope="col" className="col-md" style={{}}>
                    Line No:
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
                  <td className="col-md"></td>
                </tr>
              </tbody>
            </table>
            
      </Container>
      <Row className="" style={{justifyContent:"center"}}>
        <button style={{width:"10%",fontWeight:"bolder"}} className="btn btn-outline-danger">Download</button>
     </Row>



    </div>
  );
}
export default ParticipantsList;
{
  /*<Col md={5} className="d-flex align-items-center" style={{justifyContent:"space-between"}}>
            <h4
              className="color"
              style={{
                justifyContent: "left",
                paddingBottom: "",
                paddingRight:"5px"
              }}
            >
              Championship
            </h4>
            <Combobox
              width="100%"
              placeholder=""
              data={['']}
            />
          </Col>
          <Col md={5} className="d-flex align-items-center" style={{justifyContent:"center",verticalAlign:"middle"}}>
            <div style={{}}>
            <p className="round3" >
              <label className="color" style={{fontWeight:"bolder",marginRight:"10px"}}>
                <input type="radio" name="viewType" value="eventWise" style={{marginRight:"5px"}}/>
                Event Wise
              </label>
              <label className="color" style={{fontWeight:"bolder",marginRight:"10px"}}>
                <input type="radio" name="viewType" value="slotTimeWise" style={{marginRight:"5px"}}/>
                Slot Time Wise
              </label>
              </p>
            </div>
          </Col>
        </Row>

        <Row className="d-flex align-items-center" style={{justifyContent:"center" ,width:"100%"}}>
          <Col md={5} className="d-flex align-items-center" style={{justifyContent:"space-between"}}>
            <h4
              className="color"
              style={{
                justifyContent: "left",
                paddingBottom: "",
                paddingRight:"5px"
              }}
            >
              Event
            </h4>
            <Combobox
              width="100%"
              placeholder=""
              data={['']}
            />
          </Col>
          <Col md={5} className="d-flex align-items-center" style={{justifyContent:"center",verticalAlign:"middle"}}>
          </Col>
        </Row>

        <Row className="d-flex align-items-center" style={{justifyContent:"center", width:"100%",paddingTop:"10px"}}>
          <Col md={5} className="d-flex align-items-center" style={{justifyContent:"space-between"}}>
            <h4
              className="color"
              style={{
                justifyContent: "left",
                paddingBottom: "",
                paddingRight:"5px"
              }}
            >
              Time Slot
            </h4>
            <Combobox
              width="100%"
              placeholder=""
              data={['']}
            />
          </Col>
          <Col md={5} className="d-flex align-items-center" style={{justifyContent:"center",verticalAlign:"middle"}}>
          </Col>*/
}
