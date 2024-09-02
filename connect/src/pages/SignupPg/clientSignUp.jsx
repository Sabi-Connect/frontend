import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import TextField from "@mui/material/TextField";
import {Button} from "@mui/material";
import {HiArrowLeft} from "react-icons/hi";
import style from './client.module.css'
import signup from '../../assets/signhen.avif'
import * as Yup from "yup";
import {Formik, ErrorMessage as FormikErrorMessage} from 'formik';
import {clientSignupApi, callClientNothingEndpoint} from "../../component/clientApi";

const ClientSignUp = () => {

    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [isError, setIsError] = useState(false);
    const [message, setMessage] = useState('');


    const validationSchema = Yup.object().shape({
        firstName: Yup.string().matches(/^[a-zA-Z\s]+$/, 'First Name should only contain letters and spaces').required('First Name is required'),
        lastName: Yup.string().matches(/^[a-zA-Z\s]+$/, 'Last Name should only contain letters and spaces').required('Last Name is required'),
        email: Yup.string().email('Invalid email address').required('Email Address is required'),
        username: Yup.string().required('Username is required'),
        houseNumber: Yup.string().required('House Number is required'),
        street: Yup.string().required('Street is required'),
        area: Yup.string().required('Area is required'),
        password: Yup.string().required('Password is required'),
        phoneNumber: Yup.string().required('Phone number is required')
    });

    const initialValues = {
        username: '',
        password: '',
        email: '',
        lastName: '',
        firstName: '',
        houseNumber: '',
        street: '',
        area: '',
        phoneNumber:'',

    };

    const navigate = useNavigate();
    const roundedStyle = {
        '& .MuiOutlinedInput-root': {
            borderRadius: '9999px',
        },
    };
    const handleSubmit = async (values,{setSubmitting}) => {
        setLoading(true);
        setMessage('');
        setIsError(false);
        try {
            const response = await clientSignupApi(values);
            const successMessage = response.message || 'Sign up successful!';
            setMessage(successMessage)
            console.log(successMessage,"success ")


            setTimeout(() => {
                navigate('/');
            }, 500);
        } catch (error) {
            if (error.message) {
                setMessage(error.message);  // Set the error message
                setIsError(true);
            }

        } finally {
            setLoading(false);
            setSubmitting(false);
        }
    };
    useEffect(() => {
        if (errorMessage) {
            const timer = setTimeout(() => {
                setErrorMessage('');
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [errorMessage]);
    return (
        <div>
            <div className="fixed top-14 right-5 m-10 p-5 h-[100%] z-50">
                {errorMessage && (
                    <div className="bg-white text-xl text-red-700 p-5 h-20 rounded-xl shadow-md">
                        {errorMessage}
                    </div>
                )}
            </div>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({values,handleChange,handleSubmit}) => (
                    <div className={style.signT}>
                        <div className={style.signupContainer}>
                            <div className="absolute top-4 left-4">
                                <button
                                    onClick={() => navigate('/')}
                                    className={style.backButton}
                                >
                                    <HiArrowLeft/> Back
                                </button>
                            </div>
                            <div className={style.signForm}>
                                <h2>SignUp</h2>
                                {/*<form onSubmit={(event) => handleSubmit(event)}>*/}
                                <form onSubmit={handleSubmit}>
                                    <div className={style.formField}>
                                        <TextField
                                            label="First Name"
                                            variant="outlined"
                                            fullWidth
                                            type="text"
                                            name="firstName"
                                            value={values.firstName}
                                            onChange={handleChange}
                                            sx={roundedStyle}
                                        />
                                        <FormikErrorMessage name="firstName" component="div"
                                                            className="text-red-500 text-sm"/>
                                    </div>
                                    <div className={style.formField}>
                                        <TextField
                                            label="Last Name"
                                            variant="outlined"
                                            fullWidth
                                            type="text"
                                            name="lastName"
                                            value={values.lastName}
                                            onChange={handleChange}
                                            sx={roundedStyle}
                                        />
                                        <FormikErrorMessage name="lastName" component="div"
                                                            className="text-red-500 text-sm"/>
                                    </div>
                                    <div className={style.formField}>
                                        <TextField
                                            label="Email"
                                            variant="outlined"
                                            fullWidth
                                            type="email"
                                            name="email"
                                            value={values.email}
                                            onChange={handleChange}
                                            sx={roundedStyle}
                                        />
                                        <FormikErrorMessage name="email" component="div"
                                                            className="text-red-500 text-sm"/>
                                    </div>
                                    <div className={style.formField}>
                                        <TextField
                                            label="Username"
                                            variant="outlined"
                                            fullWidth
                                            type="text"
                                            name="username"
                                            value={values.username}
                                            onChange={handleChange}
                                            sx={roundedStyle}
                                        />
                                        <FormikErrorMessage name="username" component="div"
                                                            className="text-red-500 text-sm"/>
                                    </div>
                                    <div className={style.formField}>
                                        <TextField
                                            label="Housenumber"
                                            variant="outlined"
                                            fullWidth
                                            type="text"
                                            name="houseNumber"
                                            value={values.houseNumber}
                                            onChange={handleChange}
                                            sx={roundedStyle}
                                        />
                                        {/*<FormikErrorMessage name="housenumber" component="div"*/}
                                        {/*                    className="text-red-500 text-sm"/>*/}
                                    </div>
                                    <div className={style.formField}>
                                        <TextField
                                            label="Street"
                                            variant="outlined"
                                            fullWidth
                                            type="text"
                                            name="street"
                                            value={values.street}
                                            onChange={handleChange}
                                            sx={roundedStyle}
                                        />
                                        <FormikErrorMessage name="street" component="div"
                                                            className="text-red-500 text-sm"/>
                                    </div>
                                    <div className={style.formField}>
                                        <TextField
                                            label="Area"
                                            variant="outlined"
                                            fullWidth
                                            type="text"
                                            name="area"
                                            value={values.area}
                                            onChange={handleChange}
                                            sx={roundedStyle}
                                        />
                                        <FormikErrorMessage name="area" component="div"
                                                            className="text-red-500 text-sm"/>
                                    </div>
                                    <div className={style.formField}>
                                        <TextField
                                            label="PhoneNumber"
                                            variant="outlined"
                                            fullWidth
                                            type="tel"
                                            name="phoneNumber"
                                            value={values.phoneNumber}
                                            onChange={handleChange}
                                            sx={roundedStyle}
                                        />
                                        <FormikErrorMessage name="phoneNumber" component="div"
                                                            className="text-red-500 text-sm"/>
                                    </div>
                                    <div className={style.formField}>
                                        <TextField
                                            label="Password"
                                            variant="outlined"
                                            fullWidth
                                            type="password"
                                            name="password"
                                            value={values.password}
                                            onChange={handleChange}
                                            sx={roundedStyle}
                                        />
                                    </div>
                                    <div className={style.formField}>
                                        <Button
                                            // onClick={handleSubmit}
                                            type="submit"
                                            variant="contained"
                                            fullWidth
                                            sx={{
                                                backgroundColor: '#2b8fda',
                                                color: 'white',
                                                paddingY: 2,
                                                borderRadius: '9999px',
                                                '&:hover': {
                                                    backgroundColor: '',
                                                },
                                            }}
                                            className={style.signButton}
                                        >
                                            Sign up as a client
                                        </Button>

                                        <div>
                                            <p>Already have an Account? <button className={style.but}
                                                                                onClick={() => navigate('/login')}
                                            >Login</button>
                                            </p>
                                            <p>By clicking 'SignUp', you acknowledge that you have read and accept
                                                the <span
                                                    className={style.terms}>Terms of Service</span> and <span
                                                    className={style.terms}> Privacy Policy</span> .
                                            </p>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <img src={signup} alt="signup"/>
                    </div>

                )}

            </Formik>
        </div>
    );
};

export default ClientSignUp;


