import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../Assetts/vehivillelogo.png'
import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import { Link } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';



function Header() {
  const [open, setOpen] = useState(false);

  return (
    <> 
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
        <div className='d-flex '>
              <img alt="no image" src={logo} width="150px" className="d-inline-block align-top"/>{' '}<Link to={'/'} style={{textDecoration:'none'}}><h3 className=' mt-4'><span className='text-warning'>Vehi </span><span className='text-dark'> Ville</span></h3></Link>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <div className='me-5 text-center'>
              <button  onClick={() => setOpen(!open)} className=' btn'><i class="fa-solid fa-user-plus fa-2x text-warning"></i></button>   
              <Collapse in={open}>
                <div className='mt-3 text-center '>
                  <ListGroup  variant="flush">
                    <hr />
                    <ListGroup.Item><Link to={'/login'} style={{textDecoration:'none'}}><h5 className='mb-3'>Login</h5></Link></ListGroup.Item>
                    <ListGroup.Item><Link to={'/register'} style={{textDecoration:'none'}}><h5>SignUp</h5></Link></ListGroup.Item>
                    <hr />
                  </ListGroup>
                </div>
              </Collapse>
            </div>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header