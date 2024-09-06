import React from 'react';
import './index.module.css';
import { updateAppointmentApi } from '../../../../../../component/clientApi';

const updateAppointmentStatus = (appointments, setAppointments, id, status) => {
    setAppointments(appointments.map(app =>
        app.id === Number(id) ? { ...app, status } : app
    ));
};

const UpdateAppointment = ({ isClient, appointments, setAppointments }) => {
    const handleUpdate = async (id, status) => {

        updateAppointmentStatus(appointments, setAppointments, id, status);
        const userData = {
            id,
            status
        };

        try {
            const result = await updateAppointmentApi(userData);
            console.log('Appointment update successful:', result);
            alert(`Appointment ${status}`);
        } catch (error) {
            console.error('Error updating appointment:', error.message);
            alert(`Failed to update appointment: ${error.message}`);
        }
    };

    const handleAccept = (id) => {
        handleUpdate(id, 'Accepted');
    };

    const handleDecline = (id) => {
        handleUpdate(id, 'Declined');
    };

    return (
        <>
            {!isClient && Array.isArray(appointments) && appointments.length > 0 ? (
                appointments.map(app => (
                    <div key={app.id}>
                        <span>{app.title} on {app.date}</span>
                        <button onClick={() => handleAccept(app.id)}>Accept</button>
                        <button onClick={() => handleDecline(app.id)}>Decline</button>
                    </div>
                ))
            ) : (
                <p>No appointments available to update.</p>
            )}
        </>
    );
};

export default UpdateAppointment;




// import React from 'react';
// import './index.module.css'
//
// const updateAppointmentStatus = (appointments, setAppointments, id, status) => {
//     setAppointments(appointments.map(app =>
//         app.id === Number(id) ? { ...app, status } : app
//     ));
// };
//
// const UpdateAppointment = ({ isClient, appointments, setAppointments }) => {
//     const handleAccept = (id) => {
//         updateAppointmentStatus(appointments, setAppointments, id, 'Accepted');
//         alert('Appointment Accepted');
//     };
//
//     const handleDecline = (id) => {
//         updateAppointmentStatus(appointments, setAppointments, id, 'Declined');
//         alert('Appointment Declined');
//     };
//
//     return (
//         <>
//             {!isClient && Array.isArray(appointments) && appointments.length > 0 ? ( // Check if appointments is an array and has items
//                 appointments.map(app => (
//                     <div key={app.id}>
//                         <span>{app.title} on {app.date}</span>
//                         <button onClick={() => handleAccept(app.id)}>Accept</button>
//                         <button onClick={() => handleDecline(app.id)}>Decline</button>
//                     </div>
//                 ))
//             ) : (
//                 <p>No appointments available to update.</p> // Fallback message if appointments is empty or undefined
//             )}
//         </>
//     );
// };
//
// export default UpdateAppointment;