import React, {useContext} from "react";
import { UserContext } from "../contex/userContex";
import { Navigate } from "react-router-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import verifyToken from "../utils/verifyToken";


const ProtectedRoutes = ({children}) => {
    
    const{login} = useContext(UserContext);

    const tokenVerify = verifyToken();
    
    if(login && tokenVerify){
        return children;
    }else{
        return <Navigate to="/signin" />
    }
}

export default ProtectedRoutes;