import axios from "axios";

export const normalAxios = axios.create({
    baseURL: 'https://good-car-server.vercel.app',
});

const useNormalAxios = () => {
    return normalAxios
};

export default useNormalAxios;