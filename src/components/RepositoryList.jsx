import React from "react";
import Constants from "expo-constants";
import { StyleSheet, FlatList, ScrollView, Item } from "react-native";
import repositories from "../data/repositories";
import RepositoryItem from "./RepositoryItem";


const RepositoryList = () => {
  const RenderItem = ({ item: data }) => {
    return <RepositoryItem {...data} />;
  };
  return (
    <FlatList
      data={repositories}
      renderItem={RenderItem}
      keyExtractor={(repositoryItem) => repositoryItem.id}
    />
  );
};

export default RepositoryList;
