import { Icon } from '@iconify/react/dist/iconify.js'
import { Formik, Form as FormikForm } from 'formik';
import { useState } from 'react'
import { Button, Carousel, Col, Form, Row } from 'react-bootstrap'
import { ValidationSchema } from "./ValidationSchema"

const RegisterForm = () => {
    const [Index, setIndex] = useState(0);
    const initialValue = {
        firstname: "",
        lastname: "",
        companyname: "",
        phone: "",
        email: "",
        password: "",
        passwordagain: "",
        timezone: "",
        streetad1: "",
        streetad2: "",
        city: "",
        state: "",
        zip: "",
    }
    return (
        <Row className="d-flex justify-content-center">
            <Col xs={4} className="text-white py-5 Logincol1">
                <Formik
                    initialValues={initialValue}
                    validationSchema={ValidationSchema}

                    onSubmit={(values, { setSubmitting }) => {
                        setSubmitting(false);
                        console.log(values)
                    }}
                >
                    {({ values, handleChange, handleSubmit, isSubmitting }) => (
                        <FormikForm onSubmit={handleSubmit}>
                            <Carousel indicators={false} controls={false} activeIndex={Index}>
                                <Carousel.Item className='px-4' style={{ height: "730px" }}>
                                    <div className="vstack gap-2 formRegister">
                                        <h4>Account info</h4>
                                        <div className="vstack ">
                                            <Form.Label>First Name</Form.Label>
                                            <Form.Control type="text"
                                                name="firstname"
                                                onChange={handleChange}
                                                value={values.firstname}
                                            />
                                        </div>
                                        <div className="vstack">
                                            <Form.Label>Last Name</Form.Label>
                                            <Form.Control type="text"
                                                name="lastname"
                                                onChange={handleChange}
                                                value={values.lastname}
                                            />
                                        </div>
                                        <div className="vstack">
                                            <Form.Label>Company Name</Form.Label>
                                            <Form.Control type="text"
                                                name="companyname"
                                                onChange={handleChange}
                                                value={values.companyname} />
                                        </div>
                                        <div className="vstack">
                                            <Form.Label>Phone</Form.Label>
                                            <Form.Control type="text"
                                                name="phone"
                                                onChange={handleChange}
                                                value={values.phone} />
                                        </div>
                                        <div className="vstack">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control type="email"
                                                name="email"
                                                onChange={handleChange}
                                                value={values.email} />
                                        </div>
                                        <div className="vstack">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password"
                                                name="password"
                                                onChange={handleChange}
                                                value={values.password} />
                                        </div>
                                        <div className="vstack">
                                            <Form.Label>Password Again</Form.Label>
                                            <Form.Control type="password"
                                                name="passwordagain"
                                                onChange={handleChange}
                                                value={values.passwordagain} />
                                        </div>
                                        <div className="vstack">
                                            <Form.Label>Time Zone</Form.Label>
                                            <Form.Select
                                                name="timezone"
                                                onChange={handleChange}
                                                value={values.timezone}
                                            >
                                                <option>Central Standard Time</option>
                                                <option>Eastern Standard Time</option>
                                                <option>Mountain Standard Time</option>
                                                <option>Pacific Standard Time</option>
                                            </Form.Select>
                                        </div>
                                        <div className="mt-3">
                                            <Button className="float-end w-50 border-0 rounded-1 py-2 orangeBtn" onClick={() => { setIndex(1) }}>
                                                Next
                                            </Button>
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item className='px-4' style={{ height: "730px" }}>
                                    <div className="vstack gap-2 formRegister">
                                        <h4>Office Address <Icon icon="mingcute:question-fill" width=".8em" height=".8em" /> </h4>
                                        <div className="vstack ">
                                            <Form.Label>Street Address 1</Form.Label>
                                            <Form.Control type="text"
                                                name="streetad1"
                                                onChange={handleChange}
                                                value={values.streetad1} />
                                        </div>
                                        <div className="vstack">
                                            <Form.Label>Street Address 2</Form.Label>
                                            <Form.Control type="text"
                                                name="streetad2"
                                                onChange={handleChange}
                                                value={values.streetad2} />
                                        </div>
                                        <div className="vstack">
                                            <Form.Label>City</Form.Label>
                                            <Form.Control type="text"
                                                name="city"
                                                onChange={handleChange}
                                                value={values.city} />
                                        </div>
                                        <div className="vstack">
                                            <Form.Label>State</Form.Label>
                                            <Form.Control type="text"
                                                name="state"
                                                onChange={handleChange}
                                                value={values.state} />
                                        </div>
                                        <div className="vstack">
                                            <Form.Label>Zip</Form.Label>
                                            <Form.Control type="text"
                                                name="zip"
                                                onChange={handleChange}
                                                value={values.zip} />
                                        </div>
                                        <div className="mt-3 hstack  gap-2">

                                            <Button className="w-50 rounded-1 py-2 bg-transparent border-1 border-secondary border-opacity-25" onClick={() => { setIndex(0) }}>
                                                Back
                                            </Button>

                                            <Button type='submit' className="w-50 border-0 rounded-1 py-2 orangeBtn" disabled={isSubmitting}>
                                                Sign up
                                            </Button>
                                        </div>
                                    </div>
                                </Carousel.Item>
                            </Carousel>
                        </FormikForm>)}
                </Formik>
            </Col>
            <Col xs={6} className="Logincol2 p-5">
                <div className='pt-1'>
                    <h5 style={{ color: "#f65a4d" }}>SIGN UP NOW TO START YOUR FREE TRIAL</h5>
                    <p className='registerCol2p'>
                        FieldGroove empowers you to manage every aspect of your contracting business anytime,
                        anywhere, and from any device.
                        Enjoy a free trial where you can experience everything FieldGroove has to offer, including:
                    </p>
                    <ul className='registerCol2List'>
                        <li>Managing the entire job cycle from lead creation to post-job reporting</li>
                        <li>Monitoring pipeline and backlog numbers, in real time</li>
                        <li>Building estimates for your prospects to review and accept via email or on the job site</li>
                        <li>Keeping close track of your team, equipment, inventory, and jobs</li>
                        <li>Automating scheduling and dispatching</li>
                        <li>Preparing work orders and load tickets with one click</li>
                    </ul>
                </div>
            </Col>
        </Row>
    )
}

export default RegisterForm