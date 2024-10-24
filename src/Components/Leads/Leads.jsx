import React from "react";

import {Col, Row } from "react-bootstrap";
import Header from "../Header/Header";
import Sidebar from "../sidebar/Sidebar";
import LeadsDetails from "./LeadsDetails";


const Leads = () => {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Row className="m-0 p-0 sticky-top d-flex">
                <Header />
            </Row>

            <Row className="m-0 p-0 flex-fill">
                <Col xs={1} className="p-0 m-0 sidebgColor" style={{ width: "7.2%" }}>
                    <Sidebar />
                </Col>
                <Col className="m-0 p-0">
                    <LeadsDetails />
                </Col>
            </Row>
        </div>
    );
}

export default Leads;