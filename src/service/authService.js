import axios from "axios";

const API_URL = "https://onlinefoodbackend-production-0cac.up.railway.app/api";

export const registerUser = async (data) => {
    try {
        const response = await axios.post(
            API_URL+"/register",
            data
          );
        return response
    } catch (error) {
        throw error;
    }
}

export const login = async (data) => {
    try {
        const response = await axios.post(API_URL+"/login", data);
        return response;
    } catch (error) {
        throw error;
    }
}