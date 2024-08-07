import React from 'react';
import combi from '../../../assets/combinelabo1.png'
import style from './index.module.css'

const Hero = () => {
    return (
        <div className={style.her}>

            <div>
                <a style={{fontSize:"20px"}}>Discover more 5000<br/><span style={{color:"#26A4FF"}}
                >clients and skilled worker</span> </a>
                <p className={style.her1}>Great platform for the job seeker that searching for new career heights and
                    passionate about
                    startups.</p>

            </div>
            {/*<img src={combi} alt="lab" className={style.img}/>*/}


            <div className={style.img1}>
            <img src={combi} alt="lab" className={style.img}/>
            </div>
        </div>


    );
};

export default Hero;