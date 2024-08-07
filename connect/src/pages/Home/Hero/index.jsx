import React from 'react';
import combi from '../../../assets/combinelabo1.png'

const Hero = () => {
    return (
        <div>
            <div className={`mt-5`}>
                <div className={`flex justify-between`}>
                    <div>
                        <a className={`text-5xl font-semibold text-blue-950`}>Discover more 5000<br/><span
                            className={`text-4xl font-semibold`}>clients and skilled worker</span> </a>
                    </div>
                    <div>
                        <img src={combi} alt="lab" className={`w-[10] h-[10]`}/>
                    </div>
                </div>
                <div>
                    <p>Great platform for the job seeker that searching for new career heights and passionate about
                        startups.</p>
                </div>
            </div>
        </div>
    );
};

export default Hero;