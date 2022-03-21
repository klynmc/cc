import React, {useState} from 'react'
import './calendar.css'
import reactCalendar from 'react-calendar'

function Calendar() {

    const [value, onChange] = useState(new Date());

    return (
        <div className="calendar-div">
                <h2>Want to check availability?</h2>
                <div className="calendar">
                   {/*  <h3>*calendar here*</h3>  */}
                    {/* {reactCalendar()} */}
                </div>
        </div>
    )
}

export default Calendar