import { Button, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useGetLeadsQuery } from "../../redux/Slice";
import DataTable from "react-data-table-component";
import { columns, LeadformFields } from "../../Constants/ApplicationConstants";
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
            
        </div>
    );
};

export default LeadsDetails;