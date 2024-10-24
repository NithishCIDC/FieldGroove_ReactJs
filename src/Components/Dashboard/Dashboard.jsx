import React from "react";
import Header from "../Header/Header";
import { Button, Col, Row } from "react-bootstrap";
import Sidebar from "../sidebar/Sidebar";

const Dashboard = () => {
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
                    <div className="d-flex justify-content-between bg-secondary bg-opacity-10 px-4 py-4">
                        <div><h2>Dashboard</h2></div>
                        <div className="hstack gap-3">
                            <Button variant="none" className="border-0 rounded-2 px-3 py-2 text-white" style={{ backgroundColor: "limegreen" }}>Start New Opportunity</Button>
                            <Button variant="none" className="border-0 rounded-2 px-3 py-2 text-white" style={{ backgroundColor: "limegreen" }}>Add New Lead</Button>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default Dashboard;