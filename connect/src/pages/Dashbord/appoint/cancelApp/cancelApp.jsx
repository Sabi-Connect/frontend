import React, {useState} from 'react';
import './index.module.css'

const CancelAppointment = ({ appointments, removeAppointment }) => {

    const [id, setId] = useState('');

    const handleCancel = () => {
        if (id) {
            removeAppointment(id);
            alert('Appointment Cancelled');
        } else {
            alert('Please select an appointment to cancel.');
        }
    };

    return (
        <div>
            <h2>Cancel Appointment</h2>
            <select onChange={(e) => setId(e.target.value)}>
                <option value="">Select Appointment</option>
                {Array.isArray(appointments) && appointments.map(app => (
                    <option key={app.id} value={app.id}>{app.title} on {app.date}</option>
                ))}
            </select>
            <button onClick={handleCancel}>Cancel Appointment</button>
        </div>
    );
};

export default CancelAppointment;