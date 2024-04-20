import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import TrackPlayer from "react-native-track-player";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const ListenScreen = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState(""); // store the search query
  const [currentTrack, setCurrentTrack] = useState(null); // store the current track information
  const [progress, setProgress] = useState(0); // store the progress of the current track
  const [isPlaying, setIsPlaying] = useState(false); // store the playback state
  const [isMuted, setIsMuted] = useState(false); // store the volume state

  const navigateToDetails = (category) => {
    navigation.navigate("Details", { category });
  };

  const navigateToSearchResults = () => {
    navigation.navigate("SearchResultsScreen", { searchQuery });
  };

  // create a function to toggle the playback state
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

  // create a function to toggle the volume state
  const toggleVolume = async () => {
    if (isMuted) {
      await TrackPlayer.setVolume(1);
      setIsMuted(false);
    } else {
      await TrackPlayer.setVolume(0);
      setIsMuted(true);
    }
  };

  const renderPressableButtons = (category) => {
    let items = [];

    if (category === "Favorite Songs") {
      items = [
        {
          id: "1",
          name: "The Four Seasons",
          composer: "Antonio Vivaldi",
          image: require("../../assets/4seasons.jpeg"),
        },
        {
          id: "2",
          name: "Messiah",
          composer: "George Frideric Handel",
          image: require("../../assets/messiah.jpeg"),
        },
        {
          id: "3",
          name: "Symphony No. 7",
          composer: "Ludwig van Beethoven",
          image: require("../../assets/symp7.jpeg"),
          url: require("../../assets/music/symp7.mp3"),
        },
        {
          id: "4",
          name: "The Nutcracker",
          composer: "Pyotr Ilyich Tchaikovsky",
          image: require("../../assets/nutcracker.jpg"),
        },
        {
          id: "5",
          name: "Symphony No. 5",
          composer: "Ludwig van Beethoven",
          image: require("../../assets/symp5.jpeg"),
        },
      ];
    } else if (category === "My Composers") {
      items = [
        {
          name: "Ludwig van Beethoven",
          image: require("../../assets/beethoven1.jpeg"),
        },
        { name: "Frédéric Chopin", image: require("../../assets/chopin.jpeg") },
        {
          name: "Antonio Vivaldi",
          image: require("../../assets/vivaldi.jpeg"),
        },
        {
          name: "Wolfgang Amadeus Mozart",
          image: require("../../assets/mozart.jpeg"),
        },
        { name: "Johannes Brahms", image: require("../../assets/brahms.png") },
      ];
    } else if (category === "Assigned Works") {
      items = [
        {
          name: "Water Music",
          composer: "George Frideric Handel",
          image: require("../../assets/watermusic.jpg"),
        },
        {
          name: "Symphony No. 1",
          composer: "Gustav Mahler",
          image: require("../../assets/symp1.jpeg"),
        },
        {
          name: "Symphony No. 3",
          composer: "Ludwig van Beethoven",
          image: require("../../assets/symp3.jpeg"),
        },
        {
          name: "Carmen",
          composer: "Georges Bizet",
          image: require("../../assets/carmen.jpeg"),
        },
        {
          name: "Swan Lake",
          composer: "Pyotr Ilyich Tchaikovsky",
          image: require("../../assets/swanlake.jpg"),
        },
      ];
    }

    // Play song
    const playSong = async (song) => {
      await TrackPlayer.reset();
      await TrackPlayer.add({
        id: song.id,
        url: song.url,
        title: song.name,
        artist: song.composer,
        artwork: song.image,
      });
      await TrackPlayer.play();
    };

    // Setup player
    useEffect(() => {
      setupPlayer();
      return () => {
        TrackPlayer.destroy();
      };
    }, []);

    const setupPlayer = async () => {
      await TrackPlayer.setupPlayer(); // initialize the player
    };

    // create a function to update the current track information whenever a new track starts playing
    const updateCurrentTrack = async () => {
      // get the current track id, because the design of the "trackPlayer" does not store the detailed track information
      const track = await TrackPlayer.getCurrentTrack();
      // takes the track ID and uses it to fetch more comprehensive details about the track, then display in the user interface
      const trackObject = await TrackPlayer.getTrack(track);
      setCurrentTrack(trackObject);
    };

    // subscribe to the playback-track-changed event to update the current track information
    useEffect(() => {
      const subscribeToTrackChange = async () => {
        await TrackPlayer.addEventListener("playback-track-changed", () => {
          updateCurrentTrack();
          setIsPlaying(true);
        });
      };

      subscribeToTrackChange();

      // return () => {
      //   TrackPlayer.removeEventListener(
      //     "playback-track-changed",
      //     updateCurrentTrack
      //   );
      // };
    }, []);

    // track the playback progress and update the progress bar value:
    useEffect(() => {
      const intervalId = setInterval(async () => {
        const position = await TrackPlayer.getPosition();
        const duration = await TrackPlayer.getDuration();
        const progress = position / duration;
        setProgress(progress);
      }, 1000);
      return () => clearInterval(intervalId);
    }, []);

    return (
      <ScrollView horizontal={true} style={{ flex: 1 }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {items.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={{
                backgroundColor: "lightgray",
                margin: 5,
                borderRadius: 10,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
                left: 6,
                alignContent: "center",
                top: 4,
                width: category === "My Composers" ? 100 : 150,
                height: category === "My Composers" ? 100 : 150,
              }}
              // onPress={() => navigateToDetails(category)}
              onPress={() => playSong(item)}
            >
              <Image
                source={item.image}
                style={{
                  width: "100%",
                  height: "100%",
                  resizeMode: "cover",
                  borderRadius: category === "My Composers" ? 100 : 10,
                }}
              />
              <View
                style={{
                  borderBottomRightRadius: 10,
                  borderBottomLeftRadius: 10,
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: 50,
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 15,
                    textAlign: "center",
                    fontWeight: "bold",
                    numberOfLines: 1,
                    alignContent: "center",
                  }}
                >
                  {item.name}
                </Text>
                <Text
                  style={{
                    color: "white",
                    fontSize: 12,
                    textAlign: "center",
                    fontWeight: "regular",
                    numberOfLines: 1,
                  }}
                >
                  {item.composer}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    );
  };
  const { width } = Dimensions.get("window");

  return (
    <View style={{ flex: 1 }}>
      <View style={{ backgroundColor: "#e2480d", padding: 10 }}>
        <Text
          style={{
            left: 5,
            color: "white",
            fontWeight: "bold",
            marginTop: 45,
            fontSize: 25,
          }}
        >
          Let's listen, Julie!
        </Text>
      </View>

      <View style={{ padding: 10 }}>
        <TextInput
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            borderRadius: 5,
            paddingHorizontal: 10,
          }}
          placeholder="Search"
          value={searchQuery}
          onChangeText={setSearchQuery}
          onSubmitEditing={navigateToSearchResults}
        />
      </View>

      <ScrollView>
        <View style={{ marginVertical: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold", marginLeft: 10 }}>
            Favorite Songs
          </Text>
          {renderPressableButtons("Favorite Songs")}
        </View>

        <View style={{ marginVertical: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold", marginLeft: 10 }}>
            My Composers
          </Text>
          {renderPressableButtons("My Composers")}
        </View>

        <View style={{ marginVertical: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold", marginLeft: 10 }}>
            Assigned Works
          </Text>
          {renderPressableButtons("Assigned Works")}
        </View>
      </ScrollView>

      <TouchableOpacity
        style={{
          backgroundColor: "#D7DBDB",
          height: 100,
          width: "95%",
          alignSelf: "center",
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 20,
          marginBottom: 10,
          borderRadius: 10,
          shadowOffset: 10,
        }}
        onPress={() => navigation.navigate("SongDetailsScreen")}
      >
        {currentTrack && (
          <>
            <Image
              source={currentTrack.artwork}
              style={{ width: 65, height: 65, borderRadius: 10 }}
            />
            <View style={{ marginLeft: 10, flex: 1 }}>
              <Text
                style={{
                  top: 6,
                  fontWeight: "bold",
                  color: "black",
                  fontSize: 20,
                }}
              >
                {currentTrack.title}
              </Text>
              <Text style={{ top: 4, left: -2, color: "black", fontSize: 15 }}>
                {currentTrack.artist}
              </Text>
              <View
                style={{
                  backgroundColor: "white",
                  height: 10,
                  width: "115%",
                  marginTop: 15,
                  borderRadius: 10,
                  zIndex: 1,
                }}
              >
                <View
                  style={{
                    backgroundColor: "gray",
                    height: "100%",
                    width: `${progress * 100}%`,
                    borderRadius: 5,
                  }}
                />
              </View>
            </View>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <TouchableOpacity
                onPress={togglePlayback}
                style={{ marginRight: 20 }}
              >
                <FontAwesome
                  name={isPlaying ? "pause" : "play"}
                  size={30}
                  color="black"
                />
              </TouchableOpacity>

              <TouchableOpacity onPress={toggleVolume}>
                <FontAwesome5
                  name={isMuted ? "volume-mute" : "volume-down"}
                  size={30}
                  color="black"
                />
              </TouchableOpacity>
            </View>
          </>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default ListenScreen;
