import React from "react";
import { Text, View, StyleSheet } from "react-native";
import useThemedStyles from "./hooks/useThemedStyles";

const Header = ({ children }) => {
  const styles = useThemedStyles(stylesCallback)
  return (
    <View>
      <Text style={styles.header}>{children} {console.log(styles)}</Text>
    </View>
  );
};
const stylesCallback = (theme) =>
  StyleSheet.create({
    header: {
      color: theme.colors.headline,
      fontSize: theme.typography.size.M,
      fontWeight: "bold"
    },
  });

export default Header;
