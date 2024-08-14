import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import './index.module.css';



const AppointmentComponent = () => {
    const [isClient, setIsClient] = useState(true);

    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <div className="appointment-container">
            <h1>SabiConnect</h1>
            <h2>{isClient ? 'Client Appointment' : 'Skilled Worker Appointment'}</h2>

            <div className="role-toggle">
                <button onClick={() => setIsClient(true)}>Client</button>
                <button onClick={() => setIsClient(false)}>Skilled Worker</button>
            </div>

            <div className="appointment-actions">
                {isClient ? (
                    <>
                        <button onClick={() => handleNavigation('/book')}>Book Appointment</button>
                        <button onClick={() => handleNavigation('/cancel')}>Cancel Appointment</button>
                        <button onClick={() => handleNavigation('/update')}>Update Appointment</button>
                        <button onClick={() => handleNavigation('/delete')}>Delete Appointment</button>
                        <button onClick={() => handleNavigation('/view')}>View All Appointments</button>
                    </>
                ) : (
                    <>
                        <button onClick={() => handleNavigation('/accept')}>Accept Appointment</button>
                        <button onClick={() => handleNavigation('/decline')}>Decline Appointment</button>
                        <button onClick={() => handleNavigation('/delete')}>Delete Appointment</button>
                        <button onClick={() => handleNavigation('/view')}>View All Appointments</button>
                    </>
                )}
            </div>
        </div>
    );
};

export default AppointmentComponent;

