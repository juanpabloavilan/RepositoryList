import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { GET_REPOSITORIES } from '../../graphql/queries'

const useRepositoriesGraphQL = () => {
  const {data={}, loading, refetch} = useQuery(GET_REPOSITORIES);
  const {repositories} = data

  const reposNodes = data.repositories ? repositories.edges.map(item =>
    item.node
  ): []
  console.log("Fetching Repos");

  return {loading, repositories:reposNodes, refetch }

}

export default useRepositoriesGraphQL