import React, {useContext} from "react";
import { useMutation, useApolloClient } from "@apollo/react-hooks";
import { AUTHORIZE } from "../../graphql/mutations";
import { AuthStorageContext } from "../contexts/AuthStorageProvider";
import {useNavigate} from "react-router-native"

const useSignIn = () => {
  const [mutate, result] = useMutation(AUTHORIZE);
  const authStorage = useContext(AuthStorageContext);
  const apolloClient = useApolloClient()
  const navigate = useNavigate()

  const signIn = async ({ username, password }) => {
    const options = {
      variables: {
        credentials: {
          username,
          password,
        },
      },
    };
    try{
      const req = await mutate(options);
      const accessToken = req.data.authenticate.accessToken;
      await authStorage.setAccessToken(accessToken)
      console.log(accessToken);
      apolloClient.resetStore()
      navigate('/')
    }catch(e){
      console.log(e);
    } 
    
  };

  return [signIn, result];
};

export default useSignIn;
