import React from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Sign({register}) {
    const  registerForm = register?true:false
    
  return (
    <>  
        <Row className='container ms-5 mb-5 mt-5'>
            <Col sm={12} lg={6} className=''>
                <img className='rounded' src="https://images.pexels.com/photos/1051073/pexels-photo-1051073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </Col>
            <Col sm={12} lg={6} className='mt-5'>
                <div className='text-center  flex-column'>
                    <h3 className='mb-4'>
                    {
                        registerForm? "Sign up to VehiVille" : "Log in to VehiVille"
                    }
                    </h3>
                    <hr />
                    {
                        registerForm? 
                        <div className='mt-4 '>
                            <button className='btn shadow'><i class="fa-brands fa-google fa-xl"></i></button>
                            <button className='btn shadow ms-3'><i class="fa-brands fa-facebook fa-2xl"></i></button>
                            <button className='btn shadow ms-3'><i class="fa-brands fa-apple fa-2xl"></i></button>                            
                            <hr />
                        </div>:
                        <div>
                           <p>Don't have an account? <Link to={'/register'} style={{textDecoration:'none'}}>Sign Up</Link></p>
                           <p>Forget Password? <Link style={{textDecoration:'none'}}>Reset Now</Link></p>
                           <hr />
                        </div>
                    }
                    <Form>
                        {
                            registerForm?
                            <div>
                                <Form.Group className='mb-3' contextMenu='formBasicEmail'>
                                    <Form.Control type='text' placeholder='name'/>
                                </Form.Group>

                                <Form.Group className='mb-3' contextMenu='formBasicEmail'>
                                    <Form.Control type='text' placeholder='Mobile'/>
                                </Form.Group>

                                <Form.Group className='mb-3' contextMenu='formBasicEmail'>
                                    <Form.Control type='email' placeholder='Email'/>
                                </Form.Group>
                                <Form.Group className='mb-3' contextMenu='formBasicEmail'>
                                    <Form.Control type='password' placeholder='password'/>
                                </Form.Group>
                            </div>                                            
                            :
                            <div className='mt-5'> 
                                <Form.Group className='mb-4 ' contextMenu='formBasicEmail'>
                                    <Form.Control type='email' placeholder='Email'/>
                                </Form.Group>
                                <Form.Group className='mb-4' contextMenu='formBasicEmail'>
                                    <Form.Control type='password' placeholder='password'/>
                                </Form.Group>
                                <button className=' mt-2 btn btn-warning rounded w-100'>Login</button>
                            </div>
                        }
                    </Form>
                </div>
                {
                    registerForm?
                    <div >
                        <div className='d-flex  text-center'>
                            <input type="checkbox" />
                            <p className='mt-5'>Creating an account means you’re okay with our <span className='text-warning'> Terms of Service, Privacy Policy,</span> and our default <span className='text-warning'>Notification Settings. </span> </p>
                        </div>
                        <div className='text-center mt-3'>
                            <button className='btn btn-warning'>Create Account</button>
                            <p className='mt-3'>Already a member? <Link to={'/login'} style={{textDecoration:'none'}}>Sign In</Link></p>
                        </div>
                    </div>:
                    <div className='mt-5 text-center'>
                        <button className='btn shadow ' variant=""><i class="fa-brands fa-google fa-xl"></i></button>
                        <button className='btn shadow ms-3'><i class="fa-brands fa-facebook fa-2xl"></i></button>
                        <button className='btn shadow ms-3'><i class="fa-brands fa-apple fa-2xl"></i></button>                            
                        <hr />
                    </div>
                }
            </Col>
        </Row>
    </>
  )
}

export default Sign