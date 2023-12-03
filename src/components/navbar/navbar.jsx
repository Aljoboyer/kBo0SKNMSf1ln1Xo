import React from 'react';
import { Navbar,Container, Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Navbars = () => {
    return (
    <Navbar className='navbars' collapseOnSelect expand="lg" >
        <Container className="p-2">
        <Navbar.Brand  className="fs-3" > <h4>AAJ</h4> </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"><i className="fas fa-sliders-h"></i></Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <Link className="fw-bold fs-5 my-3 mx-2 navlinks"  to="/" ><span className="navss p-2">Home</span></Link>
            <Link className="fw-bold fs-5 my-3 mx-2 navlinks" to="/BMI_Calc" ><span className="navss p-2">Calculate BMI</span></Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    );
};

export default Navbars;