import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { BlurView } from '@react-native-community/blur';
import TrackPlayer, { useTrackPlayerEvents, Event } from 'react-native-track-player';

const SongDetailsPage = ({ route }) => {
    const navigation = useNavigation();
    const { currentTrack } = route.params || {};
    const [isPlaying, setIsPlaying] = useState(true);
    const [isFavorite, setIsFavorite] = useState(false);
    const [progress, setProgress] = useState(0);

    useTrackPlayerEvents([Event.PlaybackTrackChanged, Event.PlaybackState], async (event) => {
        if (event.type === Event.PlaybackTrackChanged && event.nextTrack !== null) {
            const track = await TrackPlayer.getTrack(event.nextTrack);
            setIsPlaying(true);
        } else if (event.type === Event.PlaybackState) {
            setIsPlaying(event.state === TrackPlayer.STATE_PLAYING);
        }
    });

    useEffect(() => {
        const intervalId = setInterval(async () => {
            const position = await TrackPlayer.getPosition();
            const duration = await TrackPlayer.getDuration();
            const progress = position / duration;
            setProgress(progress);
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);

    const togglePlayback = async () => {
        const state = await TrackPlayer.getState();
        if (state === TrackPlayer.STATE_PLAYING) {
            await TrackPlayer.pause();
        } else {
            await TrackPlayer.play();
        }
    };

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
    };

    const skipToNext = async () => {
        await TrackPlayer.skipToNext();
    };

    const skipToPrevious = async () => {
        await TrackPlayer.skipToPrevious();
    };

    return (
        <View style={{ flex: 1 }}>
            <View style={{ backgroundColor: '#e2480d', paddingHorizontal: 10, paddingTop: 55, paddingBottom: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="arrow-back" size={25} color="white" />
                </TouchableOpacity>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={toggleFavorite}>
                        <Icon name={isFavorite ? "favorite" : "favorite-border"} size={25} color="white" style={{ marginRight: 15 }} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon name="menu" size={25} color="white" style={{ marginRight: 10 }}/>
                    </TouchableOpacity>
                </View>
            </View>
            <ImageBackground
                source={currentTrack?.artwork}
                style={{ flex: 1 }}>
                <BlurView
                    style={{
                        position: 'absolute',
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
                    <View style={{ flex: 1, justifyContent: 'flex-end', paddingBottom: 20 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20 }}>
                            <View style={{ justifyContent: 'center', marginLeft: 10, marginTop: 5}}>
                                <Text style={{ fontSize: 20, color: 'white', marginBottom: 4 }}>{currentTrack.title}</Text>
                                <Text style={{ fontSize: 14, color: 'white' }}>{currentTrack.artist}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 8}}>
                                <TouchableOpacity>
                                    <Icon name="file-upload" size={25} color="white" />
                                </TouchableOpacity>
                                <TouchableOpacity style={{ marginLeft: 20 }}>
                                    <Icon name="queue-music" size={25} color="white" />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', width: '80%', marginTop: 8, marginLeft: 30, marginBottom: 5}}>
                            <View style={{ width: '90%', height: 8, backgroundColor: 'rgba(255, 255, 255, 0.5)', borderRadius: 2, marginRight: 20, marginTop: 5}}>
                                <View style={{ width: `${progress * 100}%`, height: 8, backgroundColor: 'white', borderRadius: 2 }} />
                            </View>
                            <Text style={{ color: 'white', fontSize: 13}}>-2:03</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 26, marginTop: 15, marginRight: 25}}>
                            <TouchableOpacity style={{ marginTop: 20}}>
                                <Icon name="repeat" size={30} color="white" />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ marginTop: 20, marginLeft: 8}} onPress={skipToPrevious}>
                                <Icon name="skip-previous" size={30} color="white" />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ backgroundColor: 'white', borderRadius: 35, padding: 20, marginLeft: 8 }} onPress={togglePlayback}>
                                <Icon name={isPlaying ? "pause" : "play-arrow"} size={30} color="black" />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ marginTop: 20, marginLeft: 8}} onPress={skipToNext}>
                                <Icon name="skip-next" size={30} color="white" />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ marginTop: 20, marginLeft: 8}}>
                                <Icon name="volume-up" size={30} color="white" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </BlurView>
            </ImageBackground>
        </View>
    );
};

export default SongDetailsPage;