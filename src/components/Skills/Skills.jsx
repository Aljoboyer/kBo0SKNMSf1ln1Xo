import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Skills.css';
// import {SiReact,SiFirebase, SiBootstrap, SiExpress, SiRedux, SiTailwindcss, SiMaterialui, SiMongodb , SiGraphql, SiSequelize, SiTypescript} from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";
import { TiCss3 } from "react-icons/ti";
import {  IoLogoJavascript, IoLogoNodejs} from "react-icons/io";

const Skills = () => {
    
    return (

        <Row className="container-fluid pt-4 pb-4">
             <Row className="d-flex justify-content-center container-fluid">
                <Col   className=" projectcol my-4" lg={8} md={8} sm={12}>
                    <h4 className="text-center fs-4 my-4 fw-bold  protitle">My Toolbox And Things I Can Do</h4>
                </Col>
            </Row>
            <Row className='justify-content-center g-2 gap-3'>
                <Col className="pcol text-center " lg={3} md={4} sm={12}>
                    <h2 className="ptitle text-center">JAVASCRIPT</h2>
                </Col>
                <Col className="pcol text-center " lg={3} md={4} sm={12}>
                    <h2 className="ptitle text-center">REACT.JS</h2>
                </Col>
                <Col className="pcol text-center " lg={3} md={4} sm={12}>
                    <h2 className="ptitle text-center">NODE.JS</h2>
                </Col>
                <Col className="pcol text-center " lg={3} md={4} sm={12}>
                    <h2 className="ptitle text-center">REACT NATIVE</h2>
                </Col>
                <Col className="pcol text-center " lg={3} md={4} sm={12}>
                    <h2 className="ptitle text-center">MONGO-DB</h2>
                </Col>
                <Col className="pcol text-center " lg={3} md={4} sm={12}>
                    <h2 className="ptitle text-center">EXPRESS.JS</h2>
                </Col>
                <Col className="pcol text-center " lg={3} md={4} sm={12}>
                    <h2 className="ptitle text-center">Typescript</h2>
                </Col>
                <Col className="pcol text-center " lg={3} md={4} sm={12}>
                    <h2 className="ptitle text-center">REDUX</h2>
                </Col>
                <Col className="pcol text-center " lg={3} md={4} sm={12}>
                    <h2 className="ptitle text-center">GraphQL</h2>
                </Col>
                <Col className="pcol text-center " lg={3} md={4} sm={12}>
                    <h2 className="ptitle text-center">Sequelize</h2>
                </Col>
                <Col className="pcol text-center " lg={3} md={4} sm={12}>
                    <h2 className="ptitle text-center">FIREBASE</h2>
                </Col>
                <Col className="pcol text-center " lg={3} md={4} sm={12}>
                    <h2 className="ptitle text-center">BOOTSTRAP</h2>
                </Col>
                <Col className="pcol text-center " lg={3} md={4} sm={12}>
                    <h2 className="ptitle text-center">TAILWIND CSS</h2>
                </Col>
                <Col className="pcol text-center " lg={3} md={4} sm={12}>
                    <h2 className="ptitle text-center">MATERIAL UI</h2>
                </Col>
                <Col className="pcol text-center " lg={3} md={4} sm={12}>
                   <h2 className="ptitle text-center">HTML</h2>
                </Col>
                <Col className="pcol text-center " lg={3} md={4} sm={12}>
                    <h2 className="ptitle text-center">CSS</h2>
                </Col>
                <Col className="pcol text-center " lg={3} md={4} sm={12}>
                    <h2 className="ptitle text-center">SCSS</h2>
                </Col>
            </Row>
        </Row>
    );
};

export default Skills;