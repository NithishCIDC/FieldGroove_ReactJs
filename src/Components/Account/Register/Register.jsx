import { Container } from "react-bootstrap";
import { LoginConstant } from "../../../Constants/ApplicationConstants";
import logo from "../../../assets/images/logo-fieldgroove-blue.svg";

const Register = () => {
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
            <li>{LoginConstant.navItem5}</li>
            <li className="rounded-pill text-white p-2 px-3 blueBtn">
              {LoginConstant.navItem6}
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Register;
