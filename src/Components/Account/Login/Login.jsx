import Footer from "../AccountFooter";
import { Button, Col, Container, Row } from "react-bootstrap";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import AccountHeader from "../AccountHeader";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form as FormikForm } from "formik";
import { LoginValidation } from "../ValidationSchema";
import { useState } from "react";
import { formFields } from "../../../Constants/ApplicationConstants";

const Login = () => {
  const navigate = useNavigate();
  const [formErrors, setformErrors] = useState();
  const handleValidation = async (values) => {
    try {
      await LoginValidation.validate(values, { abortEarly: false });
      setformErrors({});
      return true;
    } catch (error) {
      const formattedErrors = {};
      error.inner.forEach((err) => {
        formattedErrors[err.path] = err.message;
      })
      setformErrors(formattedErrors);
      return false;
    }
  }

  return (
    <div className="Login">
      <AccountHeader />
      <div className="LoginBody flex-fill mt-4">
        <Container className="px-5 mt-5">
          <Row className="mx-5">
            <Col xs={5} className="text-white p-5 Logincol1">
              <Formik
                initialValues={{
                  email: "",
                  password: "",
                  rememberme: false
                }}
                onSubmit={async (values, { setSubmitting }) => {
                  setSubmitting(true);
                  const isValid = await handleValidation(values);
                  if (isValid) {
                    console.log(values)
                    navigate("/Dashboard")
                  }
                }}
              >
                {({ values, handleChange, handleSubmit, isSubmitting }) => (
                  <FormikForm className="vstack gap-4">
                    <h4>SIGN IN</h4>
                    {formFields.map((field, index) => (
                      <div key={index} className="vstack gap-2">
                        <label>{field.label}</label>
                        <input
                          type={field.type}
                          name={field.name}
                          onChange={handleChange}
                          value={values[field.name]}
                        />
                      </div>
                    ))}
                    <div className="hstack gap-2">
                      <input type="checkbox" className="form-check-input"
                        name="rememberme"
                        onChange={handleChange}
                        value={values.rememberme} />
                      <label>Remember Me</label>
                    </div>
                    <div className="hstack gap-2">
                      <Button className="w-50 bg-transparent border-1 border-secondary border-opacity-50 text-secondary rounded-1 py-2">
                        Forgot Password ?
                      </Button>
                      <Button
                        className="w-50 d-flex justify-content-center align-items-center py-2 border-0 orangeBtn"
                        type="submit"
                        onSubmit={handleSubmit}
                        disabled={isSubmitting}
                      >
                        <span>Sign In</span>{" "}
                        <MdOutlineKeyboardArrowRight className="fs-4 " />
                      </Button>
                    </div>
                  </FormikForm>
                )}
              </Formik>
            </Col>
            <Col className="Logincol2 p-5">
              <div>
                {formErrors != null && (
                  <ul className="m-0">
                    {Object.entries(formErrors).map(([key, value]) => (
                      <li key={key} className='errorStyle mb-1'>{value}</li>
                    ))}
                  </ul>
                )}
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