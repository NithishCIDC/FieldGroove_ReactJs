import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Col, Row } from "react-bootstrap";
import Sidebar from "../sidebar/Sidebar";
import Header from "../Header/Header";
import { CalendarConstant } from "../../Constants/ApplicationConstants";

function Calendar() {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Row className="m-0 p-0 sticky-top d-flex">
                <Header />
            </Row>

            <Row className="m-0 p-0 flex-fill">
                <Col xs={1} className="p-0 m-0 sidebgColor" style={{ width: "7.2%" }}>
                    <Sidebar />
                </Col>
                <Col className="m-0 p-0">
                    <div className="m-5 my-3">
                        <Fullcalendar
                            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                            initialView={"dayGridMonth"}
                            navLinks={true}
                            nowIndicator={true}
                            now={new Date()}
                            headerToolbar={{
                                start: "today prev,next", // will normally be on the left. if RTL, will be on the right
                                center: "title",
                                end: "dayGridMonth,timeGridWeek,timeGridDay", // will normally be on the right. if RTL, will be on the left
                            }}
                            editable={false}
                            events={CalendarConstant}
                            height={"90vh"}
                        />
                    </div>
                </Col>
            </Row>
        </div>

    );
}

export default Calendar;