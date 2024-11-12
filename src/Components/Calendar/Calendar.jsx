import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

function Calendar() {
    return (
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
                resourceAreaHeaderContent={'Rooms'}
                //resources={'https://fullcalendar.io/api/demo-feeds/resources.json?with-nesting&with-colors'}
                //events={'https://fullcalendar.io/api/demo-feeds/events.json?single-day&for-resource-timeline&start=2024-11-12T00%3A00%3A00Z&end=2024-11-13T00%3A00%3A00Z&timeZone=UTC'}
                events={[
                    {
                        title: 'All Day Event',
                        start: '2024-11-01'
                    },
                    {
                        title: 'Long Event',
                        start: '2024-11-07',
                        end: '2024-11-10',
                        color: 'purple', // override!
                        startEditable: true
                    },
                    {
                        groupId: '999',
                        title: 'Repeating Event',
                        start: '2024-10-09T16:00:00'
                    },
                    {
                        groupId: '999',
                        title: 'Repeating Event',
                        start: '2024-11-16T16:00:00',
                        startEditable: true,
                        durationEditable: true
                    },
                    {
                        title: 'Conference',
                        start: '2024-11-11',
                        end: '2024-11-13',
                        color: 'purple' // override!
                    },
                    {
                        title: 'Meeting',
                        start: '2024-11-12T10:30:00',
                        end: '2024-11-12T12:30:00'
                    },
                    {
                        title: 'Lunch',
                        start: '2024-11-12T12:00:00'
                    },
                    {
                        title: 'Meeting',
                        start: '2024-11-12T14:30:00'
                    },
                    {
                        title: 'Birthday Party',
                        start: '2024-11-13T07:00:00'
                    },
                    {
                        title: 'Click for Google',
                        url: 'https://google.com/',
                        start: '2024-10-28'
                    }
                ]}
                height={"90vh"}
            />
        </div>
    );
}

export default Calendar;