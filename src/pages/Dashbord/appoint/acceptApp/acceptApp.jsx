import {useState} from "react";

const AcceptAppointment = ({ appointments, updateAppointmentStatus }) => {
    const [id, setId] = useState('');

    const handleAccept = () => {
        updateAppointmentStatus(id, 'Accepted');
        alert('Appointment Accepted');
    };

    return (
        <div>
            <h2>Accept Appointment</h2>
            <select onChange={(e) => setId(e.target.value)}>
                <option value="">Select Appointment</option>
                {appointments.map(app => (
                    <option key={app.id} value={app.id}>{app.title} on {app.date}</option>
                ))}
            </select>
            <button onClick={handleAccept}>Accept Appointment</button>
        </div>
    );
};
export default AcceptAppointment;
