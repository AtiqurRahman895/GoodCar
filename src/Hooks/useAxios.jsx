import axios from "axios";

export const normalAxios = axios.create({
    baseURL: 'https://good-car-server.vercel.app/',
});

export const secureAxios = axios.create({
    baseURL: 'https://good-car-server.vercel.app/',
    withCredentials: true
});

const useAxios = () => {
    return {normalAxios,secureAxios}
};

export default useAxios;