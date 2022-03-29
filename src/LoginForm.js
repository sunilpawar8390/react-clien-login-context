import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';

const LoginForm = (props) => {
  const user = props.user;

  const [username, Setusername] = useState();
  const [password, Setpassword] = useState();

  const OnchangeUser = (event) => {
    Setusername(event.target.value);
  };

  const Onchangepass = (event) => {
    Setpassword(event.target.value);
  };

  const CombinehandleSubmit = (i) => {
    i.preventDefault();
    if (username == user[0].Username && password == user[0].Password) {
      window.location = '/Dashboard';
    } else {
      console.log(`Login failed`);
    }
  };

  return (
    <div>
      <Container>
        <h3>This is login form here</h3>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username: </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter UserName here.."
              onChange={OnchangeUser}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Password here.."
              onChange={Onchangepass}
            />
          </Form.Group>

          <Button onClick={CombinehandleSubmit}>Login</Button>
        </Form>
      </Container>
    </div>
  );
};

export default LoginForm;
