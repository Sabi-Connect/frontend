import React from 'react';
import { styled } from '@mui/material/styles';
import style from './index.module.css'
import {Button, Stack} from "@mui/material";
import {useNavigate} from "react-router-dom";

const CustomButton1 = styled(Button)(({ theme }) => ({
    backgroundColor: '#33FF57',
    color: '#fff',
    '&:hover': {
        backgroundColor: '#FF3D20',
    },
}));

const CustomButton2 = styled(Button)(({ theme }) => ({
    borderColor: '#33FF57',
    color: '#fff',
    '&:hover': {
        borderColor: '#28CC47',
        color: '#28CC47',
    },
}));


// const SearchField = styled(TextField)({
//     backgroundColor: 'white',
//     borderRadius: '50px',
//     '& .MuiOutlinedInput-root': {
//         '& fieldset': {
//             borderColor: '#B3B3B3',
//             borderRadius: '50px',
//
//         },
//         '&:hover fieldset': {
//             borderColor: '#B3B3B3',
//         },
//         '&.Mui-focused fieldset': {
//             borderColor: '#B3B3B3',
//         }
//     },
// });

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
                    <CustomButton2 variant="contained" onClick={() => navigate('/sign')}>SignUp</CustomButton2>

                    {/*<Button variant="contained">Login</Button>*/}
                    {/*<Button variant="outlined">SignUp</Button>*/}
                </Stack>
                {/*<button >Login</button>*/}
                {/*<button>Signup</button>*/}
            </div>
        </div>
    );
};

export default NavBar;