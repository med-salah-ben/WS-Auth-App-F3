import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import {Button,Modal,Form} from "react-bootstrap"
import { registerUser } from '../JS/action/authActions';
import {useDispatch} from "react-redux"

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
    const [show, setShow] = useState(false);
    const [name, setName] =useState('');
    const [lastName, setLastName] =useState('');
    const [email, setEmail] =useState('');
    const [password, setPassword] =useState('');
  const handleRegister = ()=>{
    const newUser = {name,lastName,email,password};
    dispatch(registerUser(newUser))
    navigate("/dashboard")
    setName("");
    setLastName("");
    setEmail("");
    setPassword("");
  }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Register
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
          <Form.Group className="mb-3" >
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Put your Name" value={name} onChange={(e)=>setName(e.target.value)} name="name" />
  </Form.Group>

  <Form.Group className="mb-3" >
    <Form.Label>Last Name</Form.Label>
    <Form.Control type="text" placeholder="put your Last Name" value={lastName} onChange={(e)=>setLastName(e.target.value)} name="lastName"  />
  </Form.Group>
  
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)} name="email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} name="password"  />
  </Form.Group>
</Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={()=>{handleClose();handleRegister()}}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

export default Register
