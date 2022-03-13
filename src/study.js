
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
import { Helmet } from 'react-helmet';

const containerStyle = {
    width: '530px',
    height: '400px'
  };
  
  const options = {
    disableDefaultUI: true,
    zoomControl: true
  };

  const center = {
    lat: parseFloat(window.location.href.split("?").pop().split(",")[2]),
    lng: parseFloat(window.location.href.split("?").pop().split(",")[1])
  };

function Study(){

  //handleCloseTwo

  const [show, setShow] = useState(false);
  const [showTwo, setShowTwo] = useState(false);

  const [scrollable, setScrollabe] = useState(true);

  const handleShow = () => setShow(true);
  const handleShowTwo = () => setShowTwo(true);

  const handleClose = () => setShow(false);
  const handleCloseTwo = () => setShowTwo(false);

  const sendEmail = (() => {
    var x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    setShow(false);
  });

  const fullTxt = (() => {
    document.getElementById('intervention').innerText = localStorage.getItem("baseStr");
  });
  const shrunkTxt = (() => {
    document.getElementById('intervention').innerText = localStorage.getItem("trimStr");
  });

    useEffect(() => {
        // Update the document title using the browser API
        var url = window.location.href;
        var str = "";
        var studyUrl = "";
        var block;

        console.log(center);

        url = url.split("?").pop();
        str = url.split(",")[0];
        studyUrl = url.split(",")[6];
        console.log(url.split(",")[6]);

        $.getJSON(studyUrl, function(data) {
            // JSON result in `data` variable
            console.log(data.studies[parseInt(str)]);
            populatePage(data.studies[parseInt(str)]);
          });

          function populatePage(value){
            //var image = document.createElement('img');
            //image.className = "c";
            //image.src = value.imageUrl;

            var map = document.getElementById('map');
            //map.innerHTML = map.innerHTML.replace(/-3.745,-38.523/g,'29.97,31.13');

            //console.log(value);
            localStorage.setItem("studyName", value.name);
            localStorage.setItem("criteria", value.eligibility.eligibilityCriteria);
            localStorage.setItem("url", value.detailedStudyInfoUrl);

            document.getElementById('headerImg').src = value.imageUrl;
            document.getElementById('age').innerText = value.eligibility.minimumAge;

            document.getElementById('gender').innerText = value.eligibility.gender;
            //document.getElementById('intervention').innerText = value.locationZip;

           try{
              var baseStr = "";
              
              // if(/\d/.test((value.interventions[0].InterventionName))){
              //   baseStr = value.interventions[0].InterventionDescription;
              // } else{
              //   baseStr = value.interventions[0].InterventionName;
              // }
              baseStr = value.interventions[0].InterventionType+", "+value.interventions[0].InterventionDescription
              var trimmedString = baseStr.substring(0,30) + "...";

              localStorage.setItem("baseStr", baseStr);
              localStorage.setItem("trimStr", trimmedString);

              document.getElementById('intervention').innerText = trimmedString;

              //document.getElementById('intervention').innerText = baseStr.charAt(0).toUpperCase();
              // + baseStr.slice(1);
            } catch{

              localStorage.setItem("baseStr", "Not Available");
              localStorage.setItem("trimStr", "Not Available");

              document.getElementById('intervention').innerText = "Not Available";
            }
            //value.interventions[0].InterventionName.charAt(0).toUpperCase() 
            //+ value.interventions[0].InterventionName.slice(1);

            document.getElementById('duration').innerText = value.startDate + " - " + value.endDate;
            document.getElementById('title').innerText = value.name;
            document.getElementById('reviews').innerText = value.noOfReviews;

            document.getElementById('dothis').innerText = value.eligibility.eligibilityCriteria;
            document.getElementById('description').innerText = value.briefDescription.replace(/(\r\n|\n|\r)/gm, "");

            if(value.rating == 1){
                document.getElementById('star1').className = "fa fa-star checked fa-1x"
            } else if(value.rating == 2){
                document.getElementById('star1').className = "fa fa-star checked fa-1x"
                document.getElementById('star2').className = "fa fa-star checked fa-1x"

            } else if(value.rating == 3){
                document.getElementById('star1').className = "fa fa-star checked fa-1x"
                document.getElementById('star2').className = "fa fa-star checked fa-1x"
                document.getElementById('star3').className = "fa fa-star checked fa-1x"

            } else if(value.rating == 4){
                document.getElementById('star1').className = "fa fa-star checked fa-1x"
                document.getElementById('star2').className = "fa fa-star checked fa-1x"
                document.getElementById('star3').className = "fa fa-star checked fa-1x"
                document.getElementById('star4').className = "fa fa-star checked fa-1x"

            } else if(value.rating == 5){
                document.getElementById('star1').className = "fa fa-star checked fa-1x"
                document.getElementById('star2').className = "fa fa-star checked fa-1x"
                document.getElementById('star3').className = "fa fa-star checked fa-1x"
                document.getElementById('star4').className = "fa fa-star checked fa-1x"
                document.getElementById('star5').className = "fa fa-star checked fa-1x"

            }
          }

      });

  return (
    <div id="fillMe">
                  <Helmet>
              <title>Clinical Trials</title>
            </Helmet>
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
    </Navbar.Collapse>

      </Container>
    </Navbar>

    <div className='bg-image'>
    <img id="headerImg" class="b" src='/medical.jpeg' width="100%" height="600"/>
    <div class="bottom-left">
      <h1 id="title" class="g">Discover</h1>
        <div class="stars">
            <span id="star1" class="fa fa-star fa-1x"></span>
            <span id="star2" class="fa fa-star fa-1x"></span>
            <span id="star3" class="fa fa-star fa-1x"></span>
            <span id="star4" class="fa fa-star fa-1x"></span>
            <span id="star5" class="fa fa-star fa-1x"></span>
        </div>
        <h1 id="reviews" class="reviewNum"> 123 reviews</h1>
    </div>
    </div>

<section>
  
  <article>

  <div class="row">
  <div class="column">
    <div class="card2">
      <p><i class="fa fa-calendar fa-1x"></i></p>
      <h3>Duration</h3>
      <p id="duration"></p>
    </div>
  </div>

  <div class="column">
    <div class="card2">
      <p><i class="fa fa-child fa-1x"></i></p>
      <h3>Min. Age</h3>
      <p id="age"></p>
    </div>
  </div>
  
  <div class="column">
    <div class="card2">
      <p><i class="fa fa-venus-mars fa-1x"></i></p>
      <h3>Gender</h3>
      <p id="gender"></p>
    </div>
  </div>

  
  <div id="cardInt" class="column">
    
    <div class="card2">
      <p><i class="fa fa-file fa-1x"></i></p>
      <h3>Intervention</h3>
        <p class="expand" id="intervention">
        </p>
    </div>
    
  </div>
</div>


  <div class="card3">
    <div class="container">
      <h4 class="indTitle"><b>Description</b></h4> 
      <p id="description"></p> 
    </div>
  </div>

  <div class="card3">
    <div class="container">
      <h4 class="indTitle"><b>Eligibility Criteria</b></h4> 
      <p id="dothis"></p> 
    </div>
  </div>

  <button onClick={handleShow} class="button button2">Interested? Check Eligibility</button>
  <button onClick={handleShowTwo} class="button button3">Share Your Experience</button>

  <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Email Your Physician</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>To: 
            <input type="text" id="fname" name="firstname" placeholder="Physician name"></input>
            at
            <input type="text" id="fname" name="firstname" placeholder="Physician email"></input>
          </p>

          <p>From: 
            <input type="text" id="fname" name="firstname" 
            placeholder="Your name"></input>
            at
            <input type="text" id="fname" name="firstname" placeholder="Your email"></input>
          </p>

          <p>Subject: 
            <input type="text2" id="subjectName" name="firstname" value={localStorage.getItem("studyName")}></input>
          </p>
          
          <form>
          <textarea 
            value = {"I am interested in participating in " + localStorage.getItem("studyName")
            + ". " + localStorage.getItem("criteria") + "\n\nFor more info see: " 
            + localStorage.getItem("url")}>
          </textarea>
          </form>

        </Modal.Body>
        
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={sendEmail}>
            Send Email
          </Button>
        </Modal.Footer>
      </Modal>

      
      <Modal size="lg" scrollable={scrollable} show={showTwo} onHide={handleCloseTwo}>
        <Modal.Header closeButton>
          <Modal.Title>Write Review</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p> Name: 
            <input type="text" value={window.location.href.split("?").pop().split(",")[3]} id="fname" name="firstname" placeholder="First Name"></input>
            <input type="text" value={window.location.href.split("?").pop().split(",")[4]} id="fname" name="firstname" placeholder="Last Name"></input>
            &emsp;&emsp;&emsp;&emsp; Sex: 
            <select class="a" id="country" name="country">
              <option value="australia">Male</option>
              <option value="canada">Female</option>
            </select>
           </p>

           <p> 
            Age: 
            <select class="b" id="country" name="country">
              <option value="canada">18-28</option>
              <option value="canada">29-39</option>
              <option value="canada">40-50</option>
              <option value="canada">51-61</option>
              <option value="canada">62-63</option>
            </select>
            &emsp;&emsp;&emsp;&emsp;Race: 
            <input type="text3" id="fname" name="firstname" placeholder="Race"></input>

            <label class="containerGood"> <p class="checkLabel">Keep my personal info. hidden</p>
            <input type="checkbox" ></input>
            <span class="checkmark"></span>
          </label>

           </p>
          <br></br>
          <h1 class="i">Rate & Share your experience</h1>

          <form class="rating">
          <label>
            <input type="radio" name="stars" value="1" />
            <span class="icon">★</span>
          </label>
          <label>
            <input type="radio" name="stars" value="2" />
            <span class="icon">★</span>
            <span class="icon">★</span>
          </label>
          <label>
            <input type="radio" name="stars" value="3" />
            <span class="icon">★</span>
            <span class="icon">★</span>
            <span class="icon">★</span>   
          </label>
          <label>
            <input type="radio" name="stars" value="4" />
            <span class="icon">★</span>
            <span class="icon">★</span>
            <span class="icon">★</span>
            <span class="icon">★</span>
          </label>
          <label>
            <input type="radio" name="stars" value="5" />
            <span class="icon">★</span>
            <span class="icon">★</span>
            <span class="icon">★</span>
            <span class="icon">★</span>
            <span class="icon">★</span>
          </label>
        </form>

          <form>
          <textarea placeholder='Enter your response'>
          </textarea>
          </form>

          <h1 class="i">Did the study team explain the risks and benefits?</h1>
          
          <form>
          <textarea placeholder='Enter your response'>
          </textarea>
          </form>

          <h1 class="i">Any financial compensation for your time/travel?</h1>
          
          <form>
          <textarea placeholder='Enter your response'>
          </textarea>
          </form>

          <h1 class="i">Any advice to the study sponsor?</h1>
          
          <form>
          <textarea placeholder='Enter your response'>
          </textarea>
          </form>
          

        </Modal.Body>
        
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseTwo}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleCloseTwo}>
            Post Review
          </Button>
        </Modal.Footer>
      </Modal>

  </article>

  <div class="map">

    <LoadScript
        googleMapsApiKey="AIzaSyBgrtrEe8fveSLFTHYg5hphVlqQ0yqnJcs"
      >
          
        <GoogleMap id="map" class="map"
          mapContainerStyle={containerStyle}
          center={center}
          options={options}
          zoom={15}
        >
          {
              <Marker
              icon={{
                fillColor: "yellow",
                strokeColor: "gold",
                scale: 7,
              }}
              position={center}
            />
          }
          <></>
        </GoogleMap>
      </LoadScript>

      </div>

      <div class="card5">
      <div class="container">
        <p>Barbra Streisand Women's Heart Center <i class="fa fa-building fa-4x"></i></p>
      </div>
      </div>

      <div class="card5">
      <div class="container">
        <p>310-423-9666 <i class="fa fa-phone fa-3x"></i></p>
      </div>
      </div>

      <div class="card5">
      <div class="container">
        <p>8700 Beverly Blvd Los Angeles, CA 90048 <i class="fa fa-map fa-2x"></i></p>
      </div>
      </div>
      
      <button class="hidden" onMouseOver={fullTxt} onMouseOut={shrunkTxt}></button>

</section>

<div id="snackbar">Email Sent!</div>

    </div>
    
  );

};
  
export default Study;