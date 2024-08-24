import axios from "axios";


export const clientSignupApi = async (userData) => {
    // console.log("hello world")
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
        method: "POST",  // Ensures that the request is a POST request
        headers: myHeaders,
        body: JSON.stringify(userData),  // User data is properly stringified for the POST body
        redirect: "follow"
    };

    try {
        console.log("hello world")
        const response = await fetch("https://sabiconnect-latest.onrender.com/api/v1/client/registerClient", requestOptions);

        if (!response.ok) {
            console.log("hello")
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        console.log(result);
        return result;
    } catch (error) {
        console.error('Error during client signup:', error);
        throw error;  // Re-throw the error to handle it higher up in your application
    }
};

export const cancelAppointmentApi = async (userData) => {
    const response = await fetch('https://sabiconnect-latest.onrender.com/api/v1/skilledWorker/cancelAppointment', {
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


export const bookingApi = async (userData) => {
    const response = await fetch('https://sabiconnect-latest.onrender.com/api/v1/client/bookAppointment', {
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

export const viewAllAppointmentApi = async (userData) => {
    const response = await fetch('https://sabiconnect-latest.onrender.com/api/v1/client/viewAllAppointment', {
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

export const deleteAppointmentApi = async (userData) => {
    const response = await fetch('https://sabiconnect-latest.onrender.com/api/v1/client/deleteAppointment', {
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