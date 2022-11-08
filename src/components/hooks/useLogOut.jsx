import React, { useContext } from 'react'
import { AuthStorageContext } from '../contexts/AuthStorageProvider'
import { useApolloClient } from '@apollo/react-hooks'

const useLogOut = () => {
    const apolloClient = useApolloClient()
    const authStorage = useContext(AuthStorageContext)

    const signOut = async() =>{
      try{
          await authStorage.removeAccessToken()
          await apolloClient.resetStore()
      }catch(e){
          console.log(e)
      }
    }

    return signOut


}

export default useLogOut