import React, {useState} from 'react';
import './index.module.css'

const dummyAppointments = [
    { id: 1, title: "Check-up", date: "2023-10-01" },
    { id: 2, title: "Consultation", date: "2023-10-15" },
];

const categories = [
    'ELECTRICAL',
    'PLUMBING',
    'BEAUTY_CARE',
    'CARPENTRY',
    'FASHION',
    'PHOTOGRAPHY',
];

const BookAppointment = ({ addAppointment }) => {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = () => {
        if (title && date && category) {
            addAppointment({ id: Math.random(), title, date,category });
            alert('Appointment Booked');
        }else {
            alert('Please fill in all fields');
        }
    };
    return (
        <div>
            <h2>Book Appointment</h2>
            {/*<input*/}
            {/*    type="text"*/}
            {/*    placeholder="Title"*/}
            {/*    value={title}*/}
            {/*    onChange={(e) => setTitle(e.target.value)}*/}
            {/*/>*/}
            <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
            />
            <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            >
                <option value="">Select Category</option>
                {categories.map((cat, index) => (
                    <option key={index} value={cat}>
                        {cat.replace('_', ' ')}
                    </option>
                ))}
            </select>
            <button onClick={handleSubmit}>Submit</button>
            {/*<h2>Book Appointment</h2>*/}
            {/*<input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}/>*/}
            {/*<input type="date" value={date} onChange={(e) => setDate(e.target.value)}/>*/}
            {/*<button onClick={handleSubmit}>Submit</button>*/}
        </div>
    );
};

export default BookAppointment;
