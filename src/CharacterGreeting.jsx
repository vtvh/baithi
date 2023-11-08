import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import data from "./characters.json";
import { Row, Col, Container} from "react-bootstrap";

function CharacterGreeting() {
  return (
    <div>
      <Header />
      <p className="char-para" >Fun Fusion Characters Greetings</p>
      {data.map((p, index) => (
        <Container className="item-post" key={index}>
          <Row>
            <Col><img className="char-img" src={p.pic} alt={p.name}/></Col>
            <Col className="blockquote" >{p.desc}</Col>
            <Row className="display-5"> {p.name}</Row>

          </Row>
        </Container>
      ))}
      <Footer />
    </div>
  );
}

export default CharacterGreeting;
