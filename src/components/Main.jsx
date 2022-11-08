import { View, Text, StyleSheet } from "react-native";
import Constants from "expo-constants";
import {Route, Routes} from 'react-router-native'
import RepositoryList from "./RepositoryList";
import useThemedStyles from "./hooks/useThemedStyles";
import AppBar from "./AppBar";
import SignIn from "./SignIn";
import SignOut from "./SignOut";


const Main = () => {
  let style = useThemedStyles(styles);
  return (
    <View style={style.container}>
      <AppBar />
      <Routes>
        <Route path='/' element={<RepositoryList/>}/>
        <Route path='/signin' element={<SignIn/>} />
        <Route path='/signout' element={<SignOut/>}/>
      </Routes>
    </View>
  );
};

const styles = (theme) =>
  StyleSheet.create({
    container: {
      marginTop: Constants.statusBarHeight,
      flex: 1,
      backgroundColor: theme.colors.main,
    },
  });

export default Main;
