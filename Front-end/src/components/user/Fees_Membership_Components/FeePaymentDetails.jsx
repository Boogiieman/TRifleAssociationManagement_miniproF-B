import React from "react";
import {
  Navbar,
  Nav,
  Button,
  NavDropdown,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { Combobox } from "react-widgets/cjs";

function FeePaymentDetails() {
  return (
    <div
      className="row-fluid"
      style={{ textAlign: "center", padding: "90px", paddingTop: "20px" }}
    >
      <h1 className="main-heading" style={{ textAlign: "left" }}>
        Fees Details
      </h1>
      <Container style={{ justifyContent: "center" }}>
        <Row style={{ paddingTop: "10px", justifyContent: "center" }}>
          <div className="col-md-1 ">
            <h4 style={{ color: "gray", fontWeight: "bolder" }}>1</h4>
          </div>

          <div className="col-md-2 ">
            <h4
              className=""
              style={{ textAlign: "left", color: "gray", fontWeight: "bold" }}
            >
              Mebership Fees :{" "}
            </h4>
          </div>

          <div className="col-md-1">
            <h5
              style={{
                color: "gray",
                fontWeight: "bolder",
                textAlign: "right",
              }}
            >
              5000
            </h5>
          </div>
        </Row>
        <Row
          style={{
            paddingTop: "10px",
            paddingBottom: "0px",
            justifyContent: "center",
          }}
        >
          <div className="col-md-1">
            <h4 style={{ color: "gray", fontWeight: "bolder" }}>2</h4>
          </div>

          <div className="col-md-2">
            <h4
              style={{ textAlign: "left", color: "gray", fontWeight: "bold" }}
            >
              ID Card Fees :{" "}
            </h4>
          </div>

          <div className="col-md-1">
            <h5
              style={{
                color: "gray",
                fontWeight: "bolder",
                textAlign: "right",
              }}
            >
              200
            </h5>
          </div>
        </Row>
        <Row
          style={{
            paddingTop: "0px",
            paddingBottom: "0px",
            justifyContent: "center",
          }}
        >
          <div className="col-md-1"></div>

          <div className="col-md-3">
            <hr className="underline" />
          </div>
        </Row>
        <Row
          style={{
            paddingTop: "10px",
            paddingBottom: "0px",
            justifyContent: "center",
          }}
        >
          <div className="col-md-1"></div>

          <div className="col-md-2">
            <h4
              style={{ textAlign: "left", color: "gray", fontWeight: "bold" }}
            >
              {" "}
              Total :{" "}
            </h4>
          </div>

          <div className="col-md-1">
            <h4
              style={{ color: "red", fontWeight: "bolder", textAlign: "right" }}
            >
              5200
            </h4>
          </div>
        </Row>
        <Row
          style={{
            paddingTop: "0px",
            paddingBottom: "0px",
            justifyContent: "center",
          }}
        >
          <div className="col-md-1"></div>

          <div className="col-md-3">
            <hr className="underline" />
          </div>
        </Row>
        <Row
          style={{
            paddingTop: "20px",
            paddingBottom: "0px",
            justifyContent: "center",
          }}
        >
          <div className="col-md-2">
            <h4
              style={{ textAlign: "center", color: "gray", fontWeight: "bold" }}
            >
              Payment Mode :{" "}
            </h4>
          </div>
          <div className="col-md-2">
            <Combobox
              data={["Online", "Offline"]}
              placeholder="Offline/Online"
              required
            />
          </div>
        </Row>

        <Row style={{ paddingTop: "40px", justifyContent: "center" }}>
          <Link to={"/TransactionMembership"}>
            <button
              className="btn btn-info"
              style={{
                color: "white",
                fontWeight: "bolder",
                marginRight: "5px",
                width:
                  "79.6px" /* color: 'white', fontWeight: 'bolder', width: '79.6px' */,
              }}
            >
              Save
            </button>
          </Link>
        </Row>

        {/*<Row style={{ paddingTop: "16px", textAlign: "center", padding: "30px", paddingTop: "50px" }}>
                <div className="col-md" style={{ textAlign: "center" }}>
                    <Button className="btn-info btn-rounded" style={{ color: "white", fontWeight: "bolder", width: "242.96px" }}>Pay Online</Button>
                </div>
                <div className="col-md-2">
                    <h1 style={{ textAlign: "center", color: "gray", fontWeight: "bold" }}>Or</h1>
                </div>
                <div className="col-md" style={{ textAlign: "center" }}>
                    <Button className="btn-info btn-rounded" style={{ color: "white", fontWeight: "bolder", width: "242.96px" }}>Upload Bank Transfer Details</Button>
                </div>
            </Row>*/}
      </Container>
    </div>
  );
}

export default FeePaymentDetails;
