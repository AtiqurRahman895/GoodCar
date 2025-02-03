import { useCallback, useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import { normalAxios } from "./useNormalAxios";
import { toast } from "react-toastify";

const useGetUserRole = () => {
    const {logoutUser,user,loading} = useContext(AuthContext);
    const navigate = useNavigate();
  
    const [role,setRole]=useState(() => localStorage.getItem("role") || "guest")
  
    const fetchUserRole= useCallback(async () => {

      if(loading){
        return
      }

      if (!user?.email) {
        setRole("guest")
        localStorage.setItem("role","guest")
      }else{
        try {
          const res =await normalAxios.get(`/user/${user.email}`,{headers:{
            email:user.email,
          },withCredentials: true})
          if (res.data?.role) {
            setRole(res.data.role)
            localStorage.setItem("role",res.data.role)
          } else {
            logoutUser();
            navigate("/login");
          }
        } catch (error) {
          if (error.response?.status === 401 || error.response?.status === 403) {
            logoutUser();
            toast.error(error.response.data?.message);
            navigate("/login");
          }
          console.error("Error finding user role:", error);
        }
      }
      
    },[loading,user?.email,logoutUser,navigate])

    useEffect(()=>{
      fetchUserRole()
    },[fetchUserRole])

    return role
};

export default useGetUserRole;