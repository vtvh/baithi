import React from "react";
//import './ContactUs.scss'
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Form from "react-bootstrap/Form";
import { Button, Container } from "react-bootstrap";
import Header from "./Header";
import Footer from "./Footer";

function About(){
  return(
    <div>
      <Header></Header>
      <ContactUs></ContactUs>
      <Footer></Footer>
    </div>
  );
}

function ContactUs() {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  return (
<Container>    <div className="contact">
      <div className="contact-wrapper">
        <br />
        <h1>CONTACT US</h1>
        <br />
        <h5>Have any questions? We'd love to hear from you.</h5>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>YOUR NAME</Form.Label>
            <Form.Control type="name" placeholder="Enter your name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>YOUR PHONE</Form.Label>
            <Form.Control type="text" placeholder="Enter your phone" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>YOUR EMAIL</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" />
            <Button className="my-3">Submit</Button>
          </Form.Group>

        </Form>
        <div className="contact-wrapper-content-map">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d979.830153144561!2d106.66551812845046!3d10.786737916740972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1696304006211!5m2!1svi!2s"
            width="50%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="contact-wrapper-content">
        <div style={{ maxWidth: "400px" }}>
          <h3>Welcome to Funfusion</h3>
          <p>
            <FaLocationDot />
            <strong>&nbsp;Address:&nbsp;&nbsp;&nbsp;</strong>
            391 D. Nam Ky Khoi Nghia, Ward 8, District 3, Ho Chi Minh City,
            Vietnam
          </p>
          <p>
            <BiSolidPhoneCall />
            <strong>&nbsp; Phone:&nbsp;&nbsp;&nbsp;</strong>
            0907 455 668
          </p>
          <p>
            <MdEmail />
            <strong>&nbsp; Email:&nbsp;&nbsp;&nbsp;</strong>
            Funfusion@email.com.vn
          </p>
        </div>
      </div>
    </div></Container>
  );
}

export default About;
