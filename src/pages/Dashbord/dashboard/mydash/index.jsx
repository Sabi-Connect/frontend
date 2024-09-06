import React from 'react';
import Dashboard from "../dashboard";
import style from './index.module.css'
import ContentHeader from "../../appoint/bookApp/workerrequests/MyProfile/contentheader";
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