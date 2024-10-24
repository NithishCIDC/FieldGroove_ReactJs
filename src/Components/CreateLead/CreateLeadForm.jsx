import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useState } from "react";
import { Button, Col, Form, Row, Tab, Table, Tabs } from "react-bootstrap";
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const validationSchema = Yup.object().shape({
    projectName: Yup.string().required('Project Name is required'),
    status: Yup.string().required('Status is required'),
    contact: Yup.number().required('Contact is required').typeError('Contact must be a number'),
    action: Yup.string().required('Action is required'),
    assignee: Yup.string().required('Assignee is required'),
    bidDate: Yup.date().required('Bid Date is required').nullable(),
});
const CreateLeadForm = () => {
    const handleSubmit = (values) => {
        console.log('Form data:', values);
    };

    const InitialValue = {
        Type:false,
        projectName: '',
        status: 'Contacted',
        contact: '',
        action: 'Quote',
        assignee: 'Hariprakash',
        bidDate: '',
    };
    const formRows = [
        { label: 'Account Type', type: 'checkbox', name: 'Type', isChecked: InitialValue.Type },
        { label: 'Status', type: 'select', name: 'status', options: ['Contacted', 'Not Contacted'], defaultValue: InitialValue.status },
        { label: 'Project Name', type: 'text', name: 'projectName', placeholder: 'Enter project name' },
        { label: 'Contact', type: 'number', name: 'contact', placeholder: 'Enter contact number' },
        { label: 'Bid Date', type: 'datetime-local', name: 'bidDate' },
        { label: 'Assigned User', type: 'select', name: 'assignee', options: ['Hariprakash', 'Nithish', 'Boopathi', 'Kesavan'], defaultValue: InitialValue.assignee },
        { label: 'Action', type: 'select', name: 'action', options: ['Quote', 'Not Quote'], defaultValue: InitialValue.action },
    ];

    return (

        <div className=" p-3 border">
            <Tabs
                defaultActiveKey="profile"
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
                                {formRows.map((row, index) => (
                                    <Row key={index}>
                                        <Col md={2}>{row.label}</Col>
                                        <Col md={3}>
                                            {row.type === 'checkbox' ? (
                                                <Form.Check
                                                    name={row.name}
                                                    type="checkbox"
                                                    label={row.label}
                                                    checked={values[row.name]}
                                                    onChange={handleChange}
                                                />
                                            ) : row.type === 'select' ? (
                                                <Form.Select
                                                    name={row.name}
                                                    value={values[row.name] || row.defaultValue}
                                                    onChange={handleChange}
                                                >
                                                    {row.options.map((option, idx) => (
                                                        <option key={idx} value={option}>{option}</option>
                                                    ))}
                                                </Form.Select>
                                            ) : (
                                                <Form.Group>
                                                    <Form.Control
                                                        type={row.type}
                                                        name={row.name}
                                                        value={values[row.name]}
                                                        onChange={handleChange}
                                                        placeholder={row.placeholder}
                                                    />
                                                    <ErrorMessage
                                                        name={row.name}
                                                        component="div"
                                                        className="text-danger"
                                                    />
                                                </Form.Group>
                                            )}
                                        </Col>
                                    </Row>
                                ))}

                                {/* Contact Information Table */}
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

                                <Button type="submit" variant="primary">Submit</Button>
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
    );
}

export default CreateLeadForm;