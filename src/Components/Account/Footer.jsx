import { Col, Container, Row } from "react-bootstrap";
import Logo from "../../assets/images/logo-footer.jpg";
import { LoginConstant } from "../../Constants/ApplicationConstants";

const Footer = () => {
  return (
    <div>
      <Container className="d-flex justify-content-center pb-3">
        <ul
          className="list-unstyled hstack gap-4 text-uppercase navStyle m-0"
          style={{ color: "#182446" }}
        >
          <li>
            <a>{LoginConstant.navItem1}</a>
          </li>
          <li>|</li>
          <li>
            <a>{LoginConstant.navItem3}</a>
          </li>
          <li>|</li>
          <li>
            <a>{LoginConstant.navItem4}</a>
          </li>
          <li>|</li>
          <li>
            <a>{LoginConstant.navItem6}</a>
          </li>
          <li>|</li>
          <li>
            <a>{LoginConstant.navItem5}</a>
          </li>
        </ul>
      </Container>
      <div className="py-5" style={{ backgroundColor: "#182346" }}>
        <Container className="px-5 py-3">
          <img src={Logo} alt="" />
          <Row
            className="d-flex justify-content-between mt-2"
            style={{ fontSize: "14px" }}
          >
            <Col lg={4} className="text-justify text-secondary">
              Copyright © FieldGroove, LLC 2024. All Rights Reserved. 716 Newman
              Springs Road, Suite 307 Lincroft, NJ 07738
              <br />
              <span style={{ color: "#f65a4d" }}>Privacy Policy</span>
            </Col>

            <Col lg={4} className="text-justify text-secondary">
              We would love to show you the power of FieldGroove. To setup a
              demo or get an account setup, please contact us at &nbsp;
              <span style={{ color: "#f65a4d" }}>
                {LoginConstant.FooterEmail}&nbsp;
              </span>
              or by phone at&nbsp;
              <span style={{ color: "#f65a4d" }}>
                {LoginConstant.FooterPhone}&nbsp;
              </span>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
