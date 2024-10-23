import { Icon } from '@iconify/react/dist/iconify.js'
import { useState } from 'react'
import { Button, Carousel, Col, Form, Row } from 'react-bootstrap'

const RegisterForm = () => {
    const [Index, setIndex] = useState(0);
    return (
        <Row className="d-flex justify-content-center">
            <Col xs={4} className="text-white py-5 Logincol1">
                <Carousel indicators={false} controls={false} activeIndex={Index}>
                    <Carousel.Item className='px-4' style={{ height: "730px" }}>
                        <form className="vstack gap-2 formRegister">
                            <h4>Account info</h4>
                            <div className="vstack ">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" />
                            </div>
                            <div className="vstack">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" />
                            </div>
                            <div className="vstack">
                                <Form.Label>Company Name</Form.Label>
                                <Form.Control type="text" />
                            </div>
                            <div className="vstack">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control type="text" />
                            </div>
                            <div className="vstack">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" />
                            </div>
                            <div className="vstack">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" />
                            </div>
                            <div className="vstack">
                                <Form.Label>Password Again</Form.Label>
                                <Form.Control type="password" />
                            </div>
                            <div className="vstack">
                                <Form.Label>Time Zone</Form.Label>
                                <Form.Select>
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
                        </form>
                    </Carousel.Item>
                    <Carousel.Item className='px-4' style={{ height: "730px" }}>
                        <form className="vstack gap-2 formRegister">
                            <h4>Office Address <Icon icon="mingcute:question-fill" width=".8em" height=".8em" /> </h4>
                            <div className="vstack ">
                                <Form.Label>Street Address 1</Form.Label>
                                <Form.Control type="text" />
                            </div>
                            <div className="vstack">
                                <Form.Label>Street Address 2</Form.Label>
                                <Form.Control type="text" />
                            </div>
                            <div className="vstack">
                                <Form.Label>City</Form.Label>
                                <Form.Control type="text" />
                            </div>
                            <div className="vstack">
                                <Form.Label>State</Form.Label>
                                <Form.Control type="text" />
                            </div>
                            <div className="vstack">
                                <Form.Label>Zip</Form.Label>
                                <Form.Control type="text" />
                            </div>
                            <div className="mt-3 hstack  gap-2">

                                <Button className="w-50 rounded-1 py-2 bg-transparent border-1 border-secondary border-opacity-25" onClick={() => { setIndex(0) }}>
                                    Back
                                </Button>

                                <Button className="w-50 border-0 rounded-1 py-2 orangeBtn">
                                    Sign up
                                </Button>
                            </div>
                        </form>
                    </Carousel.Item>
                </Carousel>
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