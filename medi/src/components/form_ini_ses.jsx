import React from 'react'
import logo from '../img/logo-transparent-int-png.png'
import '../css/form_ini_ses.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

const Form_ini_ses = () => {
  return (
    <div className='form_ini_ses'>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={logo} />
        <Card.Body>
        <Card.Title>Iniciar Sesion</Card.Title>
        <Card.Text>
            <FloatingLabel
                controlId="floatingInput"
                label="Email address"
                className="mb-3"
            >
                <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Password">
                <Form.Control type="password" placeholder="Password" />
            </FloatingLabel>
        </Card.Text>
        <Button variant="primary">Iniciar sesion</Button>
        </Card.Body>
    </Card>
    </div>
  )
}

export default Form_ini_ses