import React from 'react';

const Footer = () => {
    return (
        <>
            <footer className={}>
                <div>
                    <a className={`font-semibold text-3xl`}>Sabi-Connect</a>
                    <p className={`text-sm`}>Great platform to connect that
                        both Clients and Skilled workers
                        to give them a happy ending</p>
                </div>
                <div>
                    <a className={`font-semibold text-3xl`}>About</a>
                    <p className={`text-sm`}>Terms</p>
                    <p className={`text-sm`}>Pricing</p>
                    <p className={`text-sm`}>Advice</p>
                    <p className={`text-sm`}>Privacy Policy</p>
                    <p className={`text-sm`}>Clients</p>
                </div>
                <div>
                    <a className={`font-semibold text-3xl`}>Resources</a>
                    <p className={`text-sm`}>Guide</p>
                    <p className={`text-sm`}>Help Docs</p>
                    <p className={`text-sm`}>Contact Us</p>
                    <p className={`text-sm`}>Updates</p>
                </div>
                <div>
                    <a className={`font-semibold text-3xl`}>Get job notifications</a>
                    <p className={`text-sm`}>The latest job news articles sent to your inbox everyday</p>
                </div>
            </footer>
        </>
    );
};

export default Footer;