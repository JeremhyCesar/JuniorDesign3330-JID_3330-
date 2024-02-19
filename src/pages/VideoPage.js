import { useCallback, View } from "react";
import { YoutubePlayer } from "react-native-youtube-iframe";

export function VideoPage(props) {
    const onStateChange = useCallback((state) => {
    if (state === "ended") {
        setPlaying(false);
        Alert.alert("video has finished playing!");
    }
    }, []);
    
    const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
    }, []);
    
    return (
    <View>
        <YoutubePlayer
        height={300}
        play={playing}
        videoId={"iee2TATGMyI"}
        onChangeState={onStateChange}
        />
        <Button title={playing ? "pause" : "play"} onPress={togglePlaying} />
    </View>
    );
}