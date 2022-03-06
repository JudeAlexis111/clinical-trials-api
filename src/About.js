import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { GoogleMap, LoadScript, Marker} from '@react-google-maps/api';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, { useState } from 'react';
import { MDBCol, MDBIcon } from "mdbreact";
import $ from 'jquery';
import { useEffect } from "react";

function About() {

  

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
      <h1 id="title" class="ab"><mark>About Us</mark></h1>
    </div>
    </div>

    <body class="centered">
    <h2>Our Mission</h2>
    <p>To break barriers to equitable inclusion of diverse participants in clinical trials.</p>

    <h2>Our Values</h2>
    <p>
    We are transparent, open and honest. We strive to provide a trusted platform that is study particpant centric.
    <br></br>
    <br></br>
    We are innovative. We actively pursue new ways to further our mission.
    <br></br>
    We have grit. We are resilient, resourceful and scrappy. We see challenges as opportunities.
    With passion and courage, we come together to get the job done.
    </p>

    <h2>About Glassdoor</h2>
    <p>
    Glassdoor is the worldwide leader on insights about jobs and companies.
    <br></br>
    <br></br>
    Built on the foundation of increasing workplace transparency, Glassdoor offers 
    insights into the employee experience powered by millions of company ratings and 
    reviews, CEO approval ratings, salary reports, interview reviews and questions, 
    benefits reviews, office photos and more, combined with the latest jobs. Unlike 
    other career sites, all of this information is shared by those who know a company 
    best — the employees. In turn, job seekers on Glassdoor are well-researched and 
    more informed about the jobs and companies they apply to and consider joining. 
    This is why thousands of employers across all industries and sizes turn to Glassdoor 
    to help them recruit and hire quality candidates at scale who stay longer. Glassdoor 
    is available anywhere via its mobile apps.
    <br></br>
    <br></br>
    Glassdoor operates as a part of Recruit Holdings’ growing HR Technology business segment. 
    Glassdoor is headquartered in San Francisco, California and was founded by Robert Hohman, 
    Rich Barton and Tim Besse in 2007, before its launch in 2008.
    </p>
    </body>

    </div>
  );
}

export default About;