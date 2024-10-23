import logo from "../../assets/images/logo-fieldgroove-blue.svg";
import { Container } from 'react-bootstrap'
import { LoginConstant } from '../../Constants/ApplicationConstants'
import { Link } from "react-router-dom";

const AccountHeader = () => {
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
                        <li>{LoginConstant.navItem2}</li>
                        <li>{LoginConstant.navItem3}</li>
                        <li>{LoginConstant.navItem4}</li>
                        <li><Link to="/Register" className="rbLink">{LoginConstant.navItem5}</Link></li>
                        <li className="rounded-pill text-white p-2 px-3 blueBtn">
                            <Link to="/" className="rbLink">{LoginConstant.navItem6}</Link>

                        </li>
                    </ul>
                </div>
            </Container>
        </div>
    )
}

export default AccountHeader