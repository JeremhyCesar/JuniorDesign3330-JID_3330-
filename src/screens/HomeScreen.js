import React from 'react';
import { Pressable, StyleSheet, ScrollView, Text, View, Image } from 'react-native';
import { useUser, useObject } from '@realm/react';
import { User } from '../models/User';
import { BSON } from 'realm';

export function HomeScreen({ navigation }) {
    const user = useObject(User, BSON.ObjectId(useUser().id));
    const styles = StyleSheet.create({
        button: {
            borderRadius: 31,
            shadowOffset: { width: 4, height: 4 },
            shadowColor: 'black',
            shadowOpacity: 0.25,
            elevation: 2,
            width: '84%',
            height: 250,
            cursor: 'pointer'
        },
        userButton: {
            position: 'absolute',
            top: 10,
            right: 10,
            zIndex: 1, // Ensures button is on top of other content
        }
    });

    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <Text style={{
                fontWeight: 'bold',
                top: 64,
                left: '8%',
                width: '75%',
                fontSize: 48,
                color: '#e2480d'
            }}>{user.full_name}</Text>
            <Text style={{
                top: 68,
                left: '8%',
                fontSize: 20,
                textAlign: 'left',
                color: '#717171'
            }}>Happy Music Monday!</Text>
            <View style={{
                top: 92,
                left: '8%',
                borderRadius: 31,
                backgroundColor: 'white',
                shadowOffset: { width: 4, height: 4 },
                shadowColor: 'black',
                shadowOpacity: 0.25,
                elevation: 3,
                width: '84%',
                height: 142
            }}>
                <Image source={require('../../assets/girl-playing-cello.png')} />
                <Text style={{
                    position: 'absolute',
                    top: '25%',
                    left: '30%',
                    fontSize: 26,
                    fontWeight: 500,
                    width: '70%',
                    shadowOffset: { width: 4, height: 4 },
                    shadowColor: 'black',
                    shadowOpacity: 0.25,
                    color: '#717171',
                    flexWrap: 'wrap',
                    textAlign: 'center',
                    elevation: 3
                }}>Where words fail, music speaks.</Text>
            </View>
            <Pressable onPress={() => { navigation.navigate('Lessons', { screen: 'LessonHome' }) }} style={[{ top: 126, left: '8%', backgroundColor: '#ffbb37' }, styles.button]}>
                <Text style={{
                    top: 26,
                    left: '10%',
                    fontSize: 48,
                    textAlign: 'left',
                    fontWeight: 'bold',
                    color: 'white'
                }}>Learn</Text>
                <Image source={require('../../assets/teaching-icon.png')} style={{
                    top: 10,
                    left: '45%',
                    width: '45%',
                    height: 186,
                    objectFit: 'cover'
                }} />
            </Pressable>
            <Pressable onPress={() => { navigation.navigate('Listen') }} style={[{ top: 158, left: '8%', backgroundColor: '#e24808' }, styles.button]}>
                <Text style={{
                    top: 26,
                    left: '10%',
                    fontSize: 48,
                    textAlign: 'left',
                    fontWeight: 'bold',
                    color: 'white'
                }}>Listen</Text>
                <Image source={require('../../assets/girl-enjoying-music.png')} style={{
                    top: 10,
                    left: '43%',
                    width: '50%',
                    height: 160,
                    objectFit: 'cover'
                }} />
            </Pressable>
            <Pressable onPress={() => { navigation.navigate('Quizzes', { screen: 'QuizScreen' }) }}
                style={[{ top: 190, left: '8%', backgroundColor: '#00347f' }, styles.button]}>
                <Text style={{
                    top: 26,
                    left: '10%',
                    fontSize: 48,
                    textAlign: 'left',
                    fontWeight: 'bold',
                    color: 'white',
                }}>Quizzes</Text>
                <Image source={require('../../assets/to-do-list.png')} style={{
                    top: 10,
                    left: '55%',
                    width: '35%',
                    height: 120,
                    objectFit: 'cover'
                }} />
            </Pressable>
            <View style={{ height: 210 }} />
            <Pressable style={[styles.userButton, {top: 75, right: 30}]} onPress={() => navigation.navigate('UserPage')}>
                <Image source={require('../../assets/user-icon.webp')} style={{ width: 40, height: 40 }} />
            </Pressable>
        </ScrollView>
    );
}
