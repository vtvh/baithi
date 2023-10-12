import React from "react";
import Header from "./Header";
import { Student } from "./Student";
import { Button, Form, Table, Container, InputGroup } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function List() {
      const history = useNavigate();
      const [search, setSearch] = useState("");

      const handleDelete=(index)=>{
        Student.splice(index,1);
        history('/list');
      }

  return (
    <div>
      <Header></Header>
      <h1>Student List</h1>

      <Container>
        <Form>
          <InputGroup >
            {/* onChange for search */}
            <Form.Control
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Enter student name"
            />
          </InputGroup>
        </Form>
        <Table striped borderless hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>DOB</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {Student
              .filter((item) => {
                return search.toLowerCase() === ""
                  ? item
                  : item.name.toLowerCase().includes(search);
              })
              .map((item, index) => (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.dob}</td>
                  {/* <td><Button onClick={()=>console.log(index)}>Delete</Button></td> */}
                  <td><Button onClick={()=>handleDelete(index)}>Delete</Button></td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default List;
