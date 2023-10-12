import React, { useState } from "react";
import Header from "./Header";
import { Form, Button } from "react-bootstrap";
import { Student } from "./Student";

function Add() {


  return (
    <div>
      <Header></Header>
      <h1>Add New Student</h1>
      <MyForm></MyForm>
    </div>
  );
}

export default Add;

function MyForm() {

  const [name,setName]=useState('');
  const [id,setID]=useState('');
  const [email,setEmail]=useState('');
  const [dob,setDOB]=useState('');

  function handleIDChange(e){
    setID(e.target.value)
  }
  function handleNameChange(e){
    setName(e.target.value)
  }
  function handleEmailChange(e){
    setEmail(e.target.value)
  }
  function handleDOBChange(e){
    setDOB(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault();
    let newobj={id:id,name:name,email:email,dob:dob}
    Student.push(newobj)
    alert('update done')
  }

  return (

    <Form onSubmit={handleSubmit}>
      <Form.Group className="ml-3" controlId="formBasicEmail">
        <Form.Label>ID</Form.Label>
        <Form.Control required onChange={handleIDChange} type="text" placeholder="Enter ID" />
        <Form.Text className="text-muted">
          ID is required.<br></br>
          ID has format Sxx. x:digit
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Name</Form.Label>
        <Form.Control required onChange={handleNameChange} type="text" placeholder="Enter name" />
        <Form.Text className="text-muted">
        Name is Required
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Email</Form.Label>
        <Form.Control required onChange={handleEmailChange} type="email" placeholder="Enter name" />
        <Form.Text className="text-muted">
        Email is Required<br></br>
        Invalid Email.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>DOB</Form.Label>
        <Form.Control required onChange={handleDOBChange} type="date" placeholder="Enter name" />
        <Form.Text className="text-muted">
        Date of birth is Required
        </Form.Text>
      </Form.Group>

      <Button variant="primary" type="submit">
        Add
      </Button>
    </Form>
  );
}
