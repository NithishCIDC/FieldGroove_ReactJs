import React from "react";
import logo from "../../../assets/images/logo-fieldgroove-blue.svg";
import { Container } from "react-bootstrap";
import { LoginConstant } from "../../../Constants/ApplicationConstants";

const Login = () => {
  return (
    <div>
      <Container className="d-flex justify-content-between px-5 mt-4">
        <div>
          <img src={logo} alt="" width={250} />
        </div>
        <div>
          <ul className="d-flex list-unstyled gap-5 text-uppercase">
            <li>{LoginConstant.navItem1}</li>
            <li>{LoginConstant.navItem2}</li>
            <li>{LoginConstant.navItem3}</li>
            <li>{LoginConstant.navItem4}</li>
            <li>{LoginConstant.navItem5}</li>
            <li>{LoginConstant.navItem6}</li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Login;
