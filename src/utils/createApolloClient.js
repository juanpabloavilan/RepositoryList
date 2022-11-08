import {ApolloClient, InMemoryCache} from "@apollo/client";
import Constants from "expo-constants"

const createApolloClient = (authStorage) => new ApolloClient({
    request: async (operation) =>{
        try{
            const accessToken = await authStorage.getAccessToken()
            operation.setContext({
                headers: {
                    authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxYjEwZTRkOC01N2VlLTRkMDAtODg4Ni1lNGEwNDlkN2ZmOGYiLCJpYXQiOjE2Njc4Mjc3MjYsImV4cCI6MjI3MjYyNzcyNiwic3ViIjoiYWNjZXNzVG9rZW4ifQ.fMCTuKrwtM_V2Yi-_wYSDxq2hpZ_fy23mnqHwqfFXxw`
                },
            })
        }catch(e){
            console.log(e);
        }
    },
    cache: new InMemoryCache(),
    uri: Constants.manifest.extra.apolloURI
})

export default createApolloClient

