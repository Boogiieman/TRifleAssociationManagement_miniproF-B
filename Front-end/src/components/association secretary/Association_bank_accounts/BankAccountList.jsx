import React from "react";
import Header from "../../Navbaru";
import { Navbar, Nav, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function BankAccountList(){
    return(
        <div className="mainDiv">
            <div className="subDiv">
            <h1
            className="main-heading"
            style={{ marginTop: "50px", marginBottom: "50px" }}
          >
            List of Bank Accounts
          </h1>
            </div>
            <Container className="d-flex" style={{padding:""}}>
            <Col>
          <table className="table" style={{ justifyContent: "center" }}>
            <thead className="thead-dark">
              <tr className="d-flex">
                <th scope="col" className="col-md">
                  #
                </th>
                <th scope="col" className="col-md">
                  Account Name
                </th>
                <th scope="col" className="col-md" style={{}}>
                  Account Number
                </th>
                <th scope="col" className="col-md" style={{}}>
                  Name of Bank
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
                
                </td>
              </tr>
            </tbody>
          </table>
        </Col>
            </Container>
        
        </div>
    );
}
export default BankAccountList;