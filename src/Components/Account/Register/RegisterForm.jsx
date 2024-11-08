import { Icon } from '@iconify/react/dist/iconify.js'
import { Formik, Form as FormikForm } from 'formik';
import { useState } from 'react'
import { Button, Carousel, Col, Form, Row } from 'react-bootstrap'
import { RegisterValidation } from "../ValidationSchema"
import { initialValue, accountFields, addressFields } from '../../../Constants/ApplicationConstants';
import { useNavigate } from 'react-router-dom';
import { usePostRegisterMutation } from "../../../redux/Slice";


const RegisterForm = () => {
    const [register, { isSuccess }] = usePostRegisterMutation()
    const navigate = useNavigate();
    const [formErrors, setformErrors] = useState();
    const [Index, setIndex] = useState(0);
    const handleValidation = async (values) => {
        try {
            await RegisterValidation.validate(values, { abortEarly: false });
            setformErrors({});
            return true;
        } catch (error) {
            console.log(error.inner);
            const formattedErrors = {};
            error.inner.forEach((err) => {
                formattedErrors[err.path] = err.message;
            });
            setformErrors(formattedErrors);
            return false;
        }
    };
    return (
        <Row className="d-flex justify-content-center">
            <Col xs={4} className="text-white py-5 Logincol1">
                <Formik
                    initialValues={initialValue}
                    onSubmit={async (values, { setSubmitting }) => {
                        setSubmitting(true);
                        const isValid = await handleValidation(values);
                        if (isValid) {
                            var response = await register(values);
                            response.error.data && setformErrors([response.error.data]);
                            isSuccess && navigate('/Account/WaitingActivation');
                        }
                    }}
                >
                    {({ values, handleChange, handleSubmit, isSubmitting }) => (
                        <FormikForm>
                            <Carousel indicators={false} controls={false} activeIndex={Index}>
                                <Carousel.Item className='px-4' style={{ height: "730px" }}>
                                    <div className="vstack gap-2 formRegister">
                                        <h4>Account info</h4>
                                        {accountFields.map(field => (
                                            <div className="vstack" key={field.name}>
                                                <Form.Label>{field.label}</Form.Label>
                                                {field.type === "select" ? (
                                                    <Form.Select
                                                        name={field.name}
                                                        onChange={handleChange}
                                                        value={values[field.name]}
                                                    >
                                                        {field.options.map(option => (
                                                            <option key={option} value={option}>{option}</option>
                                                        ))}
                                                    </Form.Select>
                                                ) : (
                                                    <Form.Control
                                                        type={field.type}
                                                        name={field.name}
                                                        onChange={(e) => {
                                                            if (field.type == "tel") {
                                                                const value = e.target.value.replace(/[^0-9]/g, '');
                                                                if (value.length <= 10) {
                                                                    handleChange({ target: { name: field.name, value } });
                                                                }
                                                            } else {
                                                                handleChange(e);
                                                            }
                                                        }}
                                                        value={values[field.name]}
                                                    />
                                                )}
                                            </div>
                                        ))}
                                        <div className="mt-3">
                                            <Button type="button" className="float-end w-50 border-0 rounded-1 py-2 orangeBtn" onClick={() => { setIndex(1) }}>
                                                Next
                                            </Button>
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item className='px-4' style={{ height: "730px" }}>
                                    <div className="vstack gap-2 formRegister">
                                        <h4>Office Address <Icon icon="mingcute:question-fill" width=".8em" height=".8em" /> </h4>
                                        {addressFields.map(field => (
                                            <div className="vstack" key={field.name}>
                                                <Form.Label>{field.label}</Form.Label>
                                                <Form.Control
                                                    type={field.type}
                                                    name={field.name}
                                                    onChange={handleChange}
                                                    value={values[field.name]}
                                                />
                                            </div>
                                        ))}
                                        <div className="hstack gap-2 mt-3">
                                            <Button type="button" className="w-50 border-1 border-secondary border-opacity-50  rounded-1 py-2 bg-transparent" onClick={() => { setIndex(0) }}>
                                                Back
                                            </Button>
                                            <Button type="submit" className="w-50 border-0 rounded-1 py-2 orangeBtn" disabled={isSubmitting} onSubmit={handleSubmit}>
                                                Sign Up
                                            </Button>
                                        </div>
                                    </div>
                                </Carousel.Item>
                            </Carousel>
                        </FormikForm>
                    )}
                </Formik>
            </Col>
            <Col xs={6} className="Logincol2 p-5">
                <div className='pt-1'>
                    {formErrors != null && (
                        <ul className="text-danger m-0">
                            {Object.entries(formErrors).map(([key, value]) => (
                                <li key={key} className='errorStyle mb-1'>{value}</li>
                            ))}
                        </ul>
                    )}

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