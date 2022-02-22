import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { GoogleMap, LoadScript, Marker} from '@react-google-maps/api';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, { useState } from 'react';
import { MDBCol, MDBIcon } from "mdbreact";
import $ from 'jquery';
import {Component} from 'react';
import { useEffect } from "react";
import Chart from './components/Chart'

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
      <h1 id="title" class="k"><mark>Studies Dashboard</mark></h1>
    </div>
    </div>

    <div class="row">
  <div class="left">
    <h1 class="l">Menu</h1>
    <input type="text" id="mySearch" onkeyup="myFunction()" placeholder="Search.." title="Type in a category"></input>
    <ul class="a" id="myMenu">
      <li><a href="#"> <i class="fa fa-plus"> </i> &emsp;New Studies</a></li>
      <li><a href="#"> <i class="fa fa-comment"> </i> &emsp;Reviews</a></li>
      <li><a href="#"> <i class="fa fa-building"> </i> &emsp;Organization</a></li>
      <li><a href="#"> <i class="fa fa-check"> </i>&emsp;Authentication</a></li>
      <li><a href="#"> <i class="fa fa-user"> </i> &emsp;Interactions</a></li>
      <li><a href="#"> <i class="fa fa-clipboard"> </i> &emsp;Campaigns</a></li>
      <li><a href="#"> <i class="fa fa-calendar"> </i> &emsp;My Calendar</a></li>
      <li><a href="#"> <i class="fa fa-database"> </i> &emsp;My Data</a></li>
      <li><a href="#"> <i class="fa fa-photo"> </i> &emsp;My Media</a></li>
    </ul>
  </div>
  
  <div class="right">
    <h2>Dashboard</h2>

    <section>
        <div class="splitTracker-container">
            <div class="tracker-container">
            <div class="tracker-item2">
                <h1 class="m">Interactions</h1>
                <h1 class="n">143 <h1 class="o">+5% <i class="fa fa-arrow-up"></i> </h1> </h1>
                <button class="buttonTracker">View Report</button>
            </div>

            <div class="tracker-item3">
                <h1 class="m">Page Views</h1>
                <h1 class="p">1,357 <h1 class="q">+7.2% <i class="fa fa-arrow-up"></i> </h1> </h1>
                <img src="/graph.png" alt="Girl in a jacket"></img>

            </div>

            <div class="tracker-item4">
                <h1 class="r">Task Progress</h1>
                <div>
                    <ProgressBar animated now={60} label={`Confirm Org.`} />
                    <div class="space"></div>
                    <ProgressBar striped variant="success" label={`Finish Study #2`} animated now={90} />
                    <div class="space"></div>
                    <ProgressBar striped variant="info" label={`Moderate Review`} animated now={70} />
                    <div class="space"></div>
                    <ProgressBar striped variant="warning" label={`Add Campaign`} animated now={60} />
                    <div class="space"></div>
                    <ProgressBar striped variant="danger" label={`Link Your Data`} animated now={80} />
                </div>
            </div>

            <div class="tracker-bt1">
                <h1 class="s">37 <h1 class="t">(-7.2%) <i class="fa fa-arrow-down"></i> </h1> </h1>
                <h1 class="u">participants</h1>
                <i class="fa fa-user fa-5x"></i>
            </div>

            <div class="tracker-bt2">
                <h1 class="v">12 <h1 class="x">(-7.2%) <i class="fa fa-arrow-up"></i> </h1> </h1>
                <h1 class="w">shares</h1>
                <i class="fa fa-twitter fa-6x"></i>
            </div>
            <div class="tracker-bt3">
                <h1 class="y">3 </h1>
                <h1 class="z">studies</h1>
                <i class="fa fa-file fa-7x"></i>
            </div>  
        </div>
        <div class="tracker-container1">
            <div class="tracker-item1">
            
            </div>
        </div>
        </div>
    </section>

  </div>
</div>


<Chart />
<h1 class="aa">Ethnic Makeup of Interested Participants</h1>
    </div>
    
  );
}

export default Dashboard;
