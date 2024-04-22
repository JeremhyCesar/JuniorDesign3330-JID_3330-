import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Modal } from "react-native";
import TrackPlayer from "react-native-track-player";

const MusicQueueModule = ({ visible, onClose }) => {
  const [queue, setQueue] = useState([]);

  useEffect(() => {
    const fetchQueue = async () => {
      const tracks = await TrackPlayer.getQueue();
      setQueue(tracks);
    };

    if (visible) {
      fetchQueue();
    }
  }, [visible]);

  const renderQueueItem = ({ item }) => (
    <TouchableOpacity style={{ padding: 10 }}>
      <Text>{item.title}</Text>
      <Text style={{ fontSize: 12, color: "gray" }}>{item.artist}</Text>
    </TouchableOpacity>
  );

  return (
    <Modal visible={visible} animationType="slide" onRequestClose={onClose}>
      <View style={{ flex: 1, padding: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>
          Music Queue
        </Text>
        <FlatList
          data={queue}
          renderItem={renderQueueItem}
          keyExtractor={(item) => item.id.toString()}
        />
        <TouchableOpacity onPress={onClose} style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 16, color: "blue" }}>Close</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default MusicQueueModule;