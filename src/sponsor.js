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

function Sponsor() {

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
    <img id="headerImg" class="b" src='/medical.jpeg' width="100%" height="300"/>
    <div class="centeredTwo">
      <h1 id="title" class="j"><mark>Take the first step in hiring diverse participants</mark></h1>
    </div>
    </div>
    
    <body class="sForm">
        <br></br>
        <br></br>
    <p class="intro">Your next study participant is researching your study 
    on Community Clinical Trials. Take control of the conversation and show 
    study participants why they want to engage with you.</p>
    <br></br>

    <form>
    <div class="container">
                <hr></hr>

            <label for="email"><b>&nbsp;First Name 
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            Last Name</b></label>
            <br></br>
            <input type="textSP" placeholder="First Name" name="email" id="email" required></input>
            &emsp;&emsp;&emsp;
            <input type="textSP" placeholder="First Name" name="email" id="email" required></input>

            <br></br>
            <label for="psw"><b>Company</b></label>
            <input type="textSPF" placeholder="Company" name="psw" id="psw" required></input>

            <br></br>
            <label for="psw"><b>Study Participant Validation API Endpoint</b></label>
            <input type="textSPF" placeholder="Company" name="psw" id="psw" required></input>

            <label for="psw"><b>Email Address</b></label>
            <input type="textSPF" placeholder="Email Address" name="psw" id="psw" required></input>

            <label for="psw-repeat"><b>Password</b></label>
            <input type="password" placeholder="Password" name="psw-repeat" id="psw-repeat" required></input>
            <label for="psw-repeat"><b>Repeat Password</b></label>
            <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required></input>
            <hr></hr>
    
            <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>

        <button type="submit" class="registerbtn">Register</button>
        </div>

        <div class="container signin">
        <p>Already have an account? <a class="signIn" onClick={() => setShow(true)} >Sign in</a>.</p>
        </div>

    </form>
    </body>

    <Modal
        size="lg"
        show={show}
        onHide={() => setShow(false)}
        aria-labelledby="example-modal-sizes-title-lg">

        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Sign In
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>

            <label for="psw"><b>Email Address</b></label>
            <input type="textSPF" placeholder="Email Address" name="psw" id="psw" required></input>

            <label for="psw-repeat"><b>Password</b></label>
            <input type="password" placeholder="Password" name="psw-repeat" id="psw-repeat" required></input>

        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" href="/dashboard">
            Sign In
          </Button>
        </Modal.Footer>

    </Modal>

    </div>
    
  );
}

export default Sponsor;
