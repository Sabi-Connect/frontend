import React from 'react';
import Dashboard from "../dashboard/dashboard";
import Appointment from "./appointments/appointment";
import style from './index.module.css'

const Appoint = () => {
    return (
        <div className={style.appointty}>
            {/*<Dashboard/>*/}
            <div>
                <Appointment/>
            </div>
        </div>
    );
};

export default Appoint;