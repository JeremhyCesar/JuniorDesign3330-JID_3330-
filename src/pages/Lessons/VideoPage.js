import { Button, Text, View } from "react-native";
import React, { useState, useCallback } from "react";
import YoutubePlayer from "react-native-youtube-iframe";

// usage: navigation.navigate('VideoPage', {composerName: [name of composer], videoID: [videoID]})
export function VideoPage({ route, navigation}) {
    const { composerName, videoID } = route.params;
    return (
        
        <View>
            <Text style={{
                fontWeight: 'bold',
                top: 120,
                left: '5%',
                fontSize: 42,
                color: '#333'
            }}>{composerName} Video </Text>
            <View style={{
                top: 140
            }}>
                <YoutubePlayer
                height={300}
                videoId={videoID}
                />
            </View>
        </View>
    );
}