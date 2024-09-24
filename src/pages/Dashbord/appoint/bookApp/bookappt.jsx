// // import React, {useEffect, useState} from 'react';
// // import styles from './index.module.css';
// // import Category from './category/Category';
// // import SKillCard from './skillCard/SKillCard';
// // import { categories, electricalDetails } from '../../../../constants/Constants';
// // import { plumberDetails } from '../../../../constants/plumber';
// // import {useNavigate} from "react-router-dom";
// // import {bookingApi} from "../../../../component/clientApi";
// //
// //
// // //     electrical: electricalDetails,
// // //     plumbing: plumberDetails,
// // // };
// //
// //
// //
// // const BookAppointment = ({ addAppointment }) => {
// //     const navigate = useNavigate();
// //
// //
// //
// //     const [title, setTitle] = useState('');
// //     const [errorMessage, setErrorMessage] = useState('');
// //
// //     const [dateTime, setDateTime] = useState('');
// //     const [currentCategory, setCurrentCategory] = useState('');
// //     const [loading, setLoading] = useState(false);
// //
// //     useEffect(() => {
// //     }, [currentCategory]);
// //
// //
// //     const handleSubmit = async (e) => {
// //         e.preventDefault();
// //
// //         if (!title || !dateTime || !currentCategory) {
// //             alert('Please fill in all fields');
// //             return;
// //         }
// //
// //         const values = {
// //             title,
// //             dateTime,
// //             category: currentCategory,
// //             userId: localStorage.getItem('userId'),
// //         };
// //
// //         setLoading(true);
// //         setErrorMessage('');
// //
// //
// //
// //         try {
// //             const response = await bookingApi(values);
// //
// //             const successMessage = response.data?.message || 'Appointment booked successfully!';
// //             console.log('Response data:', response.data);
// //             // localStorage.getItem('userId');
// //
// //             alert(successMessage);
// //
// //
// //             // const { token, refreshToken } = response.data.data;
// //             //
// //             // localStorage.setItem('accessToken', token);
// //             // localStorage.setItem('refreshToken', refreshToken);
// //             // console.log('Access token:', token);
// //
// //             setTimeout(() => {
// //                 navigate('/');
// //             }, 2000);
// //         } catch (error) {
// //             if (error.response && error.response.data) {
// //                 const backendMessage = error.response.data.message;
// //                 setErrorMessage(backendMessage);
// //             } else {
// //                 setErrorMessage('An unexpected error occurred. Please try again.');
// //             }
// //         } finally {
// //             setLoading(false);
// //         }
// //
// //     };
// //
// //
// //     const SkillDisplay =({details = []})=>{
// //         return<>
// //             {
// //                 details.map(( detail, index)=>(
// //                     <SKillCard
// //                         key = {index}
// //                         skill={detail.skill}
// //                         image={detail.image}
// //                         name={detail.name}
// //                         description={detail.description}/>
// //                 ))
// //             }
// //         </>
// //     }
// //
// //     return (
// //         <div className={styles.mainBody}>
// //             <h2>Book Appointment</h2>
// //             <div className={styles.body}>
// //                 <div className={styles.left}>
// //                     {categories.map((category) => (
// //                         <Category
// //                             key={category}
// //                             categoryName={category}
// //                             click={() => setCurrentCategory(category)}
// //                         />
// //                     ))}
// //                 </div>
// //                 {/*<div className={styles.left}>*/}
// //                 {/*    {categories.map((category) => (*/}
// //                 {/*        <Category categoryName={category} click={(currentCategory) => {*/}
// //                 {/*            setCurrentCategory(category)*/}
// //                 {/*        }}/>*/}
// //                 {/*    ))}*/}
// //
// //                 {/*</div>*/}
// //
// //                 <div className={styles.right}>
// //
// //                     {currentCategory === "ELECTRICAL" ? (
// //                         <SkillDisplay details={electricalDetails}/>
// //                     ) : currentCategory === "PLUMBING" ? (
// //                         <SkillDisplay details={plumberDetails}/>
// //                     ) : null}
// //
// //                     <form onSubmit={handleSubmit}>
// //                         <div>
// //                             <label>Title</label>
// //                             <input
// //                                 type="text"
// //                                 value={title}
// //                                 onChange={(e) => setTitle(e.target.value)}
// //                             />
// //                         </div>
// //                         <div>
// //                             <label>Date & Time</label>
// //                             <input
// //                                 type="datetime-local"
// //                                 value={dateTime}
// //                                 onChange={(e) => setDateTime(e.target.value)}
// //                             />
// //                         </div>
// //                         <div>
// //                             <label>Category</label>
// //                             <input
// //                                 type="text"
// //                                 value={currentCategory}
// //                                 readOnly
// //                             />
// //                         </div>
// //                         {errorMessage && <p className={styles.error}>{errorMessage}</p>}
// //                         <button type="submit" disabled={loading}>
// //                             {loading ? 'Booking...' : 'Book Appointment'}
// //                         </button>
// //                     </form>
// //                     <button onClick={() => navigate('/')}>Back to Home</button>
// //                 </div>
// //
// //             </div>
// //
// //         </div>
// //     );
// // };
// //
// // export default BookAppointment;
//
//
// import React, { useEffect, useState } from 'react';
// import styles from './index.module.css';
// import Category from './category/Category';
// import SKillCard from './skillCard/SKillCard';
// import { categories, electricalDetails } from '../../../../constants/Constants';
// import { plumberDetails } from '../../../../constants/plumber';
// import { useNavigate } from "react-router-dom";
// import { bookingApi } from "../../../../component/clientApi";
//
//
//
// const BookAppointment = ({ addAppointment }) => {
//
//
//     const navigate = useNavigate();
//
//     // const [title, setTitle] = useState('');
//     const [dateTime, setDateTime] = useState('');
//     const [currentCategory, setCurrentCategory] = useState('');
//     const [loading, setLoading] = useState(false);
//     const [errorMessage, setErrorMessage] = useState('');
//     const [successMessage, setSuccessMessage] = useState('');
//     const [bookedAppointments, setBookedAppointments] = useState([]);
//
//
//
//     useEffect(() => {
//         // Check if the user is authenticated
//         let userId = localStorage.getItem('userId');
//         // if (!userId) {
//         //     alert('You must be logged in to book an appointment.');
//         //     navigate('/login');
//         // }
//         console.log(userId);
//     },[navigate]);
//
//
//
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//
//         if (!dateTime || !currentCategory) {
//             alert('Please select a category and a date.');
//             return;
//         }
//
//         const values = {
//             dateTime,
//             category: currentCategory,
//             userId: localStorage.getItem('userId'), // Assuming user is logged in
//         };
//         console.log(values);
//
//
//         setLoading(true);
//         setErrorMessage('');
//         setSuccessMessage('');
//
//         try {
//             const response = await bookingApi(values); // Send request to the backend
//
//             const successMessage = response.data?.message || 'Appointment booked successfully!';
//             setSuccessMessage(successMessage);
//
//             setBookedAppointments([...bookedAppointments, values]); // Update state with the new booking
//
//             setTimeout(() => {
//                 navigate('/'); // Redirect after booking
//             }, 500);
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
//     };
//
//
//     // const handleSubmit = async (e) => {
//     //     e.preventDefault();
//     //
//     //     if (!dateTime || !currentCategory) {
//     //         alert('Please fill in all fields');
//     //         return;
//     //     }
//     //
//     //     const values = {
//     //         // title,
//     //         dateTime,
//     //         category: currentCategory,
//     //         userId: localStorage.getItem('userId'),
//     //     };
//     //
//     //     setLoading(true);
//     //     setErrorMessage('');
//     //     setSuccessMessage('');
//     //
//     //     try {
//     //         const response = await bookingApi(values);
//     //
//     //         const successMessage = response.data?.message || 'Appointment booked successfully!';
//     //         setSuccessMessage(successMessage);
//     //
//     //         setBookedAppointments([...bookedAppointments, values]);
//     //
//     //
//     //         setTimeout(() => {
//     //             navigate('/');
//     //         }, 500);
//     //     } catch (error) {
//     //         if (error.response && error.response.data) {
//     //             const backendMessage = error.response.data.message;
//     //             setErrorMessage(backendMessage);
//     //         } else {
//     //             setErrorMessage('An unexpected error occurred. Please try again.');
//     //         }
//     //     } finally {
//     //         setLoading(false);
//     //     }
//     // };
//
//     const SkillDisplay = ({ details = [] }) => {
//         return (
//             <>
//
//                 {details.map((detail, index) => (
//                     <SKillCard
//                         key={index}
//                         skill={detail.skill}
//                         image={detail.image}
//                         name={detail.name}
//                         description={detail.description}
//                     />
//                 ))}
//             </>
//         );
//     };
//
//     return (
//
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
//
//                 <div className={styles.right}>
//                     {currentCategory === "ELECTRICAL" ? (
//                         <SkillDisplay details={electricalDetails}/>
//                     ) : currentCategory === "PLUMBING" ? (
//                         <SkillDisplay details={plumberDetails}/>
//                     ) : null}
//
//                     <form onSubmit={handleSubmit}>
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
//                         {successMessage && <p className={styles.success}>{successMessage}</p>}
//                         <button type="submit" disabled={loading}>
//                             {loading ? 'Booking...' : 'Book Appointment'}
//                         </button>
//                     </form>
//                     <button onClick={() => navigate('/')}>Back to Home</button>
//
//                     {bookedAppointments.length > 0 && (
//                         <div className={styles.bookedAppointments}>
//                             <h3>Booked Appointments</h3>
//                             <ul>
//                                 {bookedAppointments.map((appointment, index) => (
//                                     <li key={index}>
//                                         {appointment.title} - {appointment.dateTime} ({appointment.category})
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </div>
//
//
//         // <div className={styles.mainBody}>
//         //     <Category
//         //         key={category}
//         //         categoryName={category}
//         //         click={() => setCurrentCategory(category)}
//         //     />
//         //
//         //     <h2>Book Appointment</h2>
//         //     <div className={styles.body}>
//         //         <div className={styles.left}>
//         //             {categories.map((category) => (
//         //                 <Category
//         //                     key={category}
//         //                     categoryName={category}
//         //                     click={() => setCurrentCategory(category)}
//         //                 />
//         //             ))}
//         //         </div>
//         //
//         //         <div className={styles.right}>
//         //             {currentCategory === "ELECTRICAL" ? (
//         //                 <SkillDisplay details={electricalDetails} />
//         //             ) : currentCategory === "PLUMBING" ? (
//         //                 <SkillDisplay details={plumberDetails} />
//         //             ) : null}
//         //
//         //             <form onSubmit={handleSubmit}>
//         //                 {/*<div>*/}
//         //                 {/*    <label>Title</label>*/}
//         //                 {/*    <input*/}
//         //                 {/*        type="text"*/}
//         //                 {/*        value={title}*/}
//         //                 {/*        onChange={(e) => setTitle(e.target.value)}*/}
//         //                 {/*    />*/}
//         //                 {/*</div>*/}
//         //                 <div>
//         //                     <label>Date & Time</label>
//         //                     <input
//         //                         type="datetime-local"
//         //                         value={dateTime}
//         //                         onChange={(e) => setDateTime(e.target.value)}
//         //                     />
//         //                 </div>
//         //                 <div>
//         //                     <label>Category</label>
//         //                     <input
//         //                         type="text"
//         //                         value={currentCategory}
//         //                         readOnly
//         //                     />
//         //                 </div>
//         //                 {errorMessage && <p className={styles.error}>{errorMessage}</p>}
//         //                 {successMessage && <p className={styles.success}>{successMessage}</p>}
//         //                 <button type="submit" disabled={loading}>
//         //                     {loading ? 'Booking...' : 'Book Appointment'}
//         //                 </button>
//         //             </form>
//         //             <button onClick={() => navigate('/')}>Back to Home</button>
//         //
//         //             {bookedAppointments.length > 0 && (
//         //                 <div className={styles.bookedAppointments}>
//         //                     <h3>Booked Appointments</h3>
//         //                     <ul>
//         //                         {bookedAppointments.map((appointment, index) => (
//         //                             <li key={index}>
//         //                                 {appointment.title} - {appointment.dateTime} ({appointment.category})
//         //                             </li>
//         //                         ))}
//         //                     </ul>
//         //                 </div>
//         //             )}
//         //         </div>
//         //     </div>
//         // </div>
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

    const [dateTime, setDateTime] = useState('');
    const [currentCategory, setCurrentCategory] = useState('');
    // const [skilledWorkerId, setSkilledWorkerId] = useState(null); // Store the selected skilled worker ID
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [bookedAppointments, setBookedAppointments] = useState([]);

    useEffect(() => {
        // Check if the user is authenticated
        const userId = localStorage.getItem('userId');
        if (!userId) {
            alert('You must be logged in to book an appointment.');
            navigate('/login');
        }
    }, [navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!dateTime || !currentCategory) {
            alert('Please select a category and a date.');
            return;
        }

        const userId = localStorage.getItem('userId');

        if (!userId || userId === "undefined") {
            alert('You must be logged in to book an appointment.');
            navigate('/login');
            return;
        }

        const values = {
            scheduleTime: dateTime,
            category: currentCategory,
            clientId: userId
        };

        console.log("Booking Values:", values);

        try {
            const response = await bookingApi(values);
            if (response.status) {
                const appointmentData = response.data;
                setSuccessMessage(appointmentData.message || 'Appointment booked successfully!');
                setBookedAppointments([...bookedAppointments, {
                    scheduleTime: appointmentData.scheduleTime,
                    status: appointmentData.status,
                    category: values.category
                }]);
                setTimeout(() => {
                    navigate('/view');
                }, 500);
            } else {
                throw new Error(response.data.error);
            }
        } catch (error) {
            setErrorMessage(error.message || 'An error occurred while booking.');
        }
    };


    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     if (!dateTime || !currentCategory) {
    //         alert('Please select a category and a date.');
    //         return;
    //     }
    //
    //     const userId = localStorage.getItem('userId');
    //
    //     if (!userId || userId === "undefined") {
    //         alert('You must be logged in to book an appointment.');
    //         navigate('/login');
    //         return;
    //     }
    //
    //     const values = {
    //         dateTime,
    //         category: currentCategory,
    //         clientId: userId
    //     };
    //
    //     console.log("Booking Values:", values);
    //
    //     try {
    //         const response = await bookingApi(values);
    //         if (response.data.success) {
    //             setSuccessMessage(response.data.message || 'Appointment booked successfully!');
    //             setBookedAppointments([...bookedAppointments, values]);
    //             setTimeout(() => {
    //                 navigate('/');
    //             }, 500);
    //         } else {
    //             throw new Error(response.data.error);
    //         }
    //     } catch (error) {
    //         setErrorMessage(error.response?.data?.error || 'An error occurred while booking.');
    //     }
    // };


    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //
    //     // // Validate dateTime, currentCategory, and skilledWorkerId
    //     // if (!dateTime || !currentCategory || !skilledWorkerId) {
    //     //     alert('Please select a category, skilled worker, and a date.');
    //     //     return;
    //     // }
    //
    //     const userId = localStorage.getItem('userId'); // Retrieve userId again here
    //
    //     if (!userId) {
    //         alert('You must be logged in to book an appointment.');
    //         navigate('/login');
    //         return;
    //     }
    //
    //     const values = {
    //         dateTime,
    //         category: currentCategory,
    //         // skilledWorkerId, // Send the skilled worker ID
    //         clientId: userId // Ensure userId is sent correctly as clientId
    //     };
    //
    //     try {
    //         const response = await bookingApi(values); // Send request to backend
    //         // Check if request is successful
    //         if (response.data.success) {
    //             setSuccessMessage(response.data.message || 'Appointment booked successfully!');
    //             setBookedAppointments([...bookedAppointments, values]); // Update booked appointments
    //             setTimeout(() => {
    //                 navigate('/'); // Redirect after successful booking
    //             }, 500);
    //         } else {
    //             throw new Error(response.data.error);
    //         }
    //     } catch (error) {
    //         setErrorMessage(error.response?.data?.error || 'An error occurred while booking.');
    //     }
    // };

    const SkillDisplay = ({ details = [] }) => (
        <>
            {details.map((detail, index) => (
                <SKillCard
                    key={index}
                    skill={detail.skill}
                    image={detail.image}
                    name={detail.name}
                    description={detail.description}
                    // onClick={() => setSkilledWorkerId(detail.id)} // Set the skilled worker ID on click
                />
            ))}
        </>
    );

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


// import React, { useEffect, useState } from 'react';
// import styles from './index.module.css';
// import Category from './category/Category';
// import SKillCard from './skillCard/SKillCard';
// import { categories, electricalDetails } from '../../../../constants/Constants';
// import { plumberDetails } from '../../../../constants/plumber';
// import { useNavigate } from "react-router-dom";
// import { bookingApi } from "../../../../component/clientApi";
// import {loginApi} from "../../../../component/loginApi";
//
// const BookAppointment = ({ addAppointment }) => {
//     const navigate = useNavigate();
//
//     const [dateTime, setDateTime] = useState('');
//     const [currentCategory, setCurrentCategory] = useState('');
//     const [loading, setLoading] = useState(false);
//     const [errorMessage, setErrorMessage] = useState('');
//     const [successMessage, setSuccessMessage] = useState('');
//     const [bookedAppointments, setBookedAppointments] = useState([]);
//
//
//     useEffect(() => {
//         // Check if the user is authenticated
//         const userId = localStorage.getItem('userId');
//         if (!userId) {
//             alert('You must be logged in to book an appointment.');
//             navigate('/login');
//         }
//         console.log("User ID:", userId); // Debugging - Check if userId is retrieved
//     }, [navigate]);
//
//
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//
//         // Validate dateTime and currentCategory
//         if (!dateTime || !currentCategory) {
//             alert('Please select a category and a date.');
//             return;
//         }
//
//         const userId = localStorage.getItem('userId'); // Retrieve userId again here
//
//         if (!userId) {
//             alert('You must be logged in to book an appointment.');
//             navigate('/login');
//             return;
//         }
//
//         const values = {
//             dateTime,
//             category: currentCategory,
//             userId: userId // Ensure userId is sent correctly
//         };
//
//         console.log("Booking Values:", values); // Debugging
//
//         try {
//             const response = await bookingApi(values); // Send request to backend
//             // Check if request is successful
//             if (response.data.success) {
//                 setSuccessMessage(response.data.message || 'Appointment booked successfully!');
//             } else {
//                 throw new Error(response.data.error);
//             }
//
//             setBookedAppointments([...bookedAppointments, values]); // Update booked appointments
//             setTimeout(() => {
//                 navigate('/'); // Redirect after successful booking
//             }, 500);
//         } catch (error) {
//             setErrorMessage(error.response?.data?.error || 'An error occurred while booking.');
//         }
//     };
//
//
//     // const handleSubmit = async (e) => {
//     //     e.preventDefault();
//     //
//     //     // Validate dateTime and currentCategory
//     //     if (!dateTime || !currentCategory) {
//     //         alert('Please select a category and a date.');
//     //         return;
//     //     }
//     //
//     //     const userId = localStorage.getItem('userId'); // Retrieve userId from localStorage again
//     //
//     //     // Check if userId is valid
//     //     if (!userId) {
//     //         alert('You must be logged in to book an appointment.');
//     //         navigate('/login');
//     //         return;
//     //     }
//     //
//     //     const values = {
//     //         dateTime,
//     //         category: currentCategory,
//     //         userId: userId // Ensure the correct userId is sent
//     //     };
//     //
//     //     console.log("Booking Values:", values); // Debugging - Check if values are correct
//     //
//     //     setLoading(true);
//     //     setErrorMessage('');
//     //     setSuccessMessage('');
//     //
//     //     try {
//     //         const response = await bookingApi(values); // Send request to the backend
//     //
//     //         const successMessage = response.data?.message || 'Appointment booked successfully!';
//     //         setSuccessMessage(successMessage);
//     //
//     //         setBookedAppointments([...bookedAppointments, values]); // Update state with the new booking
//     //
//     //         setTimeout(() => {
//     //             navigate('/'); // Redirect after booking
//     //         }, 500);
//     //     } catch (error) {
//     //         if (error.response && error.response.data) {
//     //             const backendMessage = error.response.data.message;
//     //             setErrorMessage(backendMessage);
//     //         } else {
//     //             setErrorMessage('An unexpected error occurred. Please try again.');
//     //         }
//     //     } finally {
//     //         setLoading(false);
//     //     }
//     // };
//
//     const SkillDisplay = ({ details = [] }) => (
//         <>
//             {details.map((detail, index) => (
//                 <SKillCard
//                     key={index}
//                     skill={detail.skill}
//                     image={detail.image}
//                     name={detail.name}
//                     description={detail.description}
//                 />
//             ))}
//         </>
//     );
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
//
//                 <div className={styles.right}>
//                     {currentCategory === "ELECTRICAL" ? (
//                         <SkillDisplay details={electricalDetails} />
//                     ) : currentCategory === "PLUMBING" ? (
//                         <SkillDisplay details={plumberDetails} />
//                     ) : null}
//
//                     <form onSubmit={handleSubmit}>
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
//                         {successMessage && <p className={styles.success}>{successMessage}</p>}
//                         <button type="submit" disabled={loading}>
//                             {loading ? 'Booking...' : 'Book Appointment'}
//                         </button>
//                     </form>
//                     <button onClick={() => navigate('/')}>Back to Home</button>
//
//                     {bookedAppointments.length > 0 && (
//                         <div className={styles.bookedAppointments}>
//                             <h3>Booked Appointments</h3>
//                             <ul>
//                                 {bookedAppointments.map((appointment, index) => (
//                                     <li key={index}>
//                                         {appointment.title} - {appointment.dateTime} ({appointment.category})
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// export default BookAppointment;
