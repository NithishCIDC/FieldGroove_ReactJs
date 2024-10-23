import logo from "../../assets/images/logo-fieldgroove-blue.svg";
import { Container, NavDropdown } from 'react-bootstrap'
import { LoginConstant } from '../../Constants/ApplicationConstants'
import { Link, useLocation } from "react-router-dom";

const AccountHeader = () => {
    const loaction = useLocation();
    return (
        <div>
            <Container className="d-flex justify-content-between px-5 mt-4 ">
                <div className="align-center">
                    <img src={logo} alt="" width={250} />
                </div>
                <div>
                    <ul
                        className="list-unstyled hstack gap-5 text-uppercase navStyle m-0"
                        style={{ color: "#182446" }}
                    >
                        <li>
                            <a>{LoginConstant.navItem1}</a>
                        </li>
                        <li>
                            <NavDropdown title={LoginConstant.navItem2} id="nav-dropdown" className="HeaderDropdown">
                                <NavDropdown.Item eventKey="0">FLOORING</NavDropdown.Item>
                                <NavDropdown.Item eventKey="1">ROOFING</NavDropdown.Item>
                                <NavDropdown.Item eventKey="2">DRYWALL</NavDropdown.Item>
                                <NavDropdown.Item eventKey="3">INSULATION</NavDropdown.Item>
                            </NavDropdown>
                        </li>
                        <li>{LoginConstant.navItem3}</li>
                        <li>{LoginConstant.navItem4}</li>
                        <li>{loaction.pathname == "/Account/Register" ? <Link to="/" className="rbLink">{LoginConstant.navItem6}</Link> : <Link to="/Account/Register" className="rbLink">{LoginConstant.navItem5}</Link>}</li>
                        <li className="rounded-pill text-white p-2 px-3 blueBtn">
                            {loaction.pathname == "/Account/Register" ? <Link to="/Account/Register" className="rbLink">{LoginConstant.navItem5}</Link> : <Link to="/" className="rbLink">{LoginConstant.navItem6}</Link>}
                        </li>
                    </ul>
                </div>
            </Container>
        </div>
    )
}

export default AccountHeader