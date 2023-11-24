import React from 'react';
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
import { Combobox } from 'react-widgets';

function ChooseMembership() {
    return (
        <div class="row-fluid" style={{textAlign:"center",padding:"90px"}}>
        <h1 className="main-heading">Choose your Membership</h1>
        <Container>
            <Row style={{paddingTop:"30px", justifyContent: 'center' }}>
            
            <Col md={2}>
            <h6 style={{textAlign:"left",color:"gray",fontWeight:"bold"}}>Select Association</h6>
            </Col>
            <Col  md={5}>
            <Combobox
                style={{textAlign:"left"}}
                data={["One","Two","Three"]}
                placeholder="Select Association"
            required/>
            </Col>

            </Row>



            <Row style={{paddingTop: '30px', justifyContent: 'center' }}>
            
            <Col md={2}>
            <h6 style={{textAlign:"left",color:"gray",fontWeight:"bold"}}>Select Club</h6>
            </Col>
            <Col md={5}>
            <Combobox
                style={{textAlign:"left"}}
                data={["One","Two","Three"]}
                placeholder="Select Club"
              required/>
            </Col>
            </Row>
            <Row style={{paddingTop: '30px', justifyContent: 'center' }}>
            
            <Col md={2}>
            <h6 style={{textAlign:"left",color:"gray",fontWeight:"bold"}}>Membership Type</h6>
            </Col>
            <Col md={5}>
            <Combobox
                style={{textAlign:"left"}}
                data={["One","Two","Three"]}
                placeholder="Select Membership Type"
              required/>
            </Col>
            </Row>
            <Row style={{ padding:"30px", paddingTop: "50px" , justifyContent: 'center'  }}>
                <Col md={2}>

                </Col>
                <Col md={5} className='d-flex' style={{justifyContent:"right"}}>
                    <Link to='/membershipformdetails' style={{ textDecoration : "none" }} >
                    <button className="btn btn-outline-info" style={{fontWeight: "bolder"/* color: "white", fontWeight: "bolder", width: "79.6px" */}}>
                    Procceed
                    </button>
                    </Link>
                </Col>
            </Row>
        </Container>
        </div>
  );
}

export default ChooseMembership;
