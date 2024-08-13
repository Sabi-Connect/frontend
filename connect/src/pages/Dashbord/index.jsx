import React from 'react';
import Dashboard from "./dashboard/dashboard";
import style from './index.module.css'
import ContentHeader from "./MyProfile/contentheader";
const MyDashboard = () => {
    return (
        <div className={style.dashboard}>
            <Dashboard/>
            <div className={style.dashboardContent}>
                <ContentHeader/>
            </div>
        </div>
    );
};

export default MyDashboard;