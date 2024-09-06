import React, { useState } from 'react';
import './index.module.css';
import { findById } from '../../../../../../component/skilledworkerApi';

const FindById = () => {
    const [id, setId] = useState('');
    const [data, setData] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleFindById = async () => {
        setLoading(true);
        setError('');
        try {
            const result = await findById({ id });
            setData(result);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="findById-container">
            <h2>Find Worker by ID</h2>
            <input
                type="text"
                value={id}
                onChange={(e) => setId(e.target.value)}
                placeholder="Enter Worker ID"
            />
            <button onClick={handleFindById} disabled={loading}>
                {loading ? 'Loading...' : 'Find Worker'}
            </button>

            {error && <p className="error">{error}</p>}

            {data && (
                <div className="result-container">
                    <h3>Worker Details</h3>
                    <p>ID: {data.id}</p>
                    <p>Name: {data.name}</p>
                    <p>Skills: {data.skills.join(', ')}</p>
                    {/* Add more details as needed */}
                </div>
            )}
        </div>
    );
};

export default FindById;

// Ensure you import your API call function
 // Path to your API call function
