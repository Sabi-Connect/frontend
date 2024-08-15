import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import TextField from "@mui/material/TextField";
import {Button} from "@mui/material";
import {HiArrowLeft} from "react-icons/hi";
import style from './index.module.css'
const SignUp = () => {
    const [form, setForm] = useState({
        email: '',
        password: '',
        firstName: '',
        lastName: '',
    });


    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm({
            ...form,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };
    const roundedStyle = {
        '& .MuiOutlinedInput-root': {
            borderRadius: '9999px',
        },
    };


    return (
        <div className={style.signupContainer}>
            <div className="absolute top-4 left-4">
                <button
                    onClick={() => navigate('/')}
                    className={style.backButton}
                >
                    <HiArrowLeft /> Back
                </button>
            </div>
            <div className={style.signForm}>
                <h2 >SignUp</h2>
                <form onSubmit={handleSubmit}>
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
                            SignUp
                        </Button>
                        <div>
                            <p>Already have an Account? <button className={style.but}  onClick={() => navigate('/login')}
                            >Login</button>
                            </p>
                            <p>By clicking 'SignUp', you acknowledge that you have read and accept the <span className={style.terms}>Terms of Service</span>    and <span className={style.terms}> Privacy Policy</span> .</p>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;