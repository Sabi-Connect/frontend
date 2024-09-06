import React, { useState } from 'react';
import './index.module.css';
import { addSkillApi } from '../../../../../../component/skilledworkerApi';

const AddSkill = () => {
    const [skillName, setSkillName] = useState('');
    const [skillDescription, setSkillDescription] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const handleAddSkill = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');

        const userData = {
            skillName,
            skillDescription
        };

        try {
            const result = await addSkillApi(userData);
            console.log('Skill added successfully:', result);
            setMessage('Skill added successfully!');
            setSkillName('');
            setSkillDescription('');
        } catch (error) {
            console.error('Error adding skill:', error.message);
            setMessage(`Failed to add skill: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h2>Add New Skill</h2>
            <form onSubmit={handleAddSkill}>
                <div>
                    <label htmlFor="skillName">Skill Name:</label>
                    <input
                        type="text"
                        id="skillName"
                        value={skillName}
                        onChange={(e) => setSkillName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="skillDescription">Skill Description:</label>
                    <textarea
                        id="skillDescription"
                        value={skillDescription}
                        onChange={(e) => setSkillDescription(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" disabled={loading}>
                    {loading ? 'Adding Skill...' : 'Add Skill'}
                </button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default AddSkill;
