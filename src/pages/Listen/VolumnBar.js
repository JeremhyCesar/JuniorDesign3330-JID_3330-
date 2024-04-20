import React from "react";
import { View, Text, Slider } from "react-native";

const VolumeBar = ({ visible, volume, onVolumeChange, onClose }) => {
  if (!visible) return null;

  return (
    <View style={{ position: "absolute", bottom: 80, left: 0, right: 0, padding: 20 }}>
      <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 10 }}>
        Volume
      </Text>
      <Slider
        value={volume}
        onValueChange={onVolumeChange}
        minimumValue={0}
        maximumValue={1}
        step={0.1}
      />
      <TouchableOpacity onPress={onClose} style={{ marginTop: 10 }}>
        <Text style={{ fontSize: 16, color: "blue" }}>Close</Text>
      </TouchableOpacity>
    </View>
  );
};

export default VolumeBar;