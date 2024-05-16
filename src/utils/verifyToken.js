import AsyncStorage from '@react-native-async-storage/async-storage';
import { jwtDecode } from "jwt-decode";
import { useContext } from 'react';
import { Alert } from 'react-native';
import { Navigate } from "react-router-native";
import { UserContext } from '../contex/userContex';




const verifyToken = async () =>{
const {logout} = useContext(UserContext);

    try {


        const value = await AsyncStorage.getItem('token');
        if (value === null) {
          return false;
        }

        const decoded = jwtDecode(value);
        const exp = decoded.exp;
        const currentTime = new Date().getTime() / 1000;
        if (exp < currentTime) {
          Alert.alert('Sesión expirada, logueate nuevamente');
          logout();
          return false;
        }
        return true;
      } catch (e) {
        throw new Error(e);
      }
}

export default verifyToken;
