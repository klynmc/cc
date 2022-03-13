import React from 'react'
import './calendar.css'
import moment from 'moment'

function Calendar() {

    const value = moment()
    const firstDay = value.clone().startOf("month").startOf("week")
    const lastDay = value.clone().endOf("month").endOf("week")
    const day = firstDay.clone().subtract(1, "day");
    const calendar = []

    while(day.isBefore(lastDay, "day")) {
        calendar.push(
            Array(7)
        )
    }

    return (
        <div className="calendar-div">
                <h2>Want to check availability?</h2>
                <div className="calendar">
                    <h3>*calendar here*</h3>
                    {firstDay.format("MM/DD")} - {lastDay.format("MM/DD")}
                </div>
        </div>
    )
}

export default Calendar