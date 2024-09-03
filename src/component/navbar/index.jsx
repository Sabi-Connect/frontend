import React from 'react';
import { styled } from '@mui/material/styles';
import style from './index.module.css'
import {Button, Stack} from "@mui/material";
import {useNavigate} from "react-router-dom";

const CustomButton1 = styled(Button)(({ theme }) => ({
    backgroundColor: '#1531e7',
    color: '#fff',
    '&:hover': {
        backgroundColor: '#1531e7',
    },
}));

const CustomButton2 = styled(Button)(({ theme }) => ({
    borderColor: '#1531e7',
    color: '#fff',
    '&:hover': {
        borderColor: '#1531e7',
        color: '#fff',
    },
}));


const NavBar = () => {
    const navigate = useNavigate();
    return (
        <div className={style.nav}>
            <div className={style.navA}>
                <p >SabiConnect</p>
            </div>

            <div className={style.nav2}>
                <p >Home</p>
                <p >Find Worker</p>
                <p >Clients</p>
                {/*<div>*/}
                {/*    <SearchField*/}
                {/*        variant="outlined"*/}
                {/*        placeholder="Search"*/}
                {/*        size="small"*/}
                {/*    />*/}
                {/*</div>*/}
            </div>




            <div className={style.btn1}>
                <Stack spacing={2} direction="row">
                    <CustomButton1 variant="contained" onClick={() => navigate('/login')}>Login</CustomButton1>
                    <CustomButton2 variant="contained" onClick={() => navigate('/skilWok')}>Sign up as skilledworker</CustomButton2>
                    <CustomButton2 variant="contained" onClick={() => navigate('/client')}>Sign up as client</CustomButton2>
                    <CustomButton2 variant="contained" onClick={() => navigate('/book')}>Book Appointment</CustomButton2>



                    {/*<Button variant="contained">ClientLogin</Button>*/}
                    {/*<Button variant="outlined">SignUp</Button>*/}
                </Stack>

            </div>
        </div>
    );
};

export default NavBar;