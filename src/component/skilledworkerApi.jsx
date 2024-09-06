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
    const URL = 'https://sabiconnect-latest.onrender.com/api/v1/skilledWorker/registerSkilledWorker';
    try {
        const response = await fetch(URL,  {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData)
        })
        console.log(JSON.stringify(userData));
        console.log(response);

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`HTTP error! status: ${response.status}, message: ${errorData.message}`);
        }

        const result = await response.json();
        console.log(result);
        return result;
    } catch (error) {
        console.error('Error during skilled worker signup:', error.message);
        throw error;
    }
};

// Change the URL to the correct one for client login
export const loginApi = async (loginData) => {
    try {
        // Use the client login endpoint if this is for clients
        return await axios.post('https://sabiconnect-latest.onrender.com/api/v1/client/login', loginData);
    } catch (error) {
        throw error;
    }
};


// export const loginApi = async (loginData) => {
//     try {
//         return await axios.post('https://sabiconnect-latest.onrender.com/api/v1/client/login', loginData);
//     } catch (error) {
//         throw error;
//     }
// };


// export const bookingApi = async (userData) => {
//     const response = await fetch('https://sabiconnect-latest.onrender.com/api/v1/skilledWorker/bookAppointment', {
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