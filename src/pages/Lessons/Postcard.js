import React from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";

const Postcard = ({ composer, onPress }) => {
  const { name, image } = composer;

  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>{name}</Text>
      <Image source={image} style={styles.buttonImage} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 30,
    shadowOffset: { width: 4, height: 4 },
    shadowColor: "black",
    shadowOpacity: 0.25,
    width: "84%",
    height: 125,
    backgroundColor: "#ffffff",
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  buttonText: {
    fontSize: 30,
    textAlign: "left",
    fontWeight: "bold",
    color: "#dc7424",
    width: 150,
    flexWrap: "wrap",
  },
  buttonImage: {
    position: "absolute",
    top: 0,
    right: 20,
    width: 120,
    height: 155,
    objectFit: "cover",
  },
});

export default Postcard;