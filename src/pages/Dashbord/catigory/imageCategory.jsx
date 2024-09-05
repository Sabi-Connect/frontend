import React from 'react';
import { useParams } from 'react-router-dom';

const workerData = {
    electrical: [
        { name: 'John Doe', experience: '5 years' },
        { name: 'Jane Smith', experience: '3 years' },
    ],
    plumbing: [
        { name: 'Bob Johnson', experience: '4 years' },
        { name: 'Alice Davis', experience: '6 years' },
    ],
    beauty_care: [
        { name: 'Mary Brown', experience: '2 years' },
        { name: 'Linda Miller', experience: '8 years' },
    ],
    carpentry: [
        { name: 'James Wilson', experience: '10 years' },
        { name: 'Patricia Garcia', experience: '5 years' },
    ],
    fashion: [
        { name: 'Robert Martinez', experience: '7 years' },
        { name: 'Jennifer Lopez', experience: '4 years' },
    ],
    photography: [
        { name: 'Michael Anderson', experience: '3 years' },
        { name: 'Elizabeth Taylor', experience: '6 years' },
    ],
};

const WorkerProfiles = () => {
    const { category } = useParams();
    const workers = workerData[category] || [];

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>{category.charAt(0).toUpperCase().toLowerCase() + category.slice(1)} Workers</h1>
            <ul>
                {workers.length > 0 ? (
                    workers.map((worker, index) => (
                        <li key={index}>
                            <h3>{worker.name}</h3>
                            <p>Experience: {worker.experience}</p>
                        </li>
                    ))
                ) : (
                    <p>No workers available in this category.</p>
                )}
            </ul>
        </div>
    );
};

export default WorkerProfiles;
