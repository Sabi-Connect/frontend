import axios from "axios";

export const addSkillApi = async (userData) => {
    const response = await fetch('https://sabiconnect-latest.onrender.com/api/v1/client/addSkill', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),

    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Client can be found');
    }

    return await response.json();
};

export const skillWorkerApi = async (userData) => {
    const response = await fetch('https://sabiconnect-latest.onrender.com/api/v1/skilledWorker/registerSkilledWorker', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'An error occurred');
    }

    return await response.json();
};



export const loginApi = async (loginData) => {
    try {
        // Replace with your actual login endpoint
        return await axios.post('https://sabiconnect-latest.onrender.com/api/v1/auth/login', loginData);
    } catch (error) {
        throw error;
    }
};


// export const bookingApi = async (userData) => {
//     const response = await fetch('https://sabiconnect-latest.onrender.com/api/v1/client/registerClient', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(userData),
//     });
//
//     if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.message || 'An error occurred');
//     }
//
//     return await response.json();
// };

// export const bookingApi = async (userData) => {
//     const response = await fetch('https://sabiconnect-latest.onrender.com/api/v1/client/registerClient', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(userData),
//     });
//
//     if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.message || 'An error occurred');
//     }
//
//     return await response.json();
// };