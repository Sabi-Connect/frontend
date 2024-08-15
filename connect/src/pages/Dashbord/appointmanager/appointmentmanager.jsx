import React, { useState } from 'react';


import styles from './appointmentmanager.module.css'
import BookAppointment from "../appoint/bookApp/bookappt";
import CancelAppointment from "../appoint/cancelApp/cancelApp";

const AppointmentManager = () => {
    const [appointments, setAppointments] = useState([]);
    const addAppointment = (appointment) => {
        setAppointments([...appointments, appointment]);
    };

    const cancelAppointment = (id) => {
        setAppointments(appointments.filter(app => app.id !== id));
    };

    return (
        <div className={styles.container}>
            <div className={styles.section}>
                <h2 className={styles.header}>Book Appointment</h2>
                <BookAppointment addAppointment={addAppointment}/>
            </div>
            <div className={styles.section}>
                <h2 className={styles.header}>Cancel Appointment</h2>
                <CancelAppointment appointments={appointments} cancelAppointment={cancelAppointment}/>
            </div>
        </div>
    );
};

export default AppointmentManager;
