import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {HiArrowLeft} from "react-icons/hi";
import TextField from "@mui/material/TextField";
import {Formik, ErrorMessage as FormikErrorMessage} from 'formik';
import * as Yup from 'yup';
import {Button, Checkbox, FormControlLabel, FormGroup} from "@mui/material";
import style from './index.module.css'
import loginIm from '../../assets/signup3.jpg'
import {loginApi} from "../../component/api";

const Login = () => {

    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false);


    const validationSchema = Yup.object().shape({
        fullName: Yup.string()
            .matches(/^[a-zA-Z\s]+$/, 'Name should only contain letters and spaces')
            .required('Full Name is required'),
        email: Yup.string()
            .email('Invalid email address')
            .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Must be a valid email Address')
            .required('Email Address is required'),
    });

    // const [form, setForm] = useState({
    //     email: '',
    //     password: '',
    // });

    const initialValues = {
        username: '',
        password: '',
    };

    const navigate = useNavigate();

    // const handleChange = (e) => {
    //     const { name, value, type, checked } = e.target;
    //     setForm({
    //         ...form,
    //         [name]: type === 'checkbox' ? checked : value
    //     });
    // };


    const handleSubmit = async (values, e) => {
        setLoading(true);
        setErrorMessage('');

        try {
            const response = await loginApi(values);

            const successMessage = response.data?.message || 'Login successful!';
            console.log('Response data:', response.data);
            localStorage.getItem('userId');

            // Store both tokens
            const { token, refreshToken } = response.data.data;

            localStorage.setItem('accessToken', token);
            localStorage.setItem('refreshToken', refreshToken);
            console.log('Access token:', token);

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


        e.preventDefault();
    };
    // const togglePasswordVisibility = () => {
    //     setShowPassword(!showPassword);
    // };

    useEffect(() => {
        if (errorMessage) {
            const timer = setTimeout(() => {
                setErrorMessage('');
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [errorMessage]);







    // const handleSubmit = (e) => {
    //     e.preventDefault();
    // };
    const roundedStyle = {
        '& .MuiOutlinedInput-root': {
            borderRadius: '9999px',
        },
    };


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

                <div className={style.logiCont}>
                    <div className={style.loginContainer}>
                        <div>
                            <button
                                onClick={() => navigate('/')}
                                className={style.backButton}
                            >
                                <HiArrowLeft/> Back
                            </button>
                        </div>
                        <div className={style.loginForm}>
                            <h2>Log in</h2>
                            <form onSubmit={handleSubmit}>
                                <div className={style.formField}>
                                    <TextField
                                        label="Email"
                                        variant="outlined"
                                        fullWidth
                                        type="email"
                                        name="email"
                                        value={initialValues.email}
                                        // onChange={handleChange}
                                        sx={roundedStyle}
                                    />
                                    <FormikErrorMessage name="username" component="div"
                                                        className="text-red-500 text-sm"/>
                                </div>
                                <div className={style.formField}>
                                    <TextField
                                        label="Password"
                                        variant="outlined"
                                        fullWidth
                                        type="password"
                                        name="password"
                                        value={initialValues.password}
                                        // onChange={handleChange}
                                        sx={roundedStyle}
                                    />

                                    <FormikErrorMessage name="password" component="div"
                                                        className="text-red-500 text-sm"/>
                                </div>
                                <div className={style.formField}>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        fullWidth
                                        sx={{
                                            backgroundColor: '#2b8fda',
                                            color: 'white',
                                            paddingY: 2,
                                            borderRadius: '9999px',
                                            '&:hover': {
                                                backgroundColor: '#2b8fda',
                                            },
                                        }}
                                        disabled={loading}
                                    >
                                        {loading ? 'Loading...' : ''}
                                        Log in
                                    </Button>
                                </div>
                            </form>
                            <FormGroup>
                                <FormControlLabel required control={<Checkbox/>} label="Remember me"/>
                            </FormGroup>

                            <div>
                                <p>Don't have an Account? <button className={style.butts}
                                                                  onClick={() => navigate('/sign')}
                                >Sign Up</button>
                                </p>
                            </div>
                        </div>
                    </div>
                    <img src={loginIm} alt=" "/>
                </div>
            </Formik>
        </div>


    );
};

export default Login;
