import React from "react";
import { Col, Row } from "react-bootstrap";
import Header from "../Header/Header";
import Sidebar from "../sidebar/Sidebar";
import CreateLeadForm from "./CreateLeadForm";
import { Icon } from "@iconify/react/dist/iconify.js";

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
                                   <li className="breadcrumb-item"><a href="#" className="fs-5 text-decoration-none">Leads</a></li>
                                      <li className="d-flex align-items-center"><Icon icon="ep:arrow-right" /></li>
                                    <li className="fs-5">Create Lead</li>
                                </ul> 
                            </nav>
                        </div>
                    </div>
                    <CreateLeadForm />
                </Col>
                <Col xs={3}>

                </Col>

            </Row>
        </div>
    );
}

export default CreateLead;