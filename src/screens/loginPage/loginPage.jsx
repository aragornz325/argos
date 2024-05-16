import React, {useContext} from "react";
import { Button, View, StyleSheet } from "react-native";
import { Formik } from "formik";
import { useNavigate } from "react-router-native";
import { UserContext } from "../../contex/userContex";

import LoginValidationSchema from "./validationSchemas/login";

import FormInputValue from "../../components/formInputValue";



const initialValues = {
  email: "",
  password: ""
}

const styles = StyleSheet.create({
  error: {
    color: "red",
    fontSize: 12,
    marginBottom: 20,
    marginTop: -5
  },
  form: {
    margin: 12
  }
})

export default function LogInPage() {
  const navigate = useNavigate();
  const {inicioSesion} = useContext(UserContext);

  const handleSubmit = (values) => {
    inicioSesion(values.email, values.password);
    navigate('/');
  }

  return (
    <View>
      <Formik 
      initialValues={initialValues}
      validationSchema={LoginValidationSchema}
        onSubmit={(values)=> handleSubmit(values)}>
        {({handleSubmit}) => (
          <View style={styles.form}>
            <FormInputValue 
              placeholder="email"
              name="email"
            />

            <FormInputValue 
              placeholder="password"
              name="password"
              secureTextEntry
            />
            
            <Button onPress={handleSubmit} title="Submit" />
          </View>
        )}
      </Formik>
    </View>
  )
}
