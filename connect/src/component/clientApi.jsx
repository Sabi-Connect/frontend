import axios from "axios";

export async function callClientNothingEndpoint() {
    const url = 'http://localhost:8080/api/v1/client/nothing';

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
    };

    try {
        const response = await fetch(url, requestOptions);

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`HTTP error! status: ${response.status}, message: ${errorData.message}`);
        }

        const data = await response.json();
        console.log('Response data:', data);

    } catch (error) {
        console.error('Error during fetch:', error.message);
    }
}

export const clientSignupApi = async (userData) => {
    console.log(userData);

    const URL = 'https://sabiconnect-latest.onrender.com/api/v1/client/registerClient';

    try {
        const response = await fetch(URL,  {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData)
        })
        console.log(response);

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`HTTP error! status: ${response.status}, message: ${errorData.message}`);
        }

        const result = await response.json();
        console.log(result);
        return result;
    } catch (error) {
        console.error('Error during client signup:', error.message);
        throw error;
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
}