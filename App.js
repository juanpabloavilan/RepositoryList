import React from "react";
import { NativeRouter } from "react-router-native";
import { StatusBar } from "expo-status-bar";
import { ApolloProvider } from "@apollo/react-hooks";
import Constants from "expo-constants"
import Main from "./src/components/Main";
import createApolloClient from "./src/utils/createApolloClient";
import ThemeProvider from "./src/components/contexts/ThemeProvider";
import AuthStorageProvider from "./src/components/contexts/AuthStorageProvider";
import AuthStorage from "./src/utils/AuthStorage";

const authStorage = new AuthStorage()
const client = createApolloClient(authStorage)

export default function App() {
  console.log(Constants.manifest);
  return (
    <ApolloProvider client={client}>
      <StatusBar style="auto"/>
      <NativeRouter>
        <AuthStorageProvider authStorage={authStorage}>
        <ThemeProvider>
          <Main />
        </ThemeProvider>
        </AuthStorageProvider>
      </NativeRouter>
    
    </ApolloProvider>
  );
}
