import React from "react";
import { Text, View, StyleSheet } from "react-native";
import useThemedStyles from "./hooks/useThemedStyles";

const Header = ({ children }) => {
  const styles = useThemedStyles(stylesCallback)
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{children} {console.log(styles)}</Text>
    </View>
  );
};
const stylesCallback = (theme) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.colors.backgroundSecondary,
      paddingVertical: 20,
      paddingHorizontal:10
    },
    header: {
      color: theme.colors.headline,
      fontSize: theme.typography.size.M,
      fontWeight: "bold"
    },
  });

export default Header;
