import React from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";

const InstrumentPostcard = ({ instrument, onPress }) => {
  const { name, image } = instrument;

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
    height: 100,
    backgroundColor: "#ffffff",
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  buttonText: {
    fontSize: 20,
    textAlign: "left",
    fontWeight: "bold",
    color: "#dc7424",
    width: 250,
    flexWrap: "wrap",
  },
  buttonImage: {
    position: "absolute",
    top: 10,
    right: 10,
    width: 80,
    height: 80,
    resizeMode: "contain",
  },
});

export default InstrumentPostcard;