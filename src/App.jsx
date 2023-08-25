import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Nav() {
  return (
    <Container>
      <Row>
        <Col className="nav-item">about</Col>
        <Col className="nav-item">experience</Col>
        <Col className="nav-item">projects</Col>
        <Col className="nav-item">contact</Col>
      </Row>
    </Container>
  );
}

function Header() {
  return (
    <div className="section">
       <h1>Hey, I'm Lauryne!</h1>
       <p>I'm a double-degree student studying<mark>computer science</mark>@ the University of Waterloo 
          and<mark>business administration</mark>@ Wilfrid Laurier University</p>
    </div>
   
  );
}

function About() {
  return (
    <div className="section">
      <h2>About Me</h2>
      <Container>
        <Row>
          <Col classname="col-headshot">
            <img className="headshot" src="/lauryne_headshot.png"></img>
          </Col>
          <Col className="col-facts">
            <p className="fact">I'm interested in the intersection of business and technology, specifically in the areas 
              of<mark>software engineering</mark>and<mark>data science</mark></p>

            <p className="fact">A goal of mine is to contribute to the intitatives that have encouraged me to pursue a career 
              in technology, that is why I<mark>mentor</mark> at many Girl Learning Code events from Canada Learning Code</p>

            <p className="fact">I'm<mark>bilingual</mark>! My first language is French and I'm fluent in English 
            (I also know a bit of Spanish)</p> 
          </Col>
        </Row>
        
      </Container>
    </div>
  );
}

export default function Main() {
  return (
    <div>
      <Nav />
      <Header />
      <About />
    </div>
  );
}
