import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
        <Row className='text-center'>
            <Col sm={12} lg={4}>
                <p style={{fontSize:'13px'}}>Copyright 2023 VehiVille All rights reserved.</p>
            </Col>
            <Col sm={12} lg={4}>
                <Link><i class="fa-brands fa-instagram text-warning  me-4"></i></Link>
                <Link><i class="fa-brands fa-facebook text-primary me-4"></i></Link>
                <Link><i class="fa-solid fa-location-dot text-success"></i></Link>
            </Col>
            <Col sm={12} lg={3} className='d-flex justify-content-between' style={{fontSize:'12px'}}>
                <p>Privacy Policy</p>
                <p>Data & Security</p>
                <p>Terms of Service</p>
                <p>Data & Security</p>
            </Col>
        </Row>
    </>
  )
}

export default Footer