import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './home.css';
import resume from '../../assets/Abdul-Al-Joboyer-Chy-resume.pdf';
import Skills from '../../components/Skills/Skills';
import Navbars from '../../components/navbar/navbar';

const Myhome = () => {
   
    return (
    <div className="container-fluid ">
        <Navbars></Navbars>
        <Row className="container-fluid justify-content-center my-4">
            <Col lg={4} md={12} sm={12}>
                <Row>
                <Col className="p-2" lg={12} md={12} sm={12}>
                </Col>
                <Col className="" lg={12} md={12} sm={12}>
               
                <h1 className="intro">Abdul</h1>
                
                <h5 className="iam">I'm an independent creative Web & Mobile app developer From Bangladesh. I completed my Bsc Degree at July 2021</h5>
                <a href={resume} target="blank" download><button className="detailsbtn  fs-5 ">HIRE ME</button></a> 

                </Col>

                </Row>
            </Col>
            <Col lg={8} md={12} sm={12}>
            <Skills></Skills>
            </Col>
        </Row>
    </div>
    );
};

export default Myhome;