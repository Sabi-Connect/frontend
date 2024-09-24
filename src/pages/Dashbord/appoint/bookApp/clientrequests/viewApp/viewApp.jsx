import React, { useState } from 'react';
import './index.module.css';
import { viewAllAppointmentApi } from '../../../../../../component/clientApi';
const ViewAllAppointments = () => {
        const [appointments, setAppointments] = useState([]);
        const [loading, setLoading] = useState(false);
        const [error, setError] = useState(null);

        // const handleViewAppointments = async () => {
        //         setLoading(true);
        //         setError(null);
        //
        //         try {
        //                 const userData = {};
        //                 const result = await viewAllAppointmentApi(userData);
        //                 setAppointments(result);
        //                 console.log('Appointments fetched:', result);
        //         } catch (error) {
        //                 console.error('Error fetching appointments:', error.message);
        //                 setError(error.message);
        //         } finally {
        //                 setLoading(false);
        //         }
        // };

        const handleViewAppointments = async () => {
                setLoading(true);
                setError(null);

                try {
                        const clientId = localStorage.getItem('userId'); // Assuming clientId is stored in localStorage
                        const result = await viewAllAppointmentApi(clientId);
                        setAppointments(result);
                        console.log('Appointments fetched:', result);
                } catch (error) {
                        console.error('Error fetching appointments:', error.message);
                        setError(error.message);
                } finally {
                        setLoading(false);
                }
        };


        return (
            <div>
                    <h2>All Appointments</h2>
                    <button onClick={handleViewAppointments}>View All Appointments</button>

                    {loading ? (
                        <p>Loading appointments...</p>
                    ) : error ? (
                        <p>Error: {error}</p>
                    ) : (
                        <ul>
                                {appointments.length > 0 ? (
                                    appointments.map(app => (
                                        <li key={app.id}>{app.title} on {app.date}</li>
                                    ))
                                ) : (
                                    <li>No appointments available</li>
                                )}
                        </ul>
                    )}
            </div>
        );
};

export default ViewAllAppointments;




// import './index.module.css'

// const ViewAllAppointments = ({ appointments = []}) => {
//         console.log('Appointments:', appointments);
//         return (
//             <div>
//                 <h2>All Appointments</h2>
//                 <ul>
//                     {appointments.length > 0 ? (
//                         appointments.map(app => (
//                             <li key={app.id}>{app.title} on {app.date}</li>
//                         ))
//
//                     ) : (
//                         <li>No appointments available</li>
//                     )}
//                 </ul>
//             </div>
//
//         );
// };
// export default ViewAllAppointments;