import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import Header from "../Header/Header";
import Sidebar from "../sidebar/Sidebar";
import CreateLeadForm from "./CreateLeadForm";
import { Icon } from "@iconify/react/dist/iconify.js";
import profile from "../../assets/images/profile.jpg"
import { Link } from "react-router-dom";

const CreateLead = () => {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Row className="m-0 p-0 sticky-top d-flex">
                <Header />
            </Row>

            <Row className="m-0 p-0 flex-fill">
                <Col xs={1} className="p-0 m-0 sidebgColor" style={{ width: "7.2%" }}>
                    <Sidebar />
                </Col>
                <Col className="p-0 m-0">
                    <div className="border">
                        <div className="d-flex align-items-center ps-3 border-bottom" style={{ height: "100px" }}>
                            <h1>Create Lead</h1>
                        </div>
                        <div className="ps-3 border-bottom pt-2">
                            <nav>
                                <ul className="hstack list-unstyled">
                                    <li className="breadcrumb-item"><Link to={"/Leads"} className="fs-5 text-decoration-none">Leads</Link></li>
                                    <li className="d-flex align-items-center"><Icon icon="ep:arrow-right" /></li>
                                    <li className="fs-5">Create Lead</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <CreateLeadForm />
                </Col>
                <Col xs={3} className="d-flex flew-column">
                    <div className="mx-2 my-3 border-1 flex-fill" style={{ border: "dashed" }}>
                        <Row className="m-0 p-3 border">
                            <Col xs={5} className="border p-0">
                                <div className="border m-2">
                                    <img src={profile} alt="profile" width={"100px"} />
                                </div>
                            </Col>
                            <Col xs={7} className="border">
                                <div className="my-2">
                                     <Form.Group>
                                        <Form.Control as="textarea" className="w-100 shadow-none border-black" placeholder="Start the discussion by entering a note..." style={{ minHeight: '100px', outline: 'none' }}/>
                                    </Form.Group>
                                    <div className="float-end">
                                        <Button variant="none" className="text-white my-2" style={{ backgroundColor: '#3e89db' }}> Save </Button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>

            </Row>
        </div>
    );
}

export default CreateLead;