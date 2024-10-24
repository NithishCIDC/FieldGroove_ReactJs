import { Col, Container, Row } from "react-bootstrap";
import AccountHeader from "../AccountHeader";
import AccountFooter from "../AccountFooter";
import RegisterForm from "./RegisterForm";

const Register = () => {
  return (
    <div>
      <AccountHeader />
      <div className="LoginBody mb-5 pb-5">
        <Container className="px-5">
          <div className="mt-5 mb-5">
            <h1 className="fw-lighter text-center blueText" style={{ fontSize: "48px" }}>Try FieldGroove Free for 7 Days!</h1>
          </div>
          <RegisterForm />
          <div className="mt-5 pt-5">
            <div className="text-center mb-5">
              <p className="fw-normal" style={{ color: "#3652AC", fontSize: "36px" }}>Frequently Asked Question</p>
            </div>
            <Row className="gap-5 d-flex justify-content-center">
              <Col xs={5} className="QuestionStyle d-flex  flex-column justify-content-between">

                <div>
                  <h6>Will my card on file be charged?</h6>
                  <p>
                    We don’t charge anything at all before or during the trial period. The card on file is simply so we know you’re a person, not a robot.
                  </p>
                </div>
                <hr />
                <div>
                  <h6>How long is my free trial?</h6>
                  <p>The free trial is for 7 days.</p>
                </div>
                <hr />
                <div>
                  <h6>Do you have customer representatives to answer questions during my trial?</h6>
                  <p>We have several resources (documents and videos) for training. The portal has a button you can click to send instant questions, and you will be assigned a personal point of contact who will be available to assist as needed.</p>
                </div>
              </Col>
              <Col xs={5} className="QuestionStyle d-flex  flex-column justify-content-between">
                <div>
                  <h6>Can I cancel my free trial at any time?</h6>
                  <p>Absolutely. All we ask is that you give FieldGroove a fair shot, because it is rare that we can’t improve your business!</p>
                </div>
                <hr />
                <div>
                  <h6>Can I change or cancel my plan later on?</h6>
                  <p>We have several resources (documents and videos) for training. The portal has a button you can click to send instant questions, and you will be assigned a personal point of contact who will be available to assist as needed.</p>
                </div>
                <hr />
                <div>
                  <h6>What happens after my trial ends?</h6>
                  <p>Typically, you’ll find that you can’t live without us! Before the end of the trial, we will be providing you with a quote for continuing the subscription. We will also be working closely with you toward a seamless transition. After the initial 7 days trial, with your acceptance of our quote and your approval, we will start charging for the monthly subscription. We will provide you with all the tools necessary for on-boarding as well.</p>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <AccountFooter />
    </div>
  );
};

export default Register;
