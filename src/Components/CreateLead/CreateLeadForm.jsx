import { useState } from "react";
import { Button, Col, Form, Row, Spinner, Tab, Table, Tabs } from "react-bootstrap";
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";
import { usePostLeadsMutation } from "../../redux/Slice";


const validationSchema = Yup.object().shape({
    projectName: Yup.string().required('Project Name is required'),
    status: Yup.string().required('Status is required'),
    contact: Yup.number().required('Contact is required').typeError('Contact must be a number'),
    action: Yup.string().required('Action is required'),
    assignee: Yup.string().required('Assignee is required'),
    bidDate: Yup.date().required('Bid Date is required').nullable(),
});
const CreateLeadForm = () => {
    const [submit, setSubmit] = useState(false);
    const nav = useNavigate();

    const [postItem] = usePostLeadsMutation();

    const handleSubmit = async (values) => {
        console.log('Form data:', values);
        try {
            setSubmit(true);
            await postItem(values);
            // Swal.fire({ position: "top-center", icon: "success", title: "saved", showConfirmButton: false, timer: 1500 });
            nav('/Leads');
        }
        catch (e) {
            setSubmit(true);
            console.error(e);
            // Swal.fire({ position: "top-center", icon: "danger",
            //     title: "Try again", showConfirmButton: false, timer: 1500 });
        }
        finally {
            setSubmit(false);
        }

    };

    const InitialValue = {
        Type: false,
        projectName: '',
        status: 'Contacted',
        contact: '',
        action: 'Quote',
        assignee: 'Hariprakash',
        bidDate: '',
    };

    return (
        <div className=" p-3 border">
            <Tabs
                defaultActiveKey="Lead Information"
                id="uncontrolled-tab-example"
                className=""
            >
                <Tab eventKey="Lead Information" title="Lead Information" className="border p-2">
                    <Formik
                        initialValues={InitialValue}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ values, handleChange, handleSubmit }) => (
                            <Form className="vstack gap-4 mt-4" onSubmit={handleSubmit}>
                                <Row>
                                    <Col md={2}>Account Type</Col>
                                    <Col md={2}>
                                        <Form.Check
                                            name="Type"
                                            type="checkbox"
                                            label="Business Account"
                                            checked={values.Type}
                                            onChange={handleChange}
                                        />
                                    </Col>
                                    <Col md={4}></Col>
                                    <Col md={2}>Date Created</Col>
                                    <Col md={2}>
                                        <p>{new Date().toLocaleDateString()}</p>
                                    </Col>
                                </Row>
                                {/* Status */}
                                <Row>
                                    <Col md={2}>Status</Col>
                                    <Col md={3}>
                                        <Form.Select
                                            name="status"
                                            value={values.status}
                                            onChange={handleChange}
                                        >
                                            <option value="Contacted">Contacted</option>
                                            <option value="Not Contacted">Not Contacted</option>
                                        </Form.Select>
                                        <ErrorMessage
                                            name="status"
                                            component="div"
                                            className="text-danger"
                                        />
                                    </Col>
                                </Row>
                                {/* Terms */}
                                <Row>
                                    <Col md={2}>Terms</Col>
                                    <Col md={3}>
                                        <Form.Select  >
                                            <option>Terms 1</option>
                                            <option>Terms 2</option>
                                            <option>Terms 3</option>
                                        </Form.Select>
                                    </Col>
                                </Row>
                                {/* Project Name */}
                                <Row>
                                    <Col md={2}>Project Name</Col>
                                    <Col md={3}>
                                        <Form.Group>
                                            <Form.Control
                                                type="text"
                                                name="projectName"
                                                value={values.projectName}
                                                onChange={handleChange}
                                                placeholder="Enter project name"
                                            />
                                            <ErrorMessage
                                                name="projectName"
                                                component="div"
                                                className="text-danger"
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                {/* Contact Information Table */}
                                <Row>
                                    <Col md={2}>Contact Information</Col>
                                    <Col md={10}>
                                        <Table bordered>
                                            <thead>
                                                <tr>
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
                                {/* Contact */}
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
                                                        <Form.Group>
                                                            <Form.Control
                                                                type="number"
                                                                name="contact"
                                                                value={values.contact}
                                                                onChange={handleChange}
                                                                placeholder="Enter contact number"
                                                            />
                                                            <ErrorMessage
                                                                name="contact"
                                                                component="div"
                                                                className="text-danger"
                                                            />
                                                        </Form.Group>
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
                                                    <td><Form.Control type="text" disabled placeholder="Company Name" /></td>
                                                    <td><Form.Control type="text" disabled placeholder="First Name" /></td>
                                                    <td><Form.Control type="text" disabled placeholder="Last Name" /></td>
                                                    <td><Form.Control type="text" disabled placeholder="Lead Source" /></td>
                                                    <td><Form.Control type="text" disabled placeholder="Location" /></td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col md={2}>Billing Address</Col>
                                    <Col md={3}>
                                        <Form.Check type="checkbox" label="Same as Project Address" />
                                    </Col>
                                </Row>
                                {/* Bid Date */}
                                <Row>
                                    <Col md={2}>Bid Date</Col>
                                    <Col md={3}>
                                        <Form.Group>
                                            <Form.Control
                                                type="datetime-local"
                                                name="bidDate"
                                                value={values.bidDate}
                                                onChange={handleChange}
                                            />
                                            <ErrorMessage
                                                name="bidDate"
                                                component="div"
                                                className="text-danger"
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                {/* Assignee */}
                                <Row>
                                    <Col md={2}>Assigned User</Col>
                                    <Col md={2}>
                                        <Form.Select
                                            name="assignee"
                                            value={values.assignee}
                                            onChange={handleChange}
                                        >
                                            <option value="Hariprakash">Hariprakash</option>
                                            <option value="Nithish">Nithish</option>
                                            <option value="Boopathi">Boopathi</option>
                                            <option value="Kesavan">Kesavan</option>
                                        </Form.Select>
                                        <ErrorMessage
                                            name="assignee"
                                            component="div"
                                            className="text-danger"
                                        />
                                    </Col>
                                </Row>
                                {/* Action */}
                                <Row>
                                    <Col md={2}>Action</Col>
                                    <Col md={3}>
                                        <Form.Select
                                            name="action"
                                            value={values.action}
                                            onChange={handleChange}
                                        >
                                            <option value="Quote">Quote</option>
                                            <option value="Not Quote">Not Quote</option>
                                        </Form.Select>
                                        <ErrorMessage
                                            name="action"
                                            component="div"
                                            className="text-danger"
                                        />
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
                                        <Button type="submit" className="me-2" variant="primary" style={{ width: "60px" }}>
                                            {submit ? <Spinner animation="border" role="status" size="sm" /> : "Save"}
                                        </Button>
                                        <Button variant="primary" className="me-2">
                                            Save & Convert to Opportunity
                                        </Button>
                                        <Button variant="secondary">Cancel</Button>
                                    </Col>
                                </Row>
                            </Form>
                        )}
                    </Formik>
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
    )
}

export default CreateLeadForm;