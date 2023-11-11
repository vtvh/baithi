import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Button,Card, Carousel, Container } from "react-bootstrap";
import events from "./events.json";
import { useNavigate } from "react-router-dom";

function Home() {
  return (
    <div>
      <Header />
      <Slideshow />
      <Container>
        <h2 className="text-center">Whats hots</h2>
        <div className=" d-flex justify-content-between">
          <h3>Events/Programs</h3>
          {/* <a className="" href="/event"> See more </a> */}
        </div>
        <Events />
      </Container>

      <Footer />
    </div>
  );
}

function Events() {
  const navigate=useNavigate();
  return (
    <div className="d-flex flex-wrap gap-5">
      {events.map((p, index) => (
        <Card key={index} style={{ width: "18rem" }}>
          <Card.Img variant="top" src={p.pic} />
          <Card.Body>
            <Card.Title>{p.name}</Card.Title>
            <Card.Text>
            {p.date}
            </Card.Text>
          <Button onClick={()=>navigate(`/events/${p.id}`)} variant="primary">See Detail</Button>
          </Card.Body>

        </Card>
      ))}
    </div>
  );
}

function Slideshow() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src="s1.png" className="d-block w-100" alt="" />
        <Carousel.Caption>
          <h3>Welcome to Fun Fusion</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="s2.png" className="d-block w-100" alt="" />
        <Carousel.Caption>
          <h3>Greetings from our wonderful Characters</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="s3.png" className="d-block w-100" alt="" />
        <Carousel.Caption>
          <h3>We will have a GREAT time here!</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Home;
