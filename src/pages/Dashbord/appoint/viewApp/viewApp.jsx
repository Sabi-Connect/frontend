import './index.module.css'

const ViewAllAppointments = ({ appointments = []}) => {
        console.log('Appointments:', appointments);
        return (
            <div>
                <h2>All Appointments</h2>
                <ul>
                    {appointments.length > 0 ? (
                        appointments.map(app => (
                            <li key={app.id}>{app.title} on {app.date}</li>
                        ))

                    ) : (
                        <li>No appointments available</li>
                    )}
                </ul>
            </div>

        );
};
export default ViewAllAppointments;