import React, { useState } from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import AvailableAppointment from '../AvailableAppointment/AvailableAppointment';

const Appointment = () => {
    const[selectedDay, setSelectedDay] =useState(new Date())
    return (
        <div>
            <AppointmentBanner
            selectedDay={selectedDay}
            setSelectedDay={setSelectedDay}
            ></AppointmentBanner>
            <AvailableAppointment selectedDay={selectedDay}></AvailableAppointment>
        </div>
    );
};

export default Appointment;