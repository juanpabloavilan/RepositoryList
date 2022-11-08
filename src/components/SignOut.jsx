import { View } from 'react-native-web'
import { useApolloClient, useQuery } from "@apollo/react-hooks";
import IS_USER_LOGGED_IN from "../graphql/queries"
import {useHistory} from "react-router-native"
import { AuthStorageContext } from "./contexts/AuthStorageProvider";
import StyledText from './StyledText'

const SignOut = () => {
  const apolloClient = useApolloClient()
  const history = useHistory()
  const authStorage = useContext(AuthStorageContext)
  

  const onSignOut = () =>{

  }
  return (
    <View>
        <StyledText L headline> You've been logged out successfully</StyledText>
    </View>
  )
}

export default SignOut