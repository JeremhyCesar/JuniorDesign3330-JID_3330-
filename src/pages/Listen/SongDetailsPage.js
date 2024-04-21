import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { BlurView } from "@react-native-community/blur";
import TrackPlayer, {
  RepeatMode,
  useTrackPlayerEvents,
  Event,
} from "react-native-track-player";
import MusicQueueModule from "./MusicQueueModule";
import VolumeBar from "./VolumnBar";

const formatTime = (seconds) => {
  const minutes = Math.floor(Math.abs(seconds) / 60);
  const remainingSeconds = Math.floor(Math.abs(seconds) % 60);
  return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
};

const SongDetailsPage = ({ route }) => {
  const navigation = useNavigation();
  const [currentTrack, setCurrentTrack] = useState(
    route.params?.currentTrack || {}
  );
  const [isPlaying, setIsPlaying] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isQueueVisible, setIsQueueVisible] = useState(false);
  const [repeatMode, setRepeatMode] = useState(RepeatMode.Off);
  const [volume, setVolume] = useState(1);
  const [isVolumeVisible, setIsVolumeVisible] = useState(false);

  useTrackPlayerEvents([Event.PlaybackTrackChanged], async (event) => {
    if (
      event.type === Event.PlaybackTrackChanged &&
      event.nextTrack !== undefined
    ) {
      const track = await TrackPlayer.getTrack(event.nextTrack);
      setCurrentTrack(track);
      const duration = await TrackPlayer.getDuration();
      setDuration(duration);
      setProgress(0);
    }
  });

  useEffect(() => {
    // const fetchDuration = async () => {
    //   const duration = await TrackPlayer.getDuration();
    //   setDuration(duration);
    // };

    const fetchPosition = async () => {
      const position = await TrackPlayer.getPosition();
      setProgress(position);
    };

    // fetchDuration();

    // const intervalId = setInterval(async () => {
    //   const position = await TrackPlayer.getPosition();
    //   const duration = await TrackPlayer.getDuration();
    //   const progress = position / duration;
    //   setProgress(progress);
    // }, 1000);

    const intervalId = setInterval(() => {
      fetchPosition();
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const togglePlayback = async () => {
    const state = (await TrackPlayer.getPlaybackState()).state;
    if (state === "playing") {
      await TrackPlayer.pause();
      setIsPlaying(false);
    } else {
      await TrackPlayer.play();
      setIsPlaying(true);
    }
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const toggleRepeatMode = async () => {
    const modes = [RepeatMode.Off, RepeatMode.Track, RepeatMode.Queue];
    // const currentIndex = modes.indexOf(repeatMode);
    // const nextIndex = (currentIndex + 1) % modes.length;
    // const nextMode = modes[nextIndex];
    // await TrackPlayer.setRepeatMode(nextMode);
    // setRepeatMode(nextMode);
    const nextIndex = (modes.indexOf(repeatMode) + 1) % modes.length;
    const nextMode = modes[nextIndex];
    await TrackPlayer.setRepeatMode(nextMode);
    setRepeatMode(nextMode);
  };
  

  const handleVolumeChange = async (newVolume) => {
    await TrackPlayer.setVolume(newVolume);
    setVolume(newVolume);
  };

  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
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
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity>
            <Icon
              name="menu"
              size={25}
              color="white"
              style={{ marginRight: 10 }}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ flex: 1, top: 30, backgroundColor: "black" }}>
        <ImageBackground
          source={currentTrack.artwork}
          style={{ width: "100%", height: undefined, aspectRatio: 1 }}
          resizeMode="contain"
        />
      </View>

      <BlurView
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 220,
          opacity: 1,
        }}
        blurType="light"
        blurAmount={20}
        reducedTransparencyFallbackColor="white"
      >
        <View
          style={{ flex: 1, justifyContent: "flex-end", paddingBottom: 20 }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 20,
            }}
          >
            <View
              style={{
                justifyContent: "center",
                marginLeft: 10,
                marginTop: 5,
              }}
            >
              <Text style={{ fontSize: 20, color: "white", marginBottom: 4 }}>
                {currentTrack.title}
              </Text>
              <Text style={{ fontSize: 14, color: "white" }}>
                {currentTrack.artist}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginRight: 8,
              }}
            >
              <TouchableOpacity onPress={toggleFavorite}>
                <Icon
                  name={isFavorite ? "favorite" : "favorite-border"}
                  size={25}
                  color="white"
                  style={{ marginRight: 15 }}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={{ marginLeft: 20 }}
                onPress={() => setIsQueueVisible(true)}
              >
                <Icon name="queue-music" size={25} color="white" />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              width: "80%",
              marginTop: 8,
              marginLeft: 30,
              marginBottom: 5,
            }}
          >
            <View
              style={{
                width: "90%",
                height: 8,
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                borderRadius: 2,
                marginRight: 20,
                marginTop: 5,
              }}
            >
              <View
                style={{
                  width: `${(progress / duration) * 100}%`,
                  height: 8,
                  backgroundColor: "white",
                  borderRadius: 2,
                }}
              />
            </View>
            <Text style={{ color: "white", fontSize: 13 }}>
              {formatTime(duration - progress)}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginLeft: 26,
              marginTop: 15,
              marginRight: 25,
            }}
          >
            <TouchableOpacity
              style={{ marginTop: 20 }}
              onPress={toggleRepeatMode}
            >
              <Icon
                name={
                  repeatMode === RepeatMode.Off
                    ? "repeat"
                    : repeatMode === RepeatMode.Track
                    ? "repeat-one"
                    : "repeat"
                }
                size={30}
                color="white"
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={{ marginTop: 20, marginLeft: 8 }}
              onPress={() => TrackPlayer.skipToPrevious()}
            >
              <Icon name="skip-previous" size={30} color="white" />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                backgroundColor: "white",
                borderRadius: 35,
                padding: 20,
                marginLeft: 8,
              }}
              onPress={togglePlayback}
            >
              <Icon
                name={isPlaying ? "pause" : "play-arrow"}
                size={30}
                color="black"
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={{ marginTop: 20, marginLeft: 8 }}
              onPress={() => TrackPlayer.skipToNext()}
            >
              <Icon name="skip-next" size={30} color="white" />
            </TouchableOpacity>

            <TouchableOpacity
              style={{ marginTop: 20, marginLeft: 8 }}
              onPress={() => setIsVolumeVisible(true)}
            >
              <Icon name="volume-up" size={30} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </BlurView>
      <MusicQueueModule
        visible={isQueueVisible}
        onClose={() => setIsQueueVisible(false)}
      />
      <VolumeBar
        visible={isVolumeVisible}
        volume={volume}
        onVolumeChange={handleVolumeChange}
        onClose={() => setIsVolumeVisible(false)}
      />
    </View>
  );
};

export default SongDetailsPage;
