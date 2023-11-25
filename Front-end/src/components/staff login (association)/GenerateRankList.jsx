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

function GenerateRankList() {
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
              paddingBottom: "0px",
              textDecoration: "underline"
            }}
          >
            Generate Rank List / Certificate
          </h1>
        </Row>
      </Container>
      <Container className="d-flex" style={{ paddingTop: "0px",paddingBottom:"0px",padding: "40px", marginTop: "0px", justifyContent: "" }}>
            <Row className="d-flex" style={{justifyContent:"",width:"100%"}}>
            <Col className="d-flex" md={6} style={{justifyContent:""}}> 
            <h4
            className="color"
            style={{
              justifyContent: "left",
              paddingBottom: "0px",marginRight:"20px"
            }}
          >
            Championship
          </h4>
          <Combobox placeholder="" data={[""]} />
            </Col>
            </Row>
        </Container>
          {/*<h4
            className="color"
            style={{
              justifyContent: "left",
              paddingBottom: "",marginRight:"20px"
            }}
          >
            Championship
          </h4>
          <Combobox placeholder="" data={[""]} />*/}
        

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
      <Row className="align-items-center"style={{justifyContent:"center"}}>
        <Col className="d-flex align-items-center" style={{justifyContent:"center"}}>
        <input className="TbCircleFilled" style={{height:"15px",width:"15px",marginRight:"10px"}} type="checkbox" id="GenerateRankList" name="GenerateRankList"/>
        <h4 className="color">Generate Rank List</h4>
        </Col>
        </Row>
        <Row className="align-items-center"style={{justifyContent:"center"}}>
        <Col className="d-flex align-items-center" style={{justifyContent:"center",paddingLeft:"27px"}}>
        <input className="TbCircleFilled" style={{height:"15px",width:"15px",marginRight:"10px"}} type="checkbox" id="GenerateCertificate" name="GenerateCertificate"/>
        <h4 className="color">Generate Certificate</h4>
        </Col>
      </Row>
      <Row className="" style={{justifyContent:"center",paddingTop:"30px"}}>
        <button style={{width:"10%",fontWeight:"bolder"}} className="btn btn-outline-success">Generate</button>
     </Row>



    </div>
  );
}
export default GenerateRankList;

