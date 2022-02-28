import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import Nav from 'react-bootstrap/Nav';
import { GoogleMap, LoadScript, Marker} from '@react-google-maps/api';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { MDBCol, MDBIcon, MDBFooter, MDBContainer, MDBRow} from "mdbreact";
import $ from 'jquery';
import { useEffect } from "react";
import { GoogleLogin } from 'react-google-login';


function Home(){

  
  const responseGoogle = (response) => {
    console.log(response);
    document.getElementById('loginButton').innerHTML = '';

    localStorage.setItem("userFirstName", response.profileObj.givenName);
    localStorage.setItem("userLastName", response.profileObj.familyName);
    localStorage.setItem("userEmail", response.profileObj.email);

    var signedIn = document.createElement('Navbar.Text');
    signedIn.innerHTML = "Signed in as: <a href='#login'>" + response.profileObj.name +"</a>";

    document.getElementById('loginButton').appendChild(signedIn);
  } 

  const [hideLightbox, setHideLightbox] = useState(true);
    
      console.log("hello")
    
      useEffect(() => {
        
        const studyList = []
        $.getJSON('https://api.jsonbin.io/b/620844571b38ee4b33b90eb8/5', function(data) {
          // JSON result in `data` variable
          console.log(data.studies);
          data.studies.forEach(populateList);

          localStorage.setItem("PickURL", 'https://api.jsonbin.io/b/620844571b38ee4b33b90eb8/5');
        });
        //console.log(studyList);
    
      }, []);

      function populateList(value) {
        console.log(value);
  
        var element = document.createElement("div");
        element.className = "grid-item";
  
        var image = document.createElement('img');
        image.className = "a";
        image.src = value.imageUrl;
        element.append(image);
      
        var title = document.createElement('h1');
        title.className = "c";
        title.innerText = value.name;
        element.appendChild(title);
  
        var date = document.createElement('h1');
        date.className = "f";
        var str = value.startDate + " - " + value.endDate;
        date.innerHTML = str.italics()
        element.appendChild(date);
    
        var state = document.createElement('h1');
        state.className = "e";
        state.innerText = value.locationCity + ", " + value.locationState;
        element.appendChild(state);
    
        var faci = document.createElement('h1');
        faci.className = "e";
        faci.innerText = value.locationFacility;
        element.appendChild(faci);
  
        var faci = document.createElement('h1');
        faci.className = "d";
        faci.innerText = "Description: " + value.briefDescription.replace(/(\r\n|\n|\r)/gm, "").substring(0,200) + "...";
        element.appendChild(faci);
  
        var button = document.createElement("button");
        button.className = "button";
        var btnTxt = document.createElement("a");
        btnTxt.href = "/study?"+ (value.id -1)+","+(value.longitude)+","+
        (value.latitude)+","+localStorage.getItem("userFirstName")+","+
        localStorage.getItem("userLastName")+","+localStorage.getItem("userEmail")
        +","+localStorage.getItem("PickURL");
        btnTxt.innerText = "Read More";

        button.appendChild(btnTxt);
        element.appendChild(button);
  
        document.getElementById('lc').appendChild(element);

        setHideLightbox(true);
        
      }

      function clearList(){
        //Clear and Setup
        console.log("cleared")
        document.getElementById('lc').innerHTML = '';
        document.getElementById('RecentStudies').innerText = "Results for " + "'" + document.getElementById('textOne').value + "'";

        setHideLightbox(false);

        //Heart%20Attack/city/San%20Francisco/state/California
        //textOne
        //.split(",")
        var baseUrl = "http://ec2-44-202-236-245.compute-1.amazonaws.com:8083/v1/clinical-trials/studies/keyword/";
        var keyWord = document.getElementById('textOne').value.split(' ').join('%20') + "/city/";

        var cityWord = "null/state/";
        var stateWord = "null";

        if(document.getElementById('textTwo').value.includes(",")){
          cityWord = document.getElementById('textTwo').value.split(",")[0].split(' ').join('%20') + "/state/";
          stateWord = document.getElementById('textTwo').value.split(",")[1].split(' ').join('%20');
        }
        
        console.log(baseUrl+keyWord+cityWord+stateWord);
        var fullUrl = baseUrl+keyWord+cityWord+stateWord;
        localStorage.setItem("PickURL", fullUrl);
        
        
        $.getJSON(fullUrl, function(data) {
          // JSON result in `data` variable
          console.log(data.studies.length);

          if(data.studies.length > 0){
            data.studies.forEach(populateList);
          } else{
            var noResult = document.createElement('h1');
            noResult.className = "missing";
            noResult.innerText = "No Results Found";
            document.getElementById('lc').appendChild(noResult);
          }

        });
        
      }
  
      
    return (

        <div>
            {/*
    <Router>
      <Routes>
          <Route path='/study' element={<Study/>} />
      </Routes>
    </Router>
    */}

      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Community Clinical Trials</Navbar.Brand>

        <Navbar.Brand href="#home">
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

        <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Open+Sans" />

        {/*
      <div class="google-btn">
        <div class="google-icon-wrapper">
          <img class="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
        </div>
        <p class="btn-text"><b>Sign in with Google</b></p>
      </div>
        */}

      <div id="loginButton">

        <GoogleLogin
            clientId="133093290461-fu53t29p3smjtksj1fep5minf9f5enjo.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
          />
      </div>

      </Container>
    </Navbar>

    <div className='bg-image'>
    <img class="b" src='/medical.jpeg' width="100%" height="600"/>
    <div class="centered">

      
      <form class = "example"> 
        <input id="textOne" type="textOne" name="search" autocomplete="off" placeholder="Find a clinical study..."></input>
        <input id="textTwo" type="textTwo" name="search" autocomplete="off" placeholder="City, State"></input>
        <Button onClick={clearList} >Search</Button>
      </form>
    </div>
    </div>

    {/*
    <LoadScript
        googleMapsApiKey="AIzaSyBgrtrEe8fveSLFTHYg5hphVlqQ0yqnJcs"
      >
        <GoogleMap
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

        */}
    <div class="a">
      <h1 id="RecentStudies" class="b">Most Recent Studies</h1>
    </div>

    <div className={`lightbox ${hideLightbox ? "hide-lightbox" : ""}`}>
      <Spinner animation="border" variant="primary" size="lg"role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
    
    <div id="lc" class="grid-container">
    </div>

    <MDBFooter bgColor="blue" className="font-small pt-4 mt-4">
      <div className="footerBody">
            <h5 className="title"> <a>Terms of Service</a> &nbsp;&nbsp; About Us</h5>
            <p className="tos">
              
            </p>
      <div className="footer-copyright">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="http://www.clinicaltrials.mobi"> ClinicalTrials.mobi </a>
        </MDBContainer>
      </div>
      </div>

    </MDBFooter>

        </div>

    );
}

export default Home;