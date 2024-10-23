import AccountHeader from "../AccountHeader"
import AccountFooter from "../AccountFooter"
import { Container, Row } from 'react-bootstrap'

const WaitingActivation = () => {
    return (
        <div className="vh-100 d-flex flex-column">
            <AccountHeader />
            <div className="flex-fill mt-5 pt-5 LoginBody">
                <Container className="px-5">
                    <Row className="mx-5 py-5" style={{ backgroundColor: "#F2F5F8" }}>
                        <div className="text-center py-5">
                            <h4 className="text-uppercase mb-4" style={{ color: "#e56355" }}>Thank you for signing up</h4>
                            <p>Just One More Step.</p>
                            <p>A Validation email was just sent to you.</p>
                            <p>Please click the link in the email to activate your account and login.</p>
                        </div>
                    </Row>
                </Container>
            </div>
            <AccountFooter />
        </div>
    )
}

export default WaitingActivation