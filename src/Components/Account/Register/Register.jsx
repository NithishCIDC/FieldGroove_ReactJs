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
                  <p>Will my card on file be charged?</p>
                  <p1>
                    We don’t charge anything at all before or during the trial period. The card on file is simply so we know you’re a person, not a robot.
                  </p1>
                </div>
                <hr />
                <div>
                  <p>How long is my free trial?</p>
                  <p1>The free trial is for 7 days.</p1>
                </div>
                <hr />
                <div>
                  <p>Do you have customer representatives to answer questions during my trial?</p>
                  <p1>We have several resources (documents and videos) for training. The portal has a button you can click to send instant questions, and you will be assigned a personal point of contact who will be available to assist as needed.</p1>
                </div>
              </Col>
              <Col xs={5} className="QuestionStyle d-flex  flex-column justify-content-between">
                <div>
                  <p>Can I cancel my free trial at any time?</p>
                  <p1>Absolutely. All we ask is that you give FieldGroove a fair shot, because it is rare that we can’t improve your business!</p1>
                </div>
                <hr />
                <div>
                  <p>Can I change or cancel my plan later on?</p>
                  <p1>We have several resources (documents and videos) for training. The portal has a button you can click to send instant questions, and you will be assigned a personal point of contact who will be available to assist as needed.</p1>
                </div>
                <hr />
                <div>
                  <p>What happens after my trial ends?</p>
                  <p1>Typically, you’ll find that you can’t live without us! Before the end of the trial, we will be providing you with a quote for continuing the subscription. We will also be working closely with you toward a seamless transition. After the initial 7 days trial, with your acceptance of our quote and your approval, we will start charging for the monthly subscription. We will provide you with all the tools necessary for on-boarding as well.</p1>
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
