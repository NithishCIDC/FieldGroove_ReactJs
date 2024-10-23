import React, { useState } from "react";
import { Button, Col, Form, Row, Tab, Table, Tabs } from "react-bootstrap";

const UpdateLeadForm = () => {

    const [type, setType] = useState(false);
    const [status, setStatus] = useState("Contacted");
    const [terms, setTerms] = useState("Terms 1");
    const [projectName, setProjectName] = useState("");
    const [contact, setContact] = useState("");
    const [bidDate, setBidDate] = useState("2024-10-16T12:00");
    const [assignee, setAssignee] = useState("Hariprakash");
    const [action, setAction] = useState("Quote");
    const [notifyEmail, setNotifyEmail] = useState(false);
    const [taskForAction, setTaskForAction] = useState(false);
    const [sameAsProjectAddress, setSameAsProjectAddress] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (

        <div className=" p-3 border">
            <Tabs
                defaultActiveKey="profile"
                id="uncontrolled-tab-example"
                className=""
            >
                <Tab eventKey="Lead Information" title="Lead Information" className="border p-2">
                    <Form className="vstack gap-4 mt-4" onSubmit={handleSubmit}>
                        <Row>
                            <Col xs={2}>Account Type</Col>
                            <Col md={2}>
                                <Form.Check type="checkbox" label="Business Account" checked={type} onChange={(e) => setType(e.target.checked)} />
                            </Col>
                            <Col md={4}></Col>
                            <Col md={2}>Date Created</Col>
                            <Col md={2}> <p>{new Date().toLocaleDateString()}</p> </Col>
                        </Row>

                        <Row>
                            <Col md={2}>Status</Col>
                            <Col md={3}>
                                <Form.Select value={status} onChange={(e) => setStatus(e.target.value)} >
                                    <option>Contacted</option>
                                    <option>Not Contacted</option>
                                </Form.Select>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={2}>Terms</Col>
                            <Col md={3}>
                                <Form.Select value={terms} onChange={(e) => setTerms(e.target.value)}>
                                    <option>Terms 1</option>
                                    <option>Terms 2</option>
                                    <option>Terms 3</option>
                                </Form.Select>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={2}>Project Name</Col>
                            <Col md={3}>
                                <Form.Control type="text" value={projectName} onChange={(e) => setProjectName(e.target.value)} placeholder="Enter project name" />
                            </Col>
                        </Row>

                        <Row>
                            <Col md={2}>Contact Information</Col>
                            <Col md={10}>
                                <Table bordered>
                                    <thead>
                                        <tr>
                                            <th>Company Name</th>
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                            <th>Lead Source</th>
                                            <th>Location</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <Form.Control type="text" disabled placeholder="Company Name" />
                                            </td>
                                            <td>
                                                <Form.Control type="text" disabled placeholder="First Name" />
                                            </td>
                                            <td>
                                                <Form.Control type="text" disabled placeholder="Last Name" />
                                            </td>
                                            <td>
                                                <Form.Select> <option>Select a lead source</option> </Form.Select>
                                            </td>
                                            <td>
                                                <Form.Select> <option>New York (NY)</option> </Form.Select>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={2}>Contact Details</Col>
                            <Col md={10}>
                                <Table bordered>
                                    <thead>
                                        <tr>
                                            <th>Home</th>
                                            <th>Cell</th>
                                            <th>Work</th>
                                            <th>Email</th>
                                            <th>Website</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <Form.Control type="text" disabled />
                                            </td>
                                            <td>
                                                <Form.Control type="number" value={contact} onChange={(e) => setContact(e.target.value)} />
                                            </td>
                                            <td>
                                                <Form.Control type="text" disabled />
                                            </td>
                                            <td>
                                                <Form.Control type="text" disabled />
                                            </td>
                                            <td>
                                                <Form.Control type="text" disabled />
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={2}>Project Address</Col>
                            <Col md={10}>
                                <Table bordered>
                                    <thead>
                                        <tr>
                                            <th>Address 1</th>
                                            <th>Address 2</th>
                                            <th>City</th>
                                            <th>State</th>
                                            <th>Zip</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <Form.Control type="text" disabled />
                                            </td>
                                            <td>
                                                <Form.Control type="text" disabled />
                                            </td>
                                            <td>
                                                <Form.Control type="text" disabled />
                                            </td>
                                            <td>
                                                <Form.Control type="text" disabled />
                                            </td>
                                            <td>
                                                <Form.Control type="text" disabled />
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={2}>Billing Address</Col>
                            <Col md={3}>
                                <Form.Check type="checkbox" label="Same as Project Address" checked={sameAsProjectAddress} onChange={(e) => setSameAsProjectAddress(e.target.checked)}
                                />
                            </Col>
                        </Row>

                        <Row>
                            <Col md={2}>Bid Date</Col>
                            <Col md={3}>
                                <Form.Control type="datetime-local" value={bidDate} onChange={(e) => setBidDate(e.target.value)} />
                            </Col>
                        </Row>

                        <Row>
                            <Col md={2}>Assigned User</Col>
                            <Col md={2}>
                                <Form.Select value={assignee} onChange={(e) => setAssignee(e.target.value)}>
                                    <option>Hariprakash</option>
                                    <option>Nithish</option>
                                    <option>Boopathi</option>
                                    <option>Kesavan</option>
                                </Form.Select>
                            </Col>
                            <Col md={2}>
                                <Form.Check type="checkbox" label="Notify via Email" checked={notifyEmail} onChange={(e) => setNotifyEmail(e.target.checked)} />
                            </Col>
                        </Row>

                        <Row>
                            <Col md={2}>Action Needed</Col>
                            <Col md={2}>
                                <Form.Select value={action} onChange={(e) => setAction(e.target.value)}>
                                    <option>Quote</option>
                                    <option>Not Quote</option>
                                </Form.Select>
                            </Col>
                            <Col md={3}>
                                <Form.Check type="checkbox" label="Create & Assign Task For Action?" checked={taskForAction} onChange={(e) => setTaskForAction(e.target.checked)} />
                            </Col>
                        </Row>

                        <Row>
                            <Col md={2}>Location</Col>
                            <Col md={2}>
                                <Button variant="success" style={{ borderRadius: "10px" }}> New York (NY) </Button>
                            </Col>
                        </Row>

                        <hr />
                        <Row>
                            <Col className="text-end">
                                <Button type="submit" className="me-2" variant="primary"> Update </Button>
                                <Button variant="secondary">Cancel</Button>
                            </Col>
                        </Row>
                    </Form>
                </Tab>
                <Tab eventKey="Contacts(0)" title="Contacts(0)" className="border ">
                    ... Contact Details
                </Tab>
                <Tab eventKey="Document(0)" title="Document(0)" className="border" >
                    ...Docunent Details
                </Tab>
                <Tab eventKey="Photos(0)" title="Photos(0)" className="border">
                    ...Photos Details
                </Tab>
            </Tabs>
        </div>

    );
}

export default UpdateLeadForm;