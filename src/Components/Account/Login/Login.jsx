import Footer from "../AccountFooter";
import { Button, Col, Container, Row } from "react-bootstrap";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import AccountHeader from "../AccountHeader";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="Login">
      <AccountHeader />
      <div className="LoginBody flex-fill mt-4">
        <Container className="px-5 mt-5">
          <Row className="mx-5">
            <Col xs={5} className="text-white p-5 Logincol1">
              <form className="vstack gap-4">
                <h4>SIGN IN</h4>
                <div className="vstack gap-2">
                  <label>Email</label>
                  <input type="email" />
                </div>
                <div className="vstack gap-2">
                  <label>Password</label>
                  <input type="password" />
                </div>
                <div className="hstack gap-2">
                  <input type="checkbox" className="form-check-input" />
                  <label>Remember Me</label>
                </div>
                <div className="hstack gap-2">
                  <Button className="w-50 bg-transparent border-1 border-secondary border-opacity-50 text-secondary rounded-1 py-2">
                    Forgot Password ?
                  </Button>
                  <Button
                    className="w-50 d-flex justify-content-center align-items-center py-2 border-0 orangeBtn"
                  >
                    <span>Sign In</span>{" "}
                    <MdOutlineKeyboardArrowRight className="fs-4 " />
                  </Button>
                </div>
              </form>
            </Col>
            <Col className="Logincol2 p-5">
              <div>
                <h4 style={{ color: "#f65a4d" }}>NEED AN ACCOUNT</h4>
                <p className="mt-3" style={{ fontSize: "18px", color: "#1F3063" }}>
                  Create an account to start managing
                  <br /> your company. Click the &quot;Create New Account&quot;
                  <br /> button below to get started
                </p>
                <Link to={"/Account/Register"}
                  className="btn text-white rounded-1 border-0 py-2"
                  style={{ backgroundColor: "#192447" }}
                >
                  Create New Account
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Login;
