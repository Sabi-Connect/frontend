// import React, {useEffect, useState} from 'react';
// import styles from './index.module.css';
// import Category from './category/Category';
// import SKillCard from './skillCard/SKillCard';
// import { categories, electricalDetails } from '../../../../constants/Constants';
// import { plumberDetails } from '../../../../constants/plumber';
// import {useNavigate} from "react-router-dom";
// import {bookingApi} from "../../../../component/clientApi";
//
//
// //     electrical: electricalDetails,
// //     plumbing: plumberDetails,
// // };
//
//
//
// const BookAppointment = ({ addAppointment }) => {
//     const navigate = useNavigate();
//
//
//
//     const [title, setTitle] = useState('');
//     const [errorMessage, setErrorMessage] = useState('');
//
//     const [dateTime, setDateTime] = useState('');
//     const [currentCategory, setCurrentCategory] = useState('');
//     const [loading, setLoading] = useState(false);
//
//     useEffect(() => {
//     }, [currentCategory]);
//
//
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//
//         if (!title || !dateTime || !currentCategory) {
//             alert('Please fill in all fields');
//             return;
//         }
//
//         const values = {
//             title,
//             dateTime,
//             category: currentCategory,
//             userId: localStorage.getItem('userId'),
//         };
//
//         setLoading(true);
//         setErrorMessage('');
//
//
//
//         try {
//             const response = await bookingApi(values);
//
//             const successMessage = response.data?.message || 'Appointment booked successfully!';
//             console.log('Response data:', response.data);
//             // localStorage.getItem('userId');
//
//             alert(successMessage);
//
//
//             // const { token, refreshToken } = response.data.data;
//             //
//             // localStorage.setItem('accessToken', token);
//             // localStorage.setItem('refreshToken', refreshToken);
//             // console.log('Access token:', token);
//
//             setTimeout(() => {
//                 navigate('/');
//             }, 2000);
//         } catch (error) {
//             if (error.response && error.response.data) {
//                 const backendMessage = error.response.data.message;
//                 setErrorMessage(backendMessage);
//             } else {
//                 setErrorMessage('An unexpected error occurred. Please try again.');
//             }
//         } finally {
//             setLoading(false);
//         }
//
//     };
//
//
//     const SkillDisplay =({details = []})=>{
//         return<>
//             {
//                 details.map(( detail, index)=>(
//                     <SKillCard
//                         key = {index}
//                         skill={detail.skill}
//                         image={detail.image}
//                         name={detail.name}
//                         description={detail.description}/>
//                 ))
//             }
//         </>
//     }
//
//     return (
//         <div className={styles.mainBody}>
//             <h2>Book Appointment</h2>
//             <div className={styles.body}>
//                 <div className={styles.left}>
//                     {categories.map((category) => (
//                         <Category
//                             key={category}
//                             categoryName={category}
//                             click={() => setCurrentCategory(category)}
//                         />
//                     ))}
//                 </div>
//                 {/*<div className={styles.left}>*/}
//                 {/*    {categories.map((category) => (*/}
//                 {/*        <Category categoryName={category} click={(currentCategory) => {*/}
//                 {/*            setCurrentCategory(category)*/}
//                 {/*        }}/>*/}
//                 {/*    ))}*/}
//
//                 {/*</div>*/}
//
//                 <div className={styles.right}>
//
//                     {currentCategory === "ELECTRICAL" ? (
//                         <SkillDisplay details={electricalDetails}/>
//                     ) : currentCategory === "PLUMBING" ? (
//                         <SkillDisplay details={plumberDetails}/>
//                     ) : null}
//
//                     <form onSubmit={handleSubmit}>
//                         <div>
//                             <label>Title</label>
//                             <input
//                                 type="text"
//                                 value={title}
//                                 onChange={(e) => setTitle(e.target.value)}
//                             />
//                         </div>
//                         <div>
//                             <label>Date & Time</label>
//                             <input
//                                 type="datetime-local"
//                                 value={dateTime}
//                                 onChange={(e) => setDateTime(e.target.value)}
//                             />
//                         </div>
//                         <div>
//                             <label>Category</label>
//                             <input
//                                 type="text"
//                                 value={currentCategory}
//                                 readOnly
//                             />
//                         </div>
//                         {errorMessage && <p className={styles.error}>{errorMessage}</p>}
//                         <button type="submit" disabled={loading}>
//                             {loading ? 'Booking...' : 'Book Appointment'}
//                         </button>
//                     </form>
//                     <button onClick={() => navigate('/')}>Back to Home</button>
//                 </div>
//
//             </div>
//
//         </div>
//     );
// };
//
// export default BookAppointment;


import React, { useEffect, useState } from 'react';
import styles from './index.module.css';
import Category from './category/Category';
import SKillCard from './skillCard/SKillCard';
import { categories, electricalDetails } from '../../../../constants/Constants';
import { plumberDetails } from '../../../../constants/plumber';
import { useNavigate } from "react-router-dom";
import { bookingApi } from "../../../../component/clientApi";

const BookAppointment = ({ addAppointment }) => {
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [dateTime, setDateTime] = useState('');
    const [currentCategory, setCurrentCategory] = useState('');
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [bookedAppointments, setBookedAppointments] = useState([]);



    useEffect(() => {
        // Check if the user is authenticated
        let userId = localStorage.getItem('userId');
        userId = 8;
        if (!userId) {
            alert('You must be logged in to book an appointment.');
            navigate('/login');
        }
    },[navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title || !dateTime || !currentCategory) {
            alert('Please fill in all fields');
            return;
        }

        const values = {
            title,
            dateTime,
            category: currentCategory,
            userId: localStorage.getItem('userId'),
        };

        setLoading(true);
        setErrorMessage('');
        setSuccessMessage('');

        try {
            const response = await bookingApi(values);

            const successMessage = response.data?.message || 'Appointment booked successfully!';
            setSuccessMessage(successMessage);

            setBookedAppointments([...bookedAppointments, values]);


            setTimeout(() => {
                navigate('/');
            }, 500);
        } catch (error) {
            if (error.response && error.response.data) {
                const backendMessage = error.response.data.message;
                setErrorMessage(backendMessage);
            } else {
                setErrorMessage('An unexpected error occurred. Please try again.');
            }
        } finally {
            setLoading(false);
        }
    };

    const SkillDisplay = ({ details = [] }) => {
        return (
            <>
                {details.map((detail, index) => (
                    <SKillCard
                        key={index}
                        skill={detail.skill}
                        image={detail.image}
                        name={detail.name}
                        description={detail.description}
                    />
                ))}
            </>
        );
    };

    return (
        <div className={styles.mainBody}>
            <h2>Book Appointment</h2>
            <div className={styles.body}>
                <div className={styles.left}>
                    {categories.map((category) => (
                        <Category
                            key={category}
                            categoryName={category}
                            click={() => setCurrentCategory(category)}
                        />
                    ))}
                </div>

                <div className={styles.right}>
                    {currentCategory === "ELECTRICAL" ? (
                        <SkillDisplay details={electricalDetails} />
                    ) : currentCategory === "PLUMBING" ? (
                        <SkillDisplay details={plumberDetails} />
                    ) : null}

                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Title</label>
                            <input
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <div>
                            <label>Date & Time</label>
                            <input
                                type="datetime-local"
                                value={dateTime}
                                onChange={(e) => setDateTime(e.target.value)}
                            />
                        </div>
                        <div>
                            <label>Category</label>
                            <input
                                type="text"
                                value={currentCategory}
                                readOnly
                            />
                        </div>
                        {errorMessage && <p className={styles.error}>{errorMessage}</p>}
                        {successMessage && <p className={styles.success}>{successMessage}</p>}
                        <button type="submit" disabled={loading}>
                            {loading ? 'Booking...' : 'Book Appointment'}
                        </button>
                    </form>
                    <button onClick={() => navigate('/')}>Back to Home</button>

                    {bookedAppointments.length > 0 && (
                        <div className={styles.bookedAppointments}>
                            <h3>Booked Appointments</h3>
                            <ul>
                                {bookedAppointments.map((appointment, index) => (
                                    <li key={index}>
                                        {appointment.title} - {appointment.dateTime} ({appointment.category})
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BookAppointment;
