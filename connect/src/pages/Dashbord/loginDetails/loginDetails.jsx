import React from 'react';
import style from "../MyProfile/content.module.css";

const LoginDetails = () => {
    return (
        <div>
            <div>
                <h1>Dashboard</h1>
                <button>Back to homepage</button>
            </div>
            <div>
                <p>My Profile</p>
                <p>Login Details</p>
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