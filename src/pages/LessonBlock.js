import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const LessonBlock = ({
  imageSource,
  imageBackgroundColor = "transparent", // Default background color for the image
  title,
  titleColor = "#000", // Default title color
  introduction,
  backgroundColor = "white", // Default block background color
}) => {
  return (
    <View style={[styles.block, { backgroundColor }]}>
      <View
        style={[
          styles.imageContainer,
          { backgroundColor: imageBackgroundColor },
        ]}
      >
        <Image source={imageSource} style={styles.image} resizeMode="contain" />
      </View>
      <View style={styles.textContainer}>
        <Text style={[styles.title, { color: titleColor }]}>{title}</Text>
        <Text style={styles.introduction}>{introduction}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Take up all available space
    justifyContent: "center", // Center children vertically in the container
    alignItems: "center", // Center children horizontally in the container
    padding: 20, // Add padding around the edges
  },
  block: {
    flexDirection: "row",
    borderRadius: 31,
    backgroundColor: "white",
    shadowOffset: { width: 4, height: 4 },
    shadowColor: "black",
    shadowOpacity: 0.25,
    elevation: 5,
    width: "84%",
    height: 142,
    alignItems: "center", // Align items vertically center
    overflow: "hidden", // Ensures children respect borderRadius
  },
  imageContainer: {
    width: "45%", // Image occupies less than half of the block
    height: "100%", // Full height of the block
    justifyContent: "center",
    alignItems: "center", // Center the image within this container
  },
  image: {
    width: "100%", // Adjust as needed based on your images
    height: "100%", // Adjust as needed
  },
  textContainer: {
    width: "55%", // Remaining space for text
    paddingHorizontal: 10, // Padding to prevent text from touching the edges
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  introduction: {
    fontSize: 16,
    color: "#717171",
    marginTop: 5, // Space between title and introduction
  },
});

export default LessonBlock;
