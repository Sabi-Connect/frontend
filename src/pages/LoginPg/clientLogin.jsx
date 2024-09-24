import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi";
import TextField from "@mui/material/TextField";
import { Formik, ErrorMessage as FormikErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button, Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import style from './index.module.css';
import loginIm from '../../assets/signup3.jpg';
import { loginApi } from "../../component/clientApi";

const ClientLogin = () => {
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();
    const userType = location.pathname.includes('/skilWok') ? 'worker' : 'client';

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email('Invalid email address')
            .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Must be a valid email Address')
            .required('Email Address is required'),
        password: Yup.string().required('Password is required'),
    });

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    useEffect(() => {
        if (errorMessage) {
            const timer = setTimeout(() => {
                setErrorMessage('');
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [errorMessage]);

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
                initialValues={{ email: '', password: '' }}
                validationSchema={validationSchema}
                onSubmit={async (values, { setSubmitting }) => {
                    setLoading(true);
                    setErrorMessage('');

                    try {
                        const response = await loginApi(values, userType);
                        const { token, refreshToken, userId } = response.data.data; // Ensure userId is returned from the backend
                        localStorage.setItem('accessToken', token);
                        localStorage.setItem('refreshToken', refreshToken);
                        localStorage.setItem('userId', userId); // Save userId to localStorage
                        navigate('/book'); // Navigate to appointment page

                        console.log(userId)
                    } catch (error) {
                        if (error.response && error.response.data) {
                            setErrorMessage(error.response.data.message);
                        } else {
                            setErrorMessage('An unexpected error occurred.');
                        }
                    } finally {
                        setLoading(false);
                        setSubmitting(false);
                    }

                }}
            >
                {({ values, handleChange, handleSubmit, isSubmitting }) => (
                    <div className={style.logiCont}>
                        <div className={style.loginContainer}>
                            <div>
                                <button
                                    onClick={() => navigate('/')}
                                    className={style.backButton}
                                >
                                    <HiArrowLeft /> Back
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
                                            value={values.email}
                                            onChange={handleChange}
                                            sx={roundedStyle}
                                        />
                                        <FormikErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                                    </div>
                                    <div className={style.formField}>
                                        <TextField
                                            label="Password"
                                            variant="outlined"
                                            fullWidth
                                            type={showPassword ? 'text' : 'password'}
                                            name="password"
                                            value={values.password}
                                            onChange={handleChange}
                                            sx={roundedStyle}
                                        />
                                        <Button onClick={togglePasswordVisibility}>
                                            {showPassword ? 'Hide' : 'Show'}
                                        </Button>
                                        <FormikErrorMessage name="password" component="div" className="text-red-500 text-sm" />
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
                                            disabled={loading || isSubmitting}
                                        >
                                            {loading ? 'Loading...' : 'Log in'}
                                        </Button>
                                    </div>
                                </form>
                                <FormGroup>
                                    <FormControlLabel required control={<Checkbox />} label="Remember me" />
                                </FormGroup>

                                <div>
                                    <p>Don't have an Account?
                                        <button className={style.butts} onClick={() => navigate('/client')}>
                                            Signup as client
                                        </button>
                                        <button className={style.butts} onClick={() => navigate('/skilWok')}>
                                            Signup as worker
                                        </button>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <img src={loginIm} alt=" " />
                    </div>
                )}
            </Formik>
        </div>
    );
};

export default ClientLogin;



// import React, { useEffect, useState } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { HiArrowLeft } from "react-icons/hi";
// import TextField from "@mui/material/TextField";
// import { Formik, ErrorMessage as FormikErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import { Button, Checkbox, FormControlLabel, FormGroup } from "@mui/material";
// import style from './index.module.css';
// import loginIm from '../../assets/signup3.jpg';
// import { loginApi } from "../../component/loginApi";
//
// const ClientLogin = () => {
//     const [loading, setLoading] = useState(false);
//     const [errorMessage, setErrorMessage] = useState('');
//     const [showPassword, setShowPassword] = useState(false);
//
//     const validationSchema = Yup.object().shape({
//         email: Yup.string()
//             .email('Invalid email address')
//             .required('Email Address is required'),
//         password: Yup.string()
//             .required('Password is required'),
//     });
//
//     const [form, setForm] = useState({
//         email: '',
//         password: '',
//     });
//
//     const navigate = useNavigate();
//     const location = useLocation();
//     const userType = location.pathname.includes('/skilWok') ? 'worker' : 'client';
//
//     const handleChange = (e) => {
//         const { name, value, type, checked } = e.target;
//         setForm({
//             ...form,
//             [name]: type === 'checkbox' ? checked : value
//         });
//     };
//
//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         setLoading(true);
//         setErrorMessage('');
//
//         try {
//             const response = await loginApi(form, userType);
//             const { token, refreshToken } = response.data.data;
//             localStorage.setItem('accessToken', token);
//             localStorage.setItem('refreshToken', refreshToken);
//             navigate('/');
//         } catch (error) {
//             if (error.response && error.response.data) {
//                 setErrorMessage(error.response.data.message);
//             } else {
//                 setErrorMessage('An unexpected error occurred.');
//             }
//         } finally {
//             setLoading(false);
//         }
//     };
//
//     const togglePasswordVisibility = () => {
//         setShowPassword(!showPassword);
//     };
//
//     useEffect(() => {
//         if (errorMessage) {
//             const timer = setTimeout(() => {
//                 setErrorMessage('');
//             }, 3000);
//
//             return () => clearTimeout(timer);
//         }
//     }, [errorMessage]);
//
//     const roundedStyle = {
//         '& .MuiOutlinedInput-root': {
//             borderRadius: '9999px',
//         },
//     };
//
//     return (
//         <div>
//             <div className="fixed top-14 right-5 m-10 p-5 h-[100%] z-50">
//                 {errorMessage && (
//                     <div className="bg-white text-xl text-red-700 p-5 h-20 rounded-xl shadow-md">
//                         {errorMessage}
//                     </div>
//                 )}
//             </div>
//             <Formik
//                 initialValues={{ email: '', password: '' }}
//                 validationSchema={validationSchema}
//                 onSubmit={handleSubmit}
//             >
//                 <div className={style.logiCont}>
//                     <div className={style.loginContainer}>
//                         <div>
//                             <button
//                                 onClick={() => navigate('/')}
//                                 className={style.backButton}
//                             >
//                                 <HiArrowLeft /> Back
//                             </button>
//                         </div>
//                         <div className={style.loginForm}>
//                             <h2>Log in</h2>
//                             <form onSubmit={handleSubmit}>
//                                 <div className={style.formField}>
//                                     <TextField
//                                         label="Email"
//                                         variant="outlined"
//                                         fullWidth
//                                         type="email"
//                                         name="email"
//                                         value={form.email}
//                                         onChange={handleChange}
//                                         sx={roundedStyle}
//                                     />
//                                     <FormikErrorMessage name="email" component="div"
//                                                         className="text-red-500 text-sm"/>
//                                 </div>
//                                 <div className={style.formField}>
//                                     <TextField
//                                         label="Password"
//                                         variant="outlined"
//                                         fullWidth
//                                         type={showPassword ? 'text' : 'password'}
//                                         name="password"
//                                         value={form.password}
//                                         onChange={handleChange}
//                                         sx={roundedStyle}
//                                     />
//                                     <Button onClick={togglePasswordVisibility}>
//                                         {showPassword ? 'Hide' : 'Show'}
//                                     </Button>
//
//                                     <FormikErrorMessage name="password" component="div"
//                                                         className="text-red-500 text-sm"/>
//                                 </div>
//                                 <div className={style.formField}>
//                                     <Button
//                                         type="submit"
//                                         variant="contained"
//                                         fullWidth
//                                         sx={{
//                                             backgroundColor: '#2b8fda',
//                                             color: 'white',
//                                             paddingY: 2,
//                                             borderRadius: '9999px',
//                                             '&:hover': {
//                                                 backgroundColor: '#2b8fda',
//                                             },
//                                         }}
//                                         disabled={loading}
//                                     >
//                                         {loading ? 'Loading...' : 'Log in'}
//                                     </Button>
//                                 </div>
//                             </form>
//                             <FormGroup>
//                                 <FormControlLabel required control={<Checkbox />} label="Remember me" />
//                             </FormGroup>
//
//                             <div>
//                                 <p>Don't have an Account?
//                                     <button className={style.butts}
//                                             onClick={() => navigate('/client')}
//                                     >Signup as client</button>
//                                     <button className={style.butts}
//                                             onClick={() => navigate('/skilWok')}
//                                     >Signup as worker</button>
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                     <img src={loginIm} alt=" " />
//                 </div>
//             </Formik>
//         </div>
//     );
// };
//
// export default ClientLogin;

