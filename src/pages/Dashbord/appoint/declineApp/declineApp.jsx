import {useState} from "react";
import './index.module.css'

const DeclineAppointment = ({ appointments, updateAppointmentStatus }) => {
    const [id, setId] = useState('');

    const handleDecline = () => {
        updateAppointmentStatus(id, 'Declined');
        alert('Appointment Declined');
    };

    return (
        <div>
            <h2>Decline Appointment</h2>
            <select onChange={(e) => setId(e.target.value)}>
                <option value="">Select Appointment</option>
                {appointments.map(app => (
                    <option key={app.id} value={app.id}>{app.title} on {app.date}</option>
                ))}
            </select>
            <button onClick={handleDecline}>Decline Appointment</button>
        </div>
    );
};

export default DeclineAppointment;
