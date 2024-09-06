import React from 'react';
import styles from './skillCard.module.css'

const SKillCard = ({image, name, skill, description}) => {
    return (
        <div className={styles.mainContainer}>
            <img src={image} alt={''}/>
            <div className={styles.innerCard}>
                <p>{name}</p>
                <h4>{skill}</h4>
                <div>{description}</div>
            </div>

        </div>
    );
};

export default SKillCard;