import axios from 'axios';

export const loginApi = async (loginData, userType) => {
    const endpointMap = {
        client: 'https://sabiconnect-latest.onrender.com/api/v1/auth/login/client',
        worker: 'https://sabiconnect-latest.onrender.com/api/v1/auth/login/worker',
    };

    const apiEndpoint = endpointMap[userType] || endpointMap.client;


    try {
        return await axios.post(apiEndpoint, loginData);
    } catch (error) {
        throw error;
    }
};
