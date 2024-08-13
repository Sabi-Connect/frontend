import React from 'react';
import Profile from "./profile/profile";
import Content from "./content/content";
import Dashboard from "./dashboard/setting";
import style from './index.module.css'
const MyDashboard = () => {
    return (
        <div className={style.dashboard}>
            <Dashboard/>
            <div className={style.dashboardContent}>
                <Content/>
            </div>
        </div>
    );
};

export default MyDashboard;