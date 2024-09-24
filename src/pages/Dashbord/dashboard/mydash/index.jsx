import React from 'react';

import style from './index.module.css'
import ProfileLayout from "../../../../dashboard/dashboard";
const MyDashboard = () => {
    return (
        <div className={style.dashboard}>
            <ProfileLayout/>
            {/*<div className={style.dashboardContent}>*/}
            {/*    <ContentHeader/>*/}
            {/*</div>*/}
        </div>
    );
};

export default MyDashboard;