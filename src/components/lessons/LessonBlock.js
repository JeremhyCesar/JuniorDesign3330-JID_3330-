import React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";

const LessonBlock = ({ image, title, notes, titleColor, onPress }) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Image source={image} style={styles.image} />
      <View style={styles.contentContainer}>
        <Text style={[styles.title, { color: titleColor }]}>{title}</Text>
        <Text style={styles.notes}>{notes}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    backgroundColor: "white",
    borderRadius: 10,
    overflow: "hidden",
  },
  image: {
    width: 130,
    height: 100,
    marginRight: 10,
  },
  contentContainer: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  notes: {
    fontSize: 14,
    color: "#717171",
  },
});

export default LessonBlock;