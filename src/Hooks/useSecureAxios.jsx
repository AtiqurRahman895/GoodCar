import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const secureAxios = axios.create({
    baseURL: 'https://good-car-server.vercel.app',
    withCredentials: true
});

const useSecureAxios = () => {
    const navigate = useNavigate();
    const {logoutUser } = useContext(AuthContext);

    secureAxios.interceptors.request.use(function (config) {
        const role=localStorage.getItem("role")
        const email=localStorage.getItem("email")
        if(email && role){
            config.headers={
                email,
                role,
            }
        }
        // console.log(config.headers)
        return config;
      }, function (error) {
        return Promise.reject(error);
    });

    secureAxios.interceptors.response.use(function (response) {
        return response;
      }, function (error) {
            if (error.response.status === 401 || error.response.status === 403) {
              logoutUser();
              toast.error(error.response.data.message);
              navigate("/login");
            }
            return Promise.reject(error);
      });

    return secureAxios

};

export default useSecureAxios;