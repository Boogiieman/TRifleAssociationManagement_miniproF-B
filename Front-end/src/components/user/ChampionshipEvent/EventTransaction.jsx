import React from 'react';
import Header from '../../Navbaru';
import TransactionDetails from '../Fees_Membership_Components/TransactionDetails';
import { Navbar, Nav, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function EventTransaction() {
  return (
    <div className="container-fluid" style={{maxwidth:"0px",padding:"0px"}}>
            <div className="row-fluid" style={{marginLeft:"10px",marginRight:"10px"}}>
            <Header/>
            </div>
            
            <TransactionDetails 
            linkSave = '/'
            linkSubmit = '/EventSlot' />
        </div>
  );
}

export default EventTransaction;
