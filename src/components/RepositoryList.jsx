import React from "react";
import Constants from "expo-constants";
import { StyleSheet, FlatList, ScrollView, Item } from "react-native";
import repositories from "../data/repositories";
import RepositoryItem from "./RepositoryItem";
const styles = StyleSheet.create({
  //Definiendo el estilo para cada cada objeto de la ui
  scrollView: {
    marginTop: Constants.statusBarHeight,
  },
});

const RepositoryList = () => {
  const RenderItem = ({ item: data }) => {
    return <RepositoryItem {...data} />;
  };
  return (
    <FlatList
      style={styles.container}
      data={repositories}
      renderItem={RenderItem}
      keyExtractor={(repositoryItem) => repositoryItem.id}
    />
  );
};

export default RepositoryList;
