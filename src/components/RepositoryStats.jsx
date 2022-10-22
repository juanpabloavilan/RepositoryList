import React from "react";
import { View, Text, StyleSheet } from "react-native";
import useThemedStyles from "./hooks/useThemedStyles";

const RepositoryStats = ({
  forksCount,
  stargazersCount,
  ratingAverage,
  reviewCount,
}) => {
  const styles = useThemedStyles(stylesFun);
  return (
    <View style={styles.horizontalContainer}>
      <View style={styles.verticalContainer}>
        <Text style={styles.title}>{parseStat(forksCount)}</Text>
        <Text style={styles.paragraph}>Forks</Text>
      </View>
      <View style={styles.verticalContainer}>
        <Text style={styles.title}>{parseStat(stargazersCount)}</Text>
        <Text style={styles.paragraph}>Stars</Text>
      </View>
      <View style={styles.verticalContainer}>
        <Text style={styles.title}>{parseStat(ratingAverage)}</Text>
        <Text style={styles.paragraph}>Rating</Text>
      </View>
      <View style={styles.verticalContainer}>
        <Text style={styles.title}>{parseStat(reviewCount)}</Text>
        <Text style={styles.paragraph}>Reviews</Text>
      </View>
    </View>
  );
};
const parseStat = (number) => {
  return number > 1000 ? Math.round(number / 100) / 10 + "k" : number;
};
const stylesFun = (theme) =>
  StyleSheet.create({
    horizontalContainer: {
      flexDirection: "row",
      justifyContent: "space-around",
    },
    verticalContainer: {
      flexDirection: "column",
      alignItems: "center",
    },
    title: {
      color: theme.colors.headline,
      fontWeight: "500",
    },
    paragraph: {
      color: theme.colors.paragraph,
    },
  });

export default RepositoryStats;
