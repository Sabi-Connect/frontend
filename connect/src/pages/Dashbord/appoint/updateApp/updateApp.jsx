import React from 'react';
import './index.module.css'

const updateAppointmentStatus = (appointments, setAppointments, id, status) => {
    setAppointments(appointments.map(app =>
        app.id === Number(id) ? { ...app, status } : app
    ));
};

const UpdateAppointment = ({ isClient, appointments, setAppointments }) => {
    const handleAccept = (id) => {
        updateAppointmentStatus(appointments, setAppointments, id, 'Accepted');
        alert('Appointment Accepted');
    };

    const handleDecline = (id) => {
        updateAppointmentStatus(appointments, setAppointments, id, 'Declined');
        alert('Appointment Declined');
    };

    return (
        <>
            {!isClient && Array.isArray(appointments) && appointments.length > 0 ? ( // Check if appointments is an array and has items
                appointments.map(app => (
                    <div key={app.id}>
                        <span>{app.title} on {app.date}</span>
                        <button onClick={() => handleAccept(app.id)}>Accept</button>
                        <button onClick={() => handleDecline(app.id)}>Decline</button>
                    </div>
                ))
            ) : (
                <p>No appointments available to update.</p> // Fallback message if appointments is empty or undefined
            )}
        </>
    );
};

export default UpdateAppointment;