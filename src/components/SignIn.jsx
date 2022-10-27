import React from "react";
import { Text, View, TextInput, Button, StyleSheet, TouchableNativeFeedback} from "react-native";
import { Formik, useField } from "formik";
import StyledTextInput from "./StyledTextInput";
import useThemedStyles from "./hooks/useThemedStyles";
import StyledText from "./StyledText";
import {signInUserSchema} from "../validationSchemas/signInUserForm";

const initialValues = {
  email: "",
  password: "",
};

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, handlers] = useField(name);
  const showError = meta.error && meta.touched;
  return (
    <>
      <StyledTextInput
        value={field.value}
        onChangeText={(newValue) => handlers.setValue(newValue)}
        onBlur={() => handlers.setTouched(true)}
        showError={showError}
        errorInfo={meta.error}
        {...props}
      />
    </>
  );
};

/*
//Validación utilizando función que retorna un objeto. 
//Recuerda cambiar validationSchema prop en formik y cambiarlo por validate={validate}
const validateFun = (values) => {
  const errores = {};
  if (!values.email) {
    errores.email = "Email is required :(";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errores.email = "Invalid email D:";
  }

  return errores;
};*/

const SignIn = () => {
  const styles = useThemedStyles(stylesCallback);
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => console.log(values)}
      validationSchema={signInUserSchema}
    >
      {({ handleSubmit }) => {
        return (
          <View style={styles.container}>
            <StyledText headline bold L>
              Welcome, Sign in and enjoy this App
            </StyledText>
            <View style={styles.formContainer}>
              <FormikTextInput name="email" placeholder="E-mail" />
              <FormikTextInput
                name="password"
                placeholder="Password"
                secureTextEntry
              />
              <TouchableNativeFeedback style={styles.button}>
                <Button title="Log in" onPress={handleSubmit} />
              </TouchableNativeFeedback>
            </View>
          </View>
        );
      }}
    </Formik>
  );
};

const stylesCallback = (theme) =>
  StyleSheet.create({
    container: {
      flexGrow: 1,
      padding: 20,
      backgroundColor: theme.colors.main,
    },
    formContainer:{
      marginTop: 30
    },
    button:{
      marginTop:15,
      flexDirection: "row",
      justifyContent:"center",
      backgroundColor: "red",
      flexGrow: 1
    }
  });

export default SignIn;
