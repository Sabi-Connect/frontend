import React from 'react';
import {BiBuilding, BiLogoAndroid, BiLogoHtml5} from "react-icons/bi";
import courses from "autosuggest-highlight/ie11/match";

const Course = [
    {
        title:'Web Development',
        icon:<BiLogoHtml5/>,
    },
    {
        title:'App Development',
        duration:'2 Hours',
        icon:<BiLogoAndroid/>,
    },
    {
        title:'UX & UI',
        duration:'2 Hours',
        icon:<BiBuilding/>,
    },
];

const Card = () => {
    return (
        <>
            <div>
                <div >

                </div>

            </div>
        </>
    );
};

export default Card;