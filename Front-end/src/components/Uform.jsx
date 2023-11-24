import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Combobox from "react-widgets/Combobox";
import 'react-widgets/styles.css';
import { Link } from "react-router-dom";

function Uform() {
  const [selectedImageSrc, setSelectedImageSrc] = useState("https://surgassociates.com/wp-content/uploads/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.jpg");

  function displaySelectedImage(event) {
    const fileInput = event.target;

    if (fileInput.files && fileInput.files[0]) {
      const reader = new FileReader();

      reader.onload = function (e) {
        setSelectedImageSrc(e.target.result);
      };

      reader.readAsDataURL(fileInput.files[0]);
    }
  }

  return (
    <Container className="Uform" style={{ marginLeft: "0px", maxWidth: "100%" }}>
      <h3 className="my-4" style={{ color: "grey", fontWeight: "bold", alignItems: "left" }}>Profile Details</h3>
      <Row>
        <Col md>
          <Form>
            <div className="form-row">
              <Col>
                <input type="text" className="form-control" placeholder="First name" required />
              </Col>
              <Col>
                <input type="text" className="form-control" placeholder="Last name" pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}" required />
              </Col>
            </div>

            <div className="form-row">
              <Col>
                <input type="email" className="form-control" placeholder="Email" required />
              </Col>
            </div>

            <div className="form-row">
              <Col>
                <input type="tel" className="form-control" placeholder="Whatsapp no" pattern="[0-9]{10}" required />
              </Col>
            </div>

            <div className="form-row">
              <Col>
                <input type="number" className="form-control" placeholder="Last 4 Digits of Aadhar" pattern="[0-9]{4}" required />
              </Col>
            </div>
            
            <div className="form-row d-flex align-items-center">
            <Col className=""  md={2}>
              <label style={{fontWeight:"bold",paddingTop:"5px"}}>Date of Birth</label>
            </Col>
            <Col md={10}>
            <input type="date" className="form-control" placeholder="DOB" style={{ color: "grey" }} required />
            </Col>
            </div>
            

            <div className="form-row" >
                <Col>
                <input type="text" className="form-control" placeholder="Name of Guardian" required />
                </Col>
                <Col>
                <input type="text" className="form-control" placeholder="Relation" required />
                </Col>
            </div>

            <div className="form-row" >
            
            <Col md={12}>
              <Combobox
                data={["Male","Female","non-binary"]}
                placeholder="Select Gender"
              required/>
            </Col>
            </div>

          </Form>
        </Col>

        <Col md={2}>
    <h6 style={{ textAlign: 'left', color: 'gray', fontWeight: 'bold' }}>Upload Receipt</h6>
  </Col>

  <Col md={5} className="custom-file-input">
    <label htmlFor="receiptFile" className="custom-file-label">
      Choose File
    </label>
    <input type="file" id="receiptFile" className="custom-file-input" accept=".pdf, .jpg, .jpeg, .png" required />
  </Col>
      </Row>

      <hr className="rounded" />
      <Row>
        <Col className="text-left">
          <h3 className="my-4" style={{ color: "grey", fontWeight: "bold" }}>Contact Details</h3>
        </Col>
      </Row>

      <div className="form-row" >
        <Col>
          <input type="text" className="form-control" placeholder="House Name" required />
        </Col>
        <Col>
          <input type="text" className="form-control" placeholder="Land Mark" required />
        </Col>
      </div>

      <div className="form-row">
        <Col>
        <Combobox
                data={["Kerala","Delhi","Manipur"]}
                placeholder="Select State"
              required/>
        </Col>
        <Col>
        <Combobox
                data={["Tvpm","Kollam","Ekm"]}
                placeholder="Select District"
              required/>
        </Col>
        <Col>
          <input type="number" className="form-control" placeholder="Pincode" pattern="[0-9]{6}" required />
        </Col>
        </div>

      <div className="form-row" >
        <Col >
          <textarea  className="form-control" placeholder="Address" required />
        </Col>
        
      </div>

      

      
      <hr className="rounded" />



      <Row>
        <Col className="text-left">
          <h3 className="my-4" style={{ color: "grey", fontWeight: "bold" }}>Other Details</h3>
        </Col>
      </Row>

    
      <div className="form-row" >
        <Col>
        <Combobox
                data={["Yes","No"]}
                placeholder="Are you a Para Shooter ?"
              required/>
        </Col>
        
        <Col>
          <input type="text" className="form-control" placeholder="NRAI Shooter ID" required />
        </Col>
        </div>
        <div className="form-row">
        <Col>
        <Combobox
                data={["Yes","No"]}
                placeholder="Do you have a Firearm License ?"
              required/>
        </Col>
        <Col>
          <input type="text" className="form-control" placeholder="Firearm License Details"  />
        </Col>
      </div>

      <div className="form-row d-flex justify-content-center" style={{ padding: "20px" }}>
        <Link to="/member_event" style={{ textDecoration: "none" }}>
          <Button className="btn-info btn-rounded" style={{ color: "white", fontWeight: "bolder" }}>Submit</Button>
        </Link>
      </div>
      

      
    </Container>
  );
}

export default Uform;
