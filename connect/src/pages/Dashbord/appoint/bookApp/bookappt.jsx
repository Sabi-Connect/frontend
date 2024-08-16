import React, {useEffect, useState} from 'react';
import styles from './index.module.css';
import Category from './category/Category';
import SKillCard from './skillCard/SKillCard';
import { categories, electricalDetails } from '../../../../constants/Constants';
import { plumberDetails } from '../../../../constants/plumber';
import {useNavigate} from "react-router-dom";
import {bookingApi, skillWorkerApi} from "../../../../component/api";

// const categoryDataMap = {
//     electrical: electricalDetails,
//     plumbing: plumberDetails,
// };



const BookAppointment = ({ addAppointment }) => {
    const navigate = useNavigate();



    const [title, setTitle] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const [dateTime, setDateTime] = useState('');
    const [currentCategory, setCurrentCategory] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // console.log(currentCategory)
    }, [currentCategory]);


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



        try {
            const response = await bookingApi(values);

            const successMessage = response.data?.message || 'Appointment booked successfully!';
            console.log('Response data:', response.data);
            // localStorage.getItem('userId');

            alert(successMessage);


            // const { token, refreshToken } = response.data.data;
            //
            // localStorage.setItem('accessToken', token);
            // localStorage.setItem('refreshToken', refreshToken);
            // console.log('Access token:', token);

            setTimeout(() => {
                navigate('/');
            }, 2000);
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
        // e.preventDefault();
    };


    // const handleSubmit = () => {
    //     if (title && dateTime && currentCategory) {
    //         addAppointment({ id: Math.random(), title, dateTime, category: currentCategory });
    //         alert('Appointment Booked');
    //     } else {
    //         alert('Please fill in all fields');
    //     }
    // };
    const SkillDisplay =({details = []})=>{
        return<>
            {
                details.map(( detail, index)=>(
                    <SKillCard
                        key = {index}
                        skill={detail.skill}
                        image={detail.image}
                        name={detail.name}
                        description={detail.description}/>
                ))
            }
        </>
    }

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
                {/*<div className={styles.left}>*/}
                {/*    {categories.map((category) => (*/}
                {/*        <Category categoryName={category} click={(currentCategory) => {*/}
                {/*            setCurrentCategory(category)*/}
                {/*        }}/>*/}
                {/*    ))}*/}

                {/*</div>*/}

                <div className={styles.right}>

                    {currentCategory === "ELECTRICAL" ? (
                        <SkillDisplay details={electricalDetails}/>
                    ) : currentCategory === "PLUMBING" ? (
                        <SkillDisplay details={plumberDetails}/>
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
                        <button type="submit" disabled={loading}>
                            {loading ? 'Booking...' : 'Book Appointment'}
                        </button>
                    </form>
                    <button onClick={() => navigate('/')}>Back to Home</button>
                </div>

                {/*<div className={styles.right}>*/}
                {/*    {*/}
                {/*        currentCategory && currentCategory*/}
                {/*    }*/}
                {/*    {*/}
                {/*        currentCategory === "ELECTRICAL" ? <SkillDisplay details={electricalDetails}/> : "PLUMBING" ? <SkillDisplay details={electricalDetails}/> :*/}
                {/*    }*/}
                {/*</div>*/}

            </div>

        </div>
    );
};

export default BookAppointment;