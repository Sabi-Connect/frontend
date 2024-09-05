import React from 'react';
import style from "../MyProfile/content.module.css";
import {useNavigate} from "react-router-dom";

const LoginDetails = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div>
                <h1>Dashboard</h1>
                <button>Back to homepage</button>
            </div>
            <div>
                <p onClick={() => navigate('update')}>My Profile</p>
                <p onClick={() => navigate('appoint')}>Appointment</p>
                <p>Notification</p>
            </div>

            <div>
                <h2 className={style.content2}>Basic information</h2>
                <p>This is your personal information that you can update anytime.</p>
            </div>
            <div></div>

        </div>

    );
};

export default LoginDetails;