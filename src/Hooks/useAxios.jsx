import axios from "axios";

export const normalAxios = axios.create({
    baseURL: 'http://localhost:8080',
});

export const secureAxios = axios.create({
    baseURL: 'http://localhost:8080',
    withCredentials: true
});

const useAxios = () => {
    return {normalAxios,secureAxios}
};

export default useAxios;