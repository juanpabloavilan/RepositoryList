import React, { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import RepositoryItem from "./RepositoryItem";
//import useRepositories from "./hooks/useRepositories";
import useRepositoriesGraphQL from "./hooks/useRepositoriesGraphQL";
import StyledText from "./StyledText";


const RepositoryList = () => {
  const {repositories, loading} = useRepositoriesGraphQL();
  const RenderItem = ({ item: data }) => {
    return <RepositoryItem {...data} />;
  };

  if(!loading){
    return (
      <FlatList
        data={repositories}
        renderItem={RenderItem}
        keyExtractor={(repositoryItem) => repositoryItem.id}
      />
    );
  }else{
    return (
      <View>
        <StyledText L bold headline> Cargando... </StyledText>
      </View>
    )
  }
  
};

export default RepositoryList;
