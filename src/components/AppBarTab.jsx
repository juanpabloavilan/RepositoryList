import React from "react";
import { TouchableWithoutFeedback, StyleSheet, Text} from "react-native";
import { useLocation, Link } from "react-router-native";
import useThemedStyles from "./hooks/useThemedStyles"

const AppBarTab = ({ children, to, callBack }) => {
    const styles = useThemedStyles(stylesCallback);
    const { pathname } = useLocation();
    const tabStyles = [styles.barTab, pathname === to && styles.active];
    return (
      <Link to={to} component={TouchableWithoutFeedback} onPress={callBack}>
        <Text style={tabStyles}>
          {children} {console.log(pathname)}
        </Text>
      </Link>
    );
};

const stylesCallback = (theme) => StyleSheet.create({
    barTab: {
      marginLeft: 10,
      fontWeight: "bold",
      color: "#cccc",
    },
    active: {
      color: theme.colors.headline,
    },
  });



export default AppBarTab