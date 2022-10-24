import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import { Link, useLocation } from "react-router-native";
import Header from "./Header";
import useThemedStyles from "./hooks/useThemedStyles";

const AppBarTab = ({children, to})=>{
    const styles = useThemedStyles(stylesCallback)
    const {pathname} = useLocation()
    const tabStyles = [
        styles.barTab,
        pathname === to && styles.active
    ]
    return(
    <Link to={to} component={TouchableWithoutFeedback}>
        <Text style={tabStyles}>{children} {console.log(pathname)}</Text>
    </Link>)
}

const AppBar = () => {
  const styles = useThemedStyles(stylesCallback)

  return (
    <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={ styles.container} >
        <AppBarTab to={'/'}>Repositories</AppBarTab>
        <AppBarTab to={'/signin'}>Sign In</AppBarTab>
      </ScrollView>
    </View>
      

  );
};

const stylesCallback = (theme) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.colors.backgroundSecondary,
      paddingVertical: 20,
      paddingHorizontal:10,
    },
    barTab:{
        marginLeft: 10,
        fontWeight: 'bold',
        color: '#cccc',
    },
    active:{
        color: theme.colors.headline
    }
})

export default AppBar;
