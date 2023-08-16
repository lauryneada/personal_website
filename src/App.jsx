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
    </div>
   
  );
}

export default function Main() {
  return (
    <div>
      <Nav />
      <Header />
    </div>
  );
}
