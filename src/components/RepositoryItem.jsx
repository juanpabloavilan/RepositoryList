import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import useThemedStyles from "./hooks/useThemedStyles";
import RepositoryStats from "./RepositoryStats";

const RepositoryItem = ({
  id,
  fullName,
  description,
  language,
  forksCount,
  stargazersCount,
  ratingAverage,
  reviewCount,
  ownerAvatarUrl,
}) => {
  const styles = useThemedStyles(styleFun);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.horizontalContainer}>
        <View>
          <Image style={styles.profileImage} source={{ uri: ownerAvatarUrl }} />
        </View>
        <View key={id} style={styles.container}>
          <Text style={styles.title}>{fullName}</Text>
          <Text style={styles.paragraph}>{description}</Text>
          <Text style={styles.technology}>{language}</Text>
        </View>
      </View>
      <View>
        <RepositoryStats
          {...{ forksCount, stargazersCount, ratingAverage, reviewCount }}
        />
      </View>
    </View>
  );
};

const styleFun = (theme) =>
  StyleSheet.create({
    mainContainer:{
        padding:10,
        backgroundColor: theme.colors.background,
        margin: 5,
        borderRadius:5
    },
    horizontalContainer: {
      flexDirection: "row",
      gap:5
    },
    container: {
      flexGrow: 1,
      padding: 5,
      marginTop: 5,
    },
    profileImage: {
      marginTop: 10,
      height: 50,
      width: 50,
      borderRadius: 5,
    },
    title: {
      fontSize: theme.typography.size.M,
      color: theme.colors.headline,
      fontWeight: "500",
    },
    paragraph:{
        color: theme.colors.paragraph
    },
    technology:{
        backgroundColor:theme.colors.button,
        color: theme.colors.buttonText,
        padding:3,
        alignSelf: "flex-start",
        borderRadius: 3
    }
  });

export default RepositoryItem;
