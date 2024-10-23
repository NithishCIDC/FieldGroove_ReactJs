import React from "react";
import { Button, Col, Form, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const LeadsDetails = () => {
    return (
        <div>
            <div className="d-flex justify-content-between bg-secondary bg-opacity-10 px-4 py-4">
                <h2>Leads</h2>
                <div className="hstack gap-3">
                    <Button variant="warning" className="px-3 py-2">View Converted</Button>
                    <Button variant="warning" className="px-3 py-2">View Archived</Button>
                    <Button variant="success" className="px-3 py-2"><Link to="/CreateLead" className="text-decoration-none text-dark "> Add Lead </Link></Button>
                </div>
            </div>

            <div className="mx-4 my-3">
                <Row className="me-0">
                    <Col md={3} >
                        <div className="card bg-secondary bg-opacity-10 p-4 border-1">
                            <Form className="vstack gap-3">
                                <Form.Control type="text" placeholder="Search Leads..." />
                                <Form.Select>
                                    <option>Select an Action</option>
                                    <option>One</option>
                                    <option>Two</option>
                                    <option>Three</option>
                                </Form.Select>
                                <Form.Select>
                                    <option>Select a Type</option>
                                    <option>One</option>
                                    <option>Two</option>
                                    <option>Three</option>
                                </Form.Select>
                                <Form.Select>
                                    <option>Select a Status</option>
                                    <option>One</option>
                                    <option>Two</option>
                                    <option>Three</option>
                                </Form.Select>
                                <Form.Select>
                                    <option>Select a Sales Person</option>
                                    <option>One</option>
                                    <option>Two</option>
                                    <option>Three</option>
                                </Form.Select>
                                <div className="hstack gap-2">
                                    <Form.Check type="checkbox" />
                                    <Form.Label>Expired</Form.Label>
                                </div>
                                <div >
                                    <Button variant="none" className="border-0 bg-secondary bg-opacity-25 me-2">Export</Button>
                                    <Button variant="primary" className="border-0">Primary</Button>
                                </div>
                            </Form>
                        </div>
                    </Col>

                    <Col className="card border-1 bg-secondary bg-opacity-10 d-flex justify-content-center align-items-center ">
                        <h3 className="text-secondary opacity-50">No Leads To Map</h3>
                    </Col>
                </Row>
                <Row className="m-0 p-0  mt-4 ps-4 border border-1">
                    <Col className="d-flex border border-1 p-2 bg-secondary bg-opacity-10">
                        <div className="hstack gap-3">
                            <span className="bg-secondary bg-opacity-25 text-white py-1 px-2 rounded-3">4</span>
                            <span>Business</span>
                        </div>
                    </Col>
                </Row>
                <Row className="m-0 p-0  mt-4 ps-4 border border-1">
                    <Col className="d-flex justify-content-center border border-1 p-2 bg-secondary bg-opacity-10">
                        <div className="hstack gap-3">
                            <span className="bg-secondary bg-opacity-25 text-white py-1 px-2 rounded-3">1</span>
                            <span>Quote</span>
                        </div>
                    </Col>
                    <Col className="d-flex justify-content-center border border-1 p-2 bg-secondary bg-opacity-10">
                        <div className="hstack gap-3">
                            <span className="bg-secondary bg-opacity-25 text-white py-1 px-2 rounded-3">0</span>
                            <span>Follow Up</span>
                        </div>
                    </Col>
                </Row>
                <Row className="mt-4 ">
                    <Col>
                        <Table bordered responsive>
                            <thead className="bg-secondary bg-opacity-10">
                                <tr>
                                    <th>Project Name</th>
                                    <th>Status</th>
                                    <th>Added</th>
                                    <th>Type</th>
                                    <th>Contact</th>
                                    <th>Action</th>
                                    <th>Assignee</th>
                                    <th>Bid Date</th>
                                    <th className="text-center">Operations</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td className="d-flex justify-content-evenly">
                                        <Button variant="link">
                                            <i className="bi bi-pencil-fill" style={{ color: 'dodgerblue' }}></i>
                                        </Button>
                                        <Button variant="link">
                                            <i className="bi bi-trash-fill" style={{ color: '#d60000' }}></i>
                                        </Button>
                                        <Button variant="link">
                                            <i className="bi bi-download" style={{ color: 'lightslategrey' }}></i>
                                        </Button>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </div>
        </div>

    );
}

export default LeadsDetails;