import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDeleteLeadsMutation, useGetLeadsQuery } from "../../redux/Slice";
import DataTable from "react-data-table-component";
import {LeadformFields } from "../../Constants/ApplicationConstants";
import { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
const LeadsDetails = () => {
    const { data, isSuccess } = useGetLeadsQuery();
    isSuccess && console.log(data.data);
    const customStyles = {
        rows: {
            style: {
                '&:nth-of-type(odd)': {
                    backgroundColor: '#f3f3f3',
                },
                '&:hover': {
                    backgroundColor: '#e0e0e0',
                },
            },
        },
        headCells: {
            style: {
                fontSize: '16px', // header font size
            },
        },
        cells: {
            style: {
                fontSize: '16px', // cell font size
            },
        },
    };

    
// const [deleteItem] =useDeleteLeadsMutation();
const [show, SetShow] = useState(false);
// const [submit, setSubmit] = useState(false);
// const [deleteId, SetdeleteId] = useState(); 
// const nav = useNavigate();  

const handleShow = (id) => {
    // SetdeleteId(id);
    SetShow(true);
    console.log(id);
};

const handleClose = () => SetShow(false);s

const handleDelete = async () => {
//     setSubmit(true);
//     try {
//         await deleteItem(5);
//         // refetch();
//         SetShow(false);
//         nav('/Leads');
//     } catch (e) {
//         console.error(`Error:`, e);
//         alert("Try Again");
//         SetShow(false);
//     }
//     finally{
//         setSubmit(false);
//     }
};

const columns = [
    {
        name: 'Project Name',
        selector: row => row.projectName,
        sortable: true,
    },
    {
        name: 'Status',
        selector: row => row.status,
        sortable: true,
    },
    {
        name: 'Added',
        selector: row => row.added,
        sortable: true,
    },
    {
        name: 'Type',
        selector: row => row.type,
        cell: row => (row.type ? "Business" : "Personal"),
        sortable: true,
    },
    {
        name: 'Contact',
        selector: row => row.contact,
        sortable: true,
    },
    {
        name: 'Action',
        selector: row => row.action,
        sortable: true,
    },
    {
        name: 'Assignee',
        selector: row => row.assignee,
        sortable: true,
    },
    {
        name: 'Bid Date',
        selector: row => row.bidDate,
        sortable: true,
    },
    {
        name: 'Operation',
        cell: row => (
            <div className="d-flex justify-content-between">
                <Button variant="none" className="p-1" ><Link to={`/UpdateLead/${row.id}`} ><Icon icon="akar-icons:edit" width={"25px"} style={{ color: "dodgerblue" }} /></Link></Button>
                <Button variant="none" className="p-1" onClick={() => handleShow(row.id)} ><Icon icon="weui:delete-on-outlined" width={"25px"} style={{ color: " #d60000" }} /></Button>
                <Button variant="none" className="p-1" ><Icon icon="flowbite:download-outline" width={"25px"} style={{ color: "lightslategrey" }} /></Button>
            </div>
        ),
        sortable: false,
    },
];
    return (
        <div>
            <div className="d-flex justify-content-between bg-secondary bg-opacity-10 px-4 py-4">
                <h2>Leads</h2>
                <div className="hstack gap-3">
                    <Button variant="warning" className="px-3 py-2 text-white">View Converted</Button>
                    <Button variant="warning" className="px-3 py-2 text-white">View Archived</Button>
                    <Button variant="success" className="px-3 py-2"><Link to="/CreateLead" className="text-decoration-none text-white"> Add Lead </Link></Button>
                </div>
            </div>

            <div className="mx-4 my-3">
                <Row className="me-0">
                    <Col md={3}>
                        <div className="card bg-secondary bg-opacity-10 p-4 border-1">
                            <Form className="vstack gap-3">
                                {LeadformFields.map((field, index) => {
                                    if (field.type === 'text') {
                                        return (
                                            <Form.Control key={index} type={field.type} placeholder={field.placeholder} />
                                        );
                                    } else if (field.type === 'select') {
                                        return (
                                            <Form.Select key={index}>
                                                {field.options.map((option, idx) => (
                                                    <option key={idx}>{option}</option>
                                                ))}
                                            </Form.Select>
                                        );
                                    }
                                    return null;
                                })}
                                <div className="hstack gap-2">
                                    <Form.Check type="checkbox" />
                                    <Form.Label>Expired</Form.Label>
                                </div>
                                <div>
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
                            <span className="bg-secondary bg-opacity-25 text-white py-1 px-2 rounded-3">1</span>
                            <span>Order</span>
                        </div>
                    </Col>
                </Row>
            </div>
            <div className="p-4">
                {isSuccess &&
                    <DataTable
                        columns={columns}
                        data={data.data}
                        pagination
                        fixedHeader
                        fixedHeaderScrollHeight="300px"
                        highlightOnHover
                        customStyles={customStyles}
                    />
                }
            </div>
            <Modal show={show} onHide={handleClose} animation={false} timer={500} className="shadow-none">
                <Modal.Header>
                    <Modal.Title>Confirm Delete</Modal.Title>
                    <Button variant='none' className="btn-close close-Button" aria-label="Close" onClick={handleClose} ></Button>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete this Data?</Modal.Body>
                <Modal.Footer>
                    <Button variant="none" className='cancelButtonStyle' onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button className="text-white bg-dark" variant="none" onClick={handleDelete} disabled={submit}> Delete</Button>
                </Modal.Footer>
            </Modal>

        </div>
    );
};

export default LeadsDetails; 