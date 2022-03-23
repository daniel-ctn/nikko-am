import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://example.com',
    headers: {
        "Content-type": "application/json"
    }
});