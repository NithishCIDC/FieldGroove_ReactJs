import { Form, Nav, Navbar, NavDropdown } from "react-bootstrap";
import '../../CSS/Header.css';
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";

const Header = () => {
    const Username = JSON.parse(sessionStorage.getItem("user"));
    return (
        <div className="p-0">

            <Navbar expand="lg" className="headerColor p-0 m-0">
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" >
                    <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll >
                        <Nav.Link href="#" className="text-white p-3">FIELD <span className="brandOpacity"> GROOVE</span> </Nav.Link>
                        <div className="vr m-0 p-0"></div>
                        <Nav.Link as={Link} to="/Leads" className="text-white py-3">Leads</Nav.Link>
                        <div className="vr m-0 p-0"></div>
                        <Nav.Link href="#action2" className="text-white py-3">Opporunities</Nav.Link>
                        <div className="vr"></div>
                        <Nav.Link href="#action2" className="text-white py-3">Jobs</Nav.Link>
                        <div className="vr"></div>
                        <NavDropdown title="Accounting" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Another action
                            </NavDropdown.Item>
                        </NavDropdown>
                        <div className="vr"></div>
                        <NavDropdown title="Customers" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Another action
                            </NavDropdown.Item>
                        </NavDropdown>
                        <div className="vr"></div>
                        <NavDropdown title="Invertory" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Another action
                            </NavDropdown.Item>
                        </NavDropdown>
                        <div className="vr"></div>
                        <NavDropdown title="Dispatcher" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Another action
                            </NavDropdown.Item>
                        </NavDropdown>
                        <div className="vr"></div>
                    </Nav>
                    <div className="me-3">
                        <Form className="position-relative" >
                            <Form.Control type="search" placeholder="Search anything..." className="me-2" style={{ borderRadius: "25px", paddingLeft: "30px" }} aria-label="Search" />
                            <div className="position-absolute searchPos"><Icon icon="ic:baseline-search" style={{ color: "#000000" }} width={"30px"} /></div>
                        </Form>
                    </div>

                    <Icon icon="iconamoon:profile-circle-fill" width={"40px"} />
                    <p className="mx-3 my-0 text-white">{Username}</p>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;
