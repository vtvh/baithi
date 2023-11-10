import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { TbBrandDisney } from "react-icons/tb";
import { AiFillCrown } from "react-icons/ai";
import { MdPermContactCalendar } from "react-icons/md";
import { Dropdown } from "react-bootstrap";


function MyDropdown() {
  return (
    <Dropdown className="dropdown">
      <Link>
        <Dropdown.Toggle variant="info" id="dropdown-basic">
          Categories
        </Dropdown.Toggle>
      </Link>

      <Dropdown.Menu>
        <Dropdown.Item href="/char">Characters Greeting</Dropdown.Item>
        <Dropdown.Item href="/map">Map</Dropdown.Item>
        <Dropdown.Item href="/dining">Dining</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}

function Header() {
  return (
    <div className="header-container">
      <Row>
        <Col className="col-logo">
          <img className="logo" src="logo.png" alt="" />
        </Col>
        <Col>
          <Row>
            <span className="icon">
              <TbBrandDisney />
            </span>
          </Row>
          <Row>
            <Link to="/" >
              <span className="header-text">Homepage</span>
            </Link>
          </Row>
        </Col>
        <Col>
          <Row>
            <span className="icon">
              <AiFillCrown />
            </span>
          </Row>
          <Row>
            {/* <span className="header-text">Categories</span> */}
            <MyDropdown />
          </Row>
        </Col>
        <Col>
          <Row>
            <span className="icon">
              <MdPermContactCalendar />
            </span>
          </Row>
          <Row>
            <Link to="/contact">
              <span className="header-text">Contact Us</span>
            </Link>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Header;
