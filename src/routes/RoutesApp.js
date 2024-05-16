import React from "react";
import { View, Text } from "react-native";

import { NativeRouter, Route, Routes } from "react-router-native";
import AppBar from "../components/appBar";
import ProtectedRoutes from "../utils/protectedRoutes";
import LogInPage from "../screens/loginPage/loginPage";
import Menu from "../screens/home/homePage"

const RoutesApp = () => {
    return(
        <NativeRouter>
        <View styles={{flex:1}}>
          <AppBar />
            <Routes> 
              <Route path="/" element={<Menu/>} />
              <Route path="/contact" element={<ProtectedRoutes><Text>contact</Text></ProtectedRoutes>} />
              <Route path="/about" element={<ProtectedRoutes><Text>about</Text></ProtectedRoutes>} />
              <Route path="/traffic-ticket" element={<ProtectedRoutes><Text>multa</Text></ProtectedRoutes>} />
              <Route path="/signin" element={<LogInPage/>} />
            </Routes>
        </View>
        </NativeRouter>

    );
} 

export default RoutesApp;