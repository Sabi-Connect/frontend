import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import TextField from "@mui/material/TextField";
import {Button} from "@mui/material";
import {HiArrowLeft} from "react-icons/hi";
import style from './client.module.css'
import signup from '../../assets/signhen.avif'
import * as Yup from "yup";
import {Formik, ErrorMessage as FormikErrorMessage} from 'formik';
import {clientSignupApi} from "../../component/clientApi";
const ClientSignUp = () => {

    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    // const [showPassword, setShowPassword] = useState(false);


    const validationSchema = Yup.object().shape({
        fullName: Yup.string()
            .matches(/^[a-zA-Z\s]+$/, 'Name should only contain letters and spaces')
            .required('Full Name is required'),
        email: Yup.string()
            .email('Invalid email address')
            .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Must be a valid email Address')
            .required('Email Address is required'),
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

    };

    const [form, setForm] = useState({
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        username: '',
        houseNumber: '',
        street: '',
        area: '',

    });

    const navigate = useNavigate();
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm({
            ...form,
            [name]: type === 'checkbox' ? checked : value
        });
    };
    const roundedStyle = {
        '& .MuiOutlinedInput-root': {
            borderRadius: '9999px',
        },
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setErrorMessage('');
        try {
            const response = await clientSignupApi(form);
            const successMessage = response.data?.message || 'Sign up successful!';
            console.log(successMessage,"success ")
            localStorage.getItem('userId');

            setTimeout(() => {
                navigate('/');
            }, 500);
        } catch (error) {
            if (error.response && error.response.data) {
                const backendMessage = error.response.data.message;
                setErrorMessage(backendMessage);
            } else {
                console.log(error)
                setErrorMessage(error.message)
            }
        } finally {
            setLoading(false);
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
                initialValues={{initialValues}}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
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
                            <form onSubmit={(event) => handleSubmit(event)}>
                                <div className={style.formField}>
                                    <TextField
                                        label="First Name"
                                        variant="outlined"
                                        fullWidth
                                        type="text"
                                        name="firstName"
                                        value={form.firstName}
                                        onChange={handleChange}
                                        sx={roundedStyle}
                                    />
                                    <FormikErrorMessage name="firstname" component="div"
                                                        className="text-red-500 text-sm"/>
                                </div>
                                <div className={style.formField}>
                                    <TextField
                                        label="Last Name"
                                        variant="outlined"
                                        fullWidth
                                        type="text"
                                        name="lastName"
                                        value={form.lastName}
                                        onChange={handleChange}
                                        sx={roundedStyle}
                                    />
                                    <FormikErrorMessage name="lastname" component="div"
                                                        className="text-red-500 text-sm"/>
                                </div>
                                <div className={style.formField}>
                                    <TextField
                                        label="Email"
                                        variant="outlined"
                                        fullWidth
                                        type="email"
                                        name="email"
                                        value={form.email}
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
                                        type="username"
                                        name="username"
                                        value={form.username}
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
                                        type="housenumber"
                                        name="houseNumber"
                                        value={form.houseNumber}
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
                                        type="street"
                                        name="street"
                                        value={form.street}
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
                                        type="area"
                                        name="area"
                                        value={form.area}
                                        onChange={handleChange}
                                        sx={roundedStyle}
                                    />
                                    <FormikErrorMessage name="street" component="div"
                                                        className="text-red-500 text-sm"/>
                                </div>
                                <div className={style.formField}>
                                    <TextField
                                        label="Password"
                                        variant="outlined"
                                        fullWidth
                                        type="password"
                                        name="password"
                                        value={form.password}
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
                                        <p>By clicking 'SignUp', you acknowledge that you have read and accept the <span
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
            </Formik>
        </div>
    );
};

export default ClientSignUp;


