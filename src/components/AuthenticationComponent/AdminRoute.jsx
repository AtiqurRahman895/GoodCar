import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Navigate } from "react-router-dom";
import Loading from "./Loading";

const AdminRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const adminUsers=["emonhassan895@gmail.com"]
    if(loading){
        return <Loading/>
    }
    if(user && adminUsers.includes(user.email)){
        return children
    }
    return <Navigate to={"/login"}></Navigate>
};

export default AdminRoute;