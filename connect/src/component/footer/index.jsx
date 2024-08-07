import React from 'react';
import style from './index.module.css'

const Footer = () => {
    return (
        <>
            <footer className={style.fot}>
                <div >
                    <a className={style.fot1}>Sabi-Connect</a>
                    <p >Great platform to connect that
                        both Clients and Skilled workers<br/>
                        to give them a happy ending</p>
                </div>
                <div>
                    <a className={style.fot2}>About</a>
                    <p >Terms</p>
                    <p >Pricing</p>
                    <p >Advice</p>
                    <p >Privacy Policy</p>
                    <p >Clients</p>
                </div>
                <div>
                    <a className={style.fot3}>Resources</a>
                    <p >Guide</p>
                    <p >Help Docs</p>
                    <p >Contact Us</p>
                    <p >Updates</p>
                </div>
                <div>
                    <a className={style.fot4}>Get job notifications</a>
                    <p >The latest job news articles sent to your inbox everyday</p>
                </div>
            </footer>
        </>
    );
};

export default Footer;