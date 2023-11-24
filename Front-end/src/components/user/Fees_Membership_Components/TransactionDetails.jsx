import React from "react";
import { Navbar, Nav, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function TransactionDetails(props) {
  return (
    <div className="row-fluid" style={{ textAlign: "center", padding: "90px" }}>
      <h1 className="main-heading">Transaction Details</h1>
      <Container>
        <Row style={{ paddingTop: "30px", justifyContent: "center" }}>
          <Col md={2}>
            <h6
              style={{ textAlign: "left", color: "gray", fontWeight: "bold" }}
            >
              Transaction Number
            </h6>
          </Col>

          <Col md={5}>
            <input
              type="text"
              className="form-control"
              placeholder="Transaction Type:"
              required
            />
          </Col>
        </Row>

        <Row style={{ paddingTop: "30px", justifyContent: "center" }}>
          <Col md={2}>
            <h6
              style={{ textAlign: "left", color: "gray", fontWeight: "bold" }}
            >
              Transaction Date
            </h6>
          </Col>

          <Col md={5}>
            <input
              type="date"
              className="form-control"
              placeholder="Date"
              required
            />
          </Col>
        </Row>

        <Row style={{ paddingTop: "30px", justifyContent: "center" }}>
          <Col md={2}>
            <h6
              style={{ textAlign: "left", color: "gray", fontWeight: "bold" }}
            >
              Upload Receipt
            </h6>
          </Col>

          <Col md={5} className="d-flex" style={{ justifyContent: "left" }}>
            <input
              style={{ justifyContent: "left" }}
              type="file"
              accept=".pdf, .jpg, .jpeg, .png"
              required
            />
          </Col>
        </Row>

        {/*} <Row style={{ padding: '30px', paddingTop: '50px', textAlign: 'center' }}>
        <Col style={{}}>
          <Link to={props.link}>
            <Button
              className="btn-info btn-rounded"
              style={{ color: 'white', fontWeight: 'bolder', width: '79.6px' }}
            >
              Save
            </Button>
            </Link>
          </Col>
          <Col style={{marginRight:""}}>
          <Link to={props.link}>
            <Button
              className="btn-info btn-rounded"
              style={{ color: 'white', fontWeight: 'bolder', width: '79.6px' }}
            >
              Submit
            </Button>
            </Link>
          </Col>
        </Row>*/}
        <Row style={{ paddingTop: "30px", justifyContent: "center" }}>
          <Col md={2}></Col>

          <Col md={5} className="d-flex" style={{ justifyContent: "right" }}>
            <Link to={props.linkSave}>
              <button
                className="btn btn-outline-success"
                style={{
                  marginRight:
                    "5px" /* color: 'white', fontWeight: 'bolder', width: '79.6px' */,
                }}
              >
                Save
              </button>
            </Link>
            <Link to={props.linkSubmit}>
              <button
                className="btn btn-outline-info"
                style={
                  {
                    /* color: 'white', fontWeight: 'bolder', width: '79.6px' */
                  }
                }
              >
                Submit
              </button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TransactionDetails;
