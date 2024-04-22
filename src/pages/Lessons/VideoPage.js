import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import YoutubePlayer from "react-native-youtube-iframe";
import Icon from "react-native-vector-icons/MaterialIcons";

// usage: navigation.navigate('VideoPage', {composerName: [name of composer], videoID: [videoID]})
export function VideoPage({ route, navigation }) {
  const { composerName, videoID } = route.params;
  return (
    <View>
      <View
        style={{
          backgroundColor: "#e2480d",
          paddingHorizontal: 10,
          paddingTop: 55,
          paddingBottom: 10,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={25} color="white" />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>{composerName} Video</Text>
      <YoutubePlayer height={300} videoId={videoID} />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 24,
    color: "#333",
    marginTop: 20,
    marginBottom: 10,
    marginHorizontal: 20,
  },
});
