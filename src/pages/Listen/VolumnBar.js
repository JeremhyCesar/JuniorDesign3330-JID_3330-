import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Slider from "@react-native-community/slider";

const VolumeBar = ({ visible, volume, onVolumeChange, onClose }) => {
  if (!visible) return null;

  return (
    <View
      style={{
        position: "absolute",
        bottom: 80,
        right: 20,
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        borderRadius: 10,
        padding: 10,
        width: 50,
        height: 150,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Slider
        value={volume}
        onValueChange={onVolumeChange}
        minimumValue={0}
        maximumValue={1}
        step={0.1}
        style={{
          transform: [{ rotate: "-90deg" }],
          width: 130,
          height: 40,
          marginTop: 20,
        }}
        minimumTrackTintColor="white"
        maximumTrackTintColor="gray"
        thumbTintColor="white"
      />
      
      <TouchableOpacity onPress={onClose} style={{ marginTop: 10 }}>
        <Text style={{ fontSize: 16, color: "blue" }}> </Text>
      </TouchableOpacity>
    </View>
  );
};

export default VolumeBar;
