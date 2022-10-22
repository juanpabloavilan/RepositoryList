import { View, Text, StyleSheet } from "react-native";
import Constants from "expo-constants";
import RepositoryList from "./RepositoryList";
import Header from "./Header";
import useThemedStyles from "./hooks/useThemedStyles";
import useTheme from "./hooks/useTheme";

const Main = () => {
  let style = useThemedStyles(styles);
  //console.log(styles)
  return (
    <View style={style.container}>
      <Header>
        <Text>Repositories</Text>
      </Header>
      <RepositoryList />
    </View>
  );
};

const styles = (theme) =>
  StyleSheet.create({
    container: {
      marginTop: Constants.statusBarHeight,
      flex:1,      
      backgroundColor: "#eff0f3"
    },
  });

export default Main;
