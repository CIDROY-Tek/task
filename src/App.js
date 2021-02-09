import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import logo from './assets/logo1.png'
import Google from './assets/search.png'
import FB from './assets/fb.png'
import { Container, Row, Col, Card, Button, Form, Image, InputGroup, FormControl } from 'react-bootstrap';
import ShowCase from './components/ShowCase';
import validator from "validator";
import empty from "is-empty";

import { EyeSlashFill, EyeFill } from 'react-bootstrap-icons';

function App() {
  const [validated, setValidated] = useState(null);
  const [errors, setErrors] = useState({});
  const [email, setEmail] = useState("");
  const [newPassType, setNewPassType] = useState("password");
  const [confirmPassType, setConfirmPassType] = useState("password");
  const showHideNewPass = (e) => {
    e.preventDefault();
    e.stopPropagation();
    var type = newPassType === 'text' ? 'password' : 'text';
    setNewPassType(type);
  }
  const showHideConfirmPass = (e) => {
    e.preventDefault();
    e.stopPropagation();
    var type = confirmPassType === 'text' ? 'password' : 'text';
    setConfirmPassType(type);
  }
  const onEmailChange = async e => {
    e.preventDefault();
    setEmail(e.target.value)
    const errors = {};
    // validation
    if (!validator.isEmail(email)) {
      errors.email = "Invalid email address";
    }else{
      setErrors({});
    }

    if (!empty(errors)) {
      setErrors(errors);
      setValidated(false);
    } else {
      setValidated(true);
    }
  };
  return (
    <div className="main">
      <Row noGutters>
        <Col xs={12} md={6}>
          <Card className="signupCard text-center">
            <Card.Body>
              <div className="signupDiv">
                <Card.Title className="font-weight-medium greenText" >
                  Sign up
                </Card.Title>
                <Card.Text className="greenText">Welcome</Card.Text>
                <Form.Row noGutters="true" className="justify-content-center">
                  <Col xs="12">
                    <Button className="btn-sm btn-light signinStyle shadow-sm">
                      <Image src={Google} className="btnIcon" roundedCircle />
                      Sign in with Google</Button>
                  </Col>
                  <Col xs="12" className="mt-2">
                    <Button className="btn-sm btn-light signinStyle shadow-sm">
                      <Image src={FB} className="btnIcon" roundedCircle />
                      Sign in with Facebook</Button>
                  </Col>
                  <Col xs="12" className="mt-3">
                    <p>or</p>
                  </Col>
                  <Form.Group as={Col} xs={9} md={6} controlId="formSignupEmail" className="mx-5">
                    <Form.Control
                      className="form-control-sm"
                      isInvalid={errors.email}
                      type="email"
                      placeholder="example@email.com"
                      value={email}
                      onChange={onEmailChange}
                    />
                    {errors.email && (
                      <Form.Control.Feedback>{errors.email}</Form.Control.Feedback>
                    )}
                  </Form.Group>
                  <InputGroup className="mx-5" as={Col} xs={9} md={6} controlId="formSignupPassword">
                    <FormControl
                      type={newPassType} 
                      placeholder="New password"
                      className="form-control-sm"
                    />
                    <InputGroup.Append>
                      <Button variant="secondary" className="btn-sm" onClick={showHideNewPass}>
                        {newPassType === 'text' ? (<EyeSlashFill className="mt-n1" />): (<EyeFill className="mt-n1" />)}
                      </Button>
                    </InputGroup.Append>
                  </InputGroup>
                  <InputGroup className="mt-3 mx-5" as={Col} xs={9} md={6} controlId="formSignupPassword">
                    <FormControl
                      type={confirmPassType}
                      placeholder="Confirm password"
                      className="form-control-sm"
                    />
                    <InputGroup.Append>
                      <Button variant="secondary" className="btn-sm" onClick={showHideConfirmPass}>
                        {confirmPassType === 'text' ? (<EyeSlashFill className="mt-n1" />): (<EyeFill className="mt-n1" />)}
                      </Button>
                    </InputGroup.Append>
                  </InputGroup>
                  <Col xs="12" className="mt-3">
                    <Button type="submit" className="mx-3 submitBtnStyle shadow">
                      Sign up
                    </Button>
                    <Button className="mx-3 btn-sm bg-secondary bg-gradient shadow nnBtnStyle" type="submit">
                      Not now
                    </Button>
                  </Col>
                  <Col xs="12" className="mt-5">
                    <a href="/" className="font-weight-medium linkText">Already have an account?</a>
                  </Col>
                </Form.Row>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={6} className="sideStyle">
          <div className="contentDiv">
            <div className="mb-5">
              <Image variant="top" src={logo} className="logoStyle" />
            </div>
            <p className="font-weight-medium text-white h4">
              Create, share, rank, compare
            </p>
            <p className="text-light h6 font-weight-light captionText">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>
          <ShowCase />
        </Col>
      </Row>
    </div>

  );
}

export default App;
