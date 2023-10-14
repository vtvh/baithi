import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <Container>
        <Row>
          <Col className="link"><Link to="/">Home</Link></Col>
          <Col className="link"><Link to="/list">Student List</Link></Col>
          <Col className="link"><Link to="/add">Add New Student</Link></Col>
          <Col className="link"><Link to="/">About us</Link></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Header;
