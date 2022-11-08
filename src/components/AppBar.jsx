import React, {useContext} from "react";
import {View,StyleSheet, ScrollView, Platform} from "react-native";
import useThemedStyles from "./hooks/useThemedStyles";
import AppBarTab from "./AppBarTab";
import {useApolloClient, useQuery } from "@apollo/react-hooks";
import {IS_USER_LOGGED_IN} from "../graphql/queries"

const AppBar = () => {
  const styles = useThemedStyles(stylesCallback);
  const {data ={}, loading, refetch} = useQuery(IS_USER_LOGGED_IN)
  console.log(data);
  const authorizedUser = !data ?  undefined :data.authorizedUser 
  const apolloClient = useApolloClient()
  apolloClient.resetStore()
  
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <AppBarTab to={"/"}>Repositories</AppBarTab>
        {!authorizedUser &&<AppBarTab to={"/signin"} >Sign In</AppBarTab>}
        {authorizedUser && <AppBarTab to={"/signout"}>Sign Out</AppBarTab>}
      </ScrollView>
    </View>
  );
};

const stylesCallback = (theme) =>
  StyleSheet.create({
    container: {
      backgroundColor: Platform.select({
        android: theme.colors.backgroundSecondary,
        ios: theme.colors.error,
        default: theme.colors.success
      }),
      paddingVertical: 20,
      paddingHorizontal: 10,
    },
    barTab: {
      marginLeft: 10,
      fontWeight: "bold",
      color: "#cccc",
    }
    
  });

export default AppBar;
