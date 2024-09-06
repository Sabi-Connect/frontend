import React, { useState } from 'react';
import './index.module.css';
import { cancelAppointmentApi } from "../../../../../../component/clientApi";
import {useNavigate} from "react-router-dom";

const CancelAppointment = ({ appointments, removeAppointment }) => {

    const navigate = useNavigate();
    const [id, setId] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const handleCancel = () => {
        const appointment = appointments.find(app => app.id === id);

        if (appointment) {
            handleSubmit({ id: appointment.id });
        } else {
            alert('Appointment not found. Please select a valid appointment to cancel.');
        }
    };

    const handleSubmit = async (values) => {
        setLoading(true);
        setErrorMessage('');
        setSuccessMessage('');

        try {
            const response = await cancelAppointmentApi(values);

            const successMessage = response.data?.message || 'Cancel Appointment successful!';

            setSuccessMessage(successMessage);

            removeAppointment(values.id);

            const { token, refreshToken } = response.data.data;

            localStorage.setItem('accessToken', token);
            localStorage.setItem('refreshToken', refreshToken);
            console.log('Access token:', token);


            setTimeout(() => {
                navigate('/book');
            }, 2000);
        } catch (error) {
            if (error.response && error.response.data) {
                const backendMessage = error.response.data.message;
                setErrorMessage(backendMessage);
            } else {
                setErrorMessage('An error occurred while trying to cancel the appointment.');
            }
        } finally {
            setLoading(false);
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
            <button onClick={handleCancel} disabled={loading}>Cancel Appointment</button>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
        </div>
    );
};

export default CancelAppointment;







//
// import React, { useState } from 'react';
// import './index.module.css';
// import { cancelAppointmentApi } from "../../../../component/clientApi";
//
// const CancelAppointment = ({ appointments, removeAppointment }) => {
//     const [id, setId] = useState('');
//     const [errorMessage, setErrorMessage] = useState('');
//     const [successMessage, setSuccessMessage] = useState('');
//     const [loading, setLoading] = useState(false);
//
//     const handleCancel = () => {
//         const appointment = appointments.find(app => app.id === id);
//
//         if (appointment) {
//             // Proceed with the cancellation
//             handleSubmit({ id: appointment.id });
//         } else {
//             alert('Appointment not found. Please select a valid appointment to cancel.');
//         }
//     };
//
//     const handleSubmit = async (values) => {
//         setLoading(true);
//         setErrorMessage('');
//         setSuccessMessage('');
//
//         try {
//             const response = await cancelAppointmentApi(values);
//
//             const successMessage = response.data?.message || 'Cancel Appointment successful!';
//
//             // Update the success message state
//             setSuccessMessage(successMessage);
//
//             // Remove the appointment from the UI
//             removeAppointment(values.id);
//
//             // Store both tokens
//             const { token, refreshToken } = response.data.data;
//
//             localStorage.setItem('accessToken', token);
//             localStorage.setItem('refreshToken', refreshToken);
//             console.log('Access token:', token);
//
//             // Optionally, navigate to another page after a delay
//             setTimeout(() => {
//                 navigate('/');
//             }, 2000);
//         } catch (error) {
//             if (error.response && error.response.data) {
//                 const backendMessage = error.response.data.message;
//                 setErrorMessage(backendMessage);
//             } else {
//                 setErrorMessage('An error occurred while trying to cancel the appointment.');
//             }
//         } finally {
//             setLoading(false);
//         }
//     };
//
//     return (
//         <div>
//             <h2>Cancel Appointment</h2>
//             <select onChange={(e) => setId(e.target.value)}>
//                 <option value="">Select Appointment</option>
//                 {Array.isArray(appointments) && appointments.map(app => (
//                     <option key={app.id} value={app.id}>{app.title} on {app.date}</option>
//                 ))}
//             </select>
//             <button onClick={handleCancel} disabled={loading}>Cancel Appointment</button>
//             {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
//             {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
//         </div>
//     );
// };
//
// export default CancelAppointment;

