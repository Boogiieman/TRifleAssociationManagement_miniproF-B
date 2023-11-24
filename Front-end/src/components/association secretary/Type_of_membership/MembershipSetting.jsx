import React from "react";
import Header from "../../Navbaru";
import { Navbar, Nav, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function MembershipSetting() {
  return (
    <div className="mainDiv">
      <div className="subDiv">
        <h1 className="main-heading"> List of Membership Types</h1>
      </div>
      <Container className="d-flex" style={{padding:"40px"}}>
        <Col>
          <table className="table" style={{ justifyContent: "center" }}>
            <thead className="thead-dark">
              <tr className="d-flex">
                <th scope="col" className="col-md">
                  #
                </th>
                <th scope="col" className="col-md">
                  Name of Membership
                </th>
                <th scope="col" className="col-md" style={{}}>
                  First Amount
                </th>
                <th scope="col" className="col-md" style={{}}>
                  Annual Amount
                </th>
                <th scope="col" className="col-md" style={{}}>
                  Manage
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="d-flex">
                <th scope="row" className="col-md">
                  
                </th>
                <td className="col-md">

                </td>
                <td className="col-md" >

                </td>
                <td className="col-md" >

                </td>
                <td className="col-md">
                <button type="button" style={{marginLeft:"2px"}} className="btn btn-outline-success">Edit</button>
                <button type="button" style={{marginLeft:"2px"}} className="btn btn-outline-danger">Activate</button>
                </td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Container>
    </div>
  );
}
export default MembershipSetting;
