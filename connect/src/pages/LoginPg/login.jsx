import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {HiArrowLeft} from "react-icons/hi";
import TextField from "@mui/material/TextField";
import {Button, Checkbox, FormControlLabel, FormGroup} from "@mui/material";
import style from './index.module.css'
const Login = () => {
    const [form, setForm] = useState({
        email: '',
        password: '',
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
                <h2 >Log in</h2>
                <form onSubmit={handleSubmit}>
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
                                backgroundColor: 'green',
                                color: 'white',
                                paddingY: 2,
                                borderRadius: '9999px',
                                '&:hover': {
                                    backgroundColor: 'darkgreen',
                                },
                            }}
                        >
                            Log in
                        </Button>
                    </div>
                </form>
                <FormGroup>
                    <FormControlLabel required control={<Checkbox />} label="Remember me" />
                </FormGroup>

                <div>
                    <p>Don't have an Account? <button onClick={() => navigate('/sign')}
                    >SignUp</button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;