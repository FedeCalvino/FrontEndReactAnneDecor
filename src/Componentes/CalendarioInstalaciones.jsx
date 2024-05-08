import React from 'react';
import { Calendar, dayjsLocalizer } from 'react-big-calendar'
import dayjs from 'dayjs'
import "react-big-calendar/lib/css/react-big-calendar.css";

export const CalendarioInstalaciones = () => {
    //const localizer = dayjsLocalizer(dayjs)

  return (
    <div style={{height:"95vh",width:"70vh"}}>
        <Calendar
        Localizer={localizer}
        />
    </div>
  )
}
