import { gql } from "apollo-boost";

export const AUTHORIZE = gql`
    mutation Authenticate($credentials: AuthenticateInput){
        authenticate(credentials: $credentials){
            accessToken
        }
    }
`