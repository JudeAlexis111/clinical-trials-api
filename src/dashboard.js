import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { GoogleMap, LoadScript, Marker} from '@react-google-maps/api';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, { useState } from 'react';
import { MDBCol, MDBIcon } from "mdbreact";
import $ from 'jquery';
import { useEffect } from "react";

function Dashboard() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

  return (
      <div>
          <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Community Clinical Trials</Navbar.Brand>

        <Navbar.Brand href="/">
          <img
            src="/logo192.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/sponsor">Study Sponsor</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>
        Signed in as: <a href="#login">Jude Alexis</a>
      </Navbar.Text>
    </Navbar.Collapse>

      </Container>
    </Navbar>

    <div className='bg-image'>
    <img id="headerImg" class="b" src='/medical.jpeg' width="100%" height="250"/>
    <div class="centeredTwo">
      <h1 id="title" class="j"><mark>Studies Dashboard</mark></h1>
    </div>
    </div>

    </div>
    
  );
}

export default Dashboard;
