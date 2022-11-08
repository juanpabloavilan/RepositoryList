import React from "react";
import {  View, Button, StyleSheet} from "react-native";
import { Formik} from "formik";
import FormikTextInput from "./FormikTextInput";
import useThemedStyles from "./hooks/useThemedStyles";
import {signInUserSchema} from "../validationSchemas/signInUserForm";
import useSignIn from "./hooks/useSignIn";




const SignIn = () => {
  const [signIn] = useSignIn()
  
  const authorize = async({username, password}) =>{
    console.log(username, password);
    try{
      await signIn({username, password})
    }catch(e){
      console.log(e);
    }

  }
  const styles = useThemedStyles(stylesCallback);

  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
      }}
      onSubmit={authorize}
      validationSchema={signInUserSchema}
    >
      {({handleSubmit}) => (
            <View style={styles.formContainer}>
              <FormikTextInput name="username" placeholder="Username" />
              <FormikTextInput name="password" placeholder="Password" secureTextEntry />
              <Button onPress={handleSubmit} title="Log In"/> 
            </View>
        )}
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
