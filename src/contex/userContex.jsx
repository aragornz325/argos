import {createContext, useState} from'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { loginQuery } from '../query/user.query';
import { Navigate } from 'react-router-native';

export const UserContext = createContext();

export const UserContexProvider=({children})=>{

    const [user, setUser] = useState({
        email: '',
        name: '',
    });

    const [login, setLogin] = useState(false);

    async function inicioSesion(email, password){

        const response = await loginQuery({email, password});
        console.log(response);

        if (!response.token){
            alert('Usuario o contraseña incorrecta');
            return;
        }
        await AsyncStorage.setItem('token', response.token);


       if (email === response.user.email){
           setUser({
               email: email,
               name: response.user.email,
           });
           setLogin(true);   
    }
}

    

    function logout(){
        setUser({
            email: '',
            name: '',
        });
        setLogin(false);
    }

    return(
        <UserContext.Provider value={{user, login, inicioSesion, logout}}>
            {children}
        </UserContext.Provider>
    );

}