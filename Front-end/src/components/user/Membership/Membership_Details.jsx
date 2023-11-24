import React from "react";
import Header from "../../Navbaru";
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
function MembershipDetails(){
    return( 
        <div className="container-fluid" style={{maxwidth:"0px",padding:"0px"}}>
            <div className="row-fluid" style={{marginLeft:"10px",marginRight:"10px"}}>
            <Header/>
            </div>
            <h1 className="main-heading text-center" style={{paddingTop:"100px"}}>Membership Details</h1>
            <Row style={{padding:"30px"}}>
                <div>
                <table class="table" style={{textAlign:"center"}}>
                    <thead class="thead-dark">
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name of Association</th>
                        <th scope="col">Type of Membership</th>
                        <th scope="col">Status</th>
                        <th scope="col">Manage</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td>TRA</td>
                        <td>Premium</td>
                        <td>Pending</td>
                        <td>View Application</td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>TRA</td>
                        <td>Premium</td>
                        <td>Approved</td>
                        <td>Download ID</td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>TRA</td>
                        <td>Premium</td>
                        <td>Rejected</td>
                        <td></td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </Row>
        </div>
        
    );
}
export default MembershipDetails;