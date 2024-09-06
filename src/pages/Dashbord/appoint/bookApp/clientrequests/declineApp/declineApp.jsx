import { useState } from "react";
import './index.module.css';
import { deleteAppointmentApi } from '../../../../../../component/clientApi';

const DeleteAppointment = ({ appointments, updateAppointmentStatus }) => {
    const [id, setId] = useState('');

    const handleDelete = async () => {

        if (!id) {
            alert('Please select an appointment to delete.');
            return;
        }


        const userData = { id };

        try {
            const result = await deleteAppointmentApi(userData);
            console.log('Appointment deleted successfully:', result);
            alert('Appointment Deleted');
            updateAppointmentStatus(id, 'Deleted');
        } catch (error) {
            console.error('Error deleting appointment:', error.message);
            alert(`Failed to delete appointment: ${error.message}`);
        }
    };

    return (
        <div>
            <h2>Delete Appointment</h2>
            <select onChange={(e) => setId(e.target.value)}>
                <option value="">Select Appointment</option>
                {appointments.map(app => (
                    <option key={app.id} value={app.id}>{app.title} on {app.date}</option>
                ))}
            </select>
            <button onClick={handleDelete}>Delete Appointment</button>
        </div>
    );
};

export default DeleteAppointment;




// import {useState} from "react";
// import './index.module.css'
//
// const DeleteAppointment = ({ appointments, updateAppointmentStatus }) => {
//     const [id, setId] = useState('');
//
//     const handleDecline = () => {
//         updateAppointmentStatus(id, 'Declined');
//         alert('Appointment Declined');
//     };
//
//     return (
//         <div>
//             <h2>Decline Appointment</h2>
//             <select onChange={(e) => setId(e.target.value)}>
//                 <option value="">Select Appointment</option>
//                 {appointments.map(app => (
//                     <option key={app.id} value={app.id}>{app.title} on {app.date}</option>
//                 ))}
//             </select>
//             <button onClick={handleDecline}>Decline Appointment</button>
//         </div>
//     );
// };

// export default DeleteAppointment;
