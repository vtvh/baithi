import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Row, Col } from "react-bootstrap";
import data from "./foods.json";

function Dining() {
  return (
    <div>
      <Header></Header>
      <h2 className="text-center">Recommend Menu</h2>
      <Row>
        {data.map((p, index) => (
          <Col>
            <img className="d-block mx-auto w-50 rounded-circle" src={p.pic} alt="food" />
          </Col>
        ))}
      </Row>
      <Row>
        {data.map((p, index) => (
          <Col>
          <h5 className="mt-3 text-center">{p.name}</h5>
          </Col>
        ))}
      </Row>
      <Footer></Footer>
    </div>
  );
}

export default Dining;
