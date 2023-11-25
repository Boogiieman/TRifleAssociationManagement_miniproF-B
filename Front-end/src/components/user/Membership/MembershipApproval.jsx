import React from "react";
import Header from "../../Navbaru";
import SideNav from "../../Sidebar";
import Combobox from "react-widgets/Combobox";
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
function MembershipApproval(){
    return(
        <div className="container-fluid" style={{maxwidth:"0px",padding:"0px"}}>
            <div className="row-fluid" style={{marginLeft:"10px",marginRight:"10px"}}>
            <Header/>
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
            Membership Approval
          </h1>
        </Row>
      
      <Row
        className="row-fluid"
        style={{ padding: "2px", justifyContent: "space-between"}}
      >
        <Col className="d-flex" style={{alignItems:"center"}}>
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
        <Col className="d-flex justify-content-end" style={{alignItems:"center"}}>
          <h5 className="color" style={{ marginRight: "15px" }}>
            Status{" "}
          </h5>
          <Combobox
            data={["Verified with Comments","Verification Complete"]}
            placeholder="Status"
            required
          />
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
      <Row style={{padding:"30px"}}>
                <div>
                <table class="table" style={{textAlign:"center"}}>
                    <thead class="thead-dark">
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name of Applicant</th>
                        <th scope="col">Type of Membership</th>
                        <th scope="col">Fees Paid</th>
                        <th scope="col">Phone No:</th>
                        <th scope="col">Manage</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Billy</td>
                        <td>Premium</td>
                        <td>6000Rs</td>
                        <td>9443338893</td>
                        <td>
                        <Link to={"/MembershipApprovalApplicationDetails"}><button className="btn btn-outline-success">View</button></Link>
                        </td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </Row>
            </div>

        </div>
        
    );
}export default MembershipApproval;