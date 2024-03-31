import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable, ScrollView } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

export function SocialPage({ navigation }) {
    const [activeTab, setActiveTab] = useState('Friends');

    const styles = StyleSheet.create({
        title: {
            fontWeight: 'bold',
            textAlign: 'center',
            fontSize: 30,
            color: 'white',
            marginTop: 64,
        },
        tabBar: {
            backgroundColor: '#e24808',
            borderRadius: 15,
            marginLeft: '8%',
            width: '84%',
            height: 60,
            shadowOffset: { width: 4, height: 4 },
            shadowColor: 'black',
            shadowOpacity: 0.25,
            marginTop: 70,
        },
        tabLabel: {
            fontSize: 18,
            fontWeight: '500',
            textTransform: 'none',
            color: 'white',
            top: 6,
        },
        indicator: {
            backgroundColor: '#699BF7',
            height: 4,
            width: 80,
            borderRadius: 20,
            left: 17,
        },
        scrollView: {
            backgroundColor: '#00347F',
        },
    });

    return (
        <View style={{ flex: 1, backgroundColor: '#00347F' }}>
            <Text style={styles.title}>Social</Text>
            <Tab.Navigator
                initialRouteName="Friends"
                tabBarOptions={{
                    labelStyle: styles.tabLabel,
                    style: styles.tabBar,
                    indicatorStyle: styles.indicator,
                    activeTintColor: 'white',
                    inactiveTintColor: 'white',
                }}
                onTabPress={({ route }) => setActiveTab(route.name)}>
                <Tab.Screen name="Friends" component={FriendsPage} />
                <Tab.Screen name="National" component={NationalPage} />
                <Tab.Screen name="Global" component={GlobalPage} />
            </Tab.Navigator>
        </View>
    );
}

function FriendsPage() {
    const styles = StyleSheet.create({
        sides: {
            backgroundColor: '#1E2237',
            width: '70%',
            height: 100,
            borderRadius: 15,
            alignSelf: 'center',
            marginTop: 280
        },
        shape: {
            backgroundColor: '#252A40',
            width: '25%',
            height: 180,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            alignSelf: 'center',
            marginTop: -180
        },
        circleImage: {
            width: 70,
            height: 70,
            borderRadius: 30,
            borderWidth: 5,
            borderColor: 'white',
            position: 'absolute',
            top: 40,
            alignSelf: 'center',
            zIndex: 1,
        },
        userImage: {
            width: 60,
            height: 60,
            borderRadius: 30,
            borderWidth: 5,
            borderColor: 'white',
            position: 'absolute',
            top: 40,
            alignSelf: 'center',
            zIndex: 1,
        },
        smallCircleContainer: {
            position: 'absolute',
            justifyContent: 'center',
            alignItems: 'center',
            width: 30,
            height: 30,
            borderRadius: 15,
            alignSelf: 'center',
            zIndex: 1,
        },
        numberText: {
            color: 'white',
            fontSize: 16,
            fontWeight: 'bold',
            zIndex: 5
        },
        nameText: {
            color: 'white',
            fontSize: 16,
            fontWeight: 'bold',
            zIndex: 6
        },
        userText: {
            color: 'grey',
            fontSize: 10,
            fontWeight: 'regular',
            zIndex: 6
        },
        longLine: {
            backgroundColor: 'grey',
            width: '68%',
            height: 2,
            left: 65,
            borderRadius: 20,
            position: 'absolute',
            zIndex: 2
        },
        friendsPageBackground: {
            backgroundColor: '#00347F', 
            flex: 1,
        },
        toggle: {
            position: 'center',
            height: 500,
            width: 345,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            zIndex: 1
        }
    });

    return (
        <ScrollView style={[styles.friendsPageBackground, { flex: 1 }]}>
            <View style={[{top: -90}, styles.sides]}></View>
            <View style={[{top: -90}, styles.shape]}></View>

            {/* Images */}
            <View>
                <Pressable onPress={() => { }} style={{ top: -360 }}>
                    <Image source={require('../../assets/alexander-hipp-iEEBWgY_6lA-unsplash.jpg')} style={styles.circleImage} />
                </Pressable>

                <Pressable onPress={() => { }} style={{ left: '24%', top: -280 }}>
                    <Image source={require('../../assets/michael-dam-mEZ3PoFGs_k-unsplash.jpg')} style={styles.circleImage} />
                </Pressable>

                <Pressable onPress={() => { }} style={{ left: '-23.5%', top: -280 }}>
                    <Image source={require('../../assets/oguz-yagiz-kara-MZf0mI14RI0-unsplash.jpg')} style={styles.circleImage} />
                </Pressable>
            </View>

            {/* Text */}
            <View>
                <Text style={[{ top: -165, left: 94 }, styles.nameText]}>Jim</Text>
                <Text style={[{ top: -260, left: 187.5 }, styles.nameText]}>Dave</Text>
                <Text style={[{ top: -203, left: 287 }, styles.nameText]}>Tina</Text>

                <Text style={[{ top: -200, left: 90 }, styles.userText]}>@jimbo</Text>
                <Text style={[{ top: -290, left: 181.5 }, styles.userText]}>@thedavid</Text>
                <Text style={[{ top: -225, left: 287 }, styles.userText]}>@tina12</Text>

                <Text style={[{ top: 280, left: 150 }, styles.nameText]}>John</Text>
                <Text style={[{ top: 460, left: 150 }, styles.nameText]}>Mary</Text>
                <Text style={[{ top: 527, left: 150 }, styles.nameText]}>Lara</Text>
                <Text style={[{ top: 600, left: 150 }, styles.nameText]}>May</Text>
                <Text style={[{ top: 212, left: 150 }, styles.nameText]}>Bob</Text>

                <Text style={[{ top: 311, left: 150 }, styles.userText]}>@heyitsjohn</Text>
                <Text style={[{ top: 394, left: 150 }, styles.userText]}>@hadalamb</Text>
                <Text style={[{ top: 465, left: 150 }, styles.userText]}>@thatgirllara</Text>
                <Text style={[{ top: 548, left: 150 }, styles.userText]}>@springmay</Text>
                <Text style={[{ top: 170, left: 150 }, styles.userText]}>@robert</Text>
            </View>

            <View style={[{ top: 410 }, styles.longLine]}></View>
            <View style={[{ top: 500 }, styles.longLine]}></View>
            <View style={[{ top: 590 }, styles.longLine]}></View>
            <View style={[{ top: 680 }, styles.longLine]}></View>
            
        <View style={[{ top: -310, left: '8%', backgroundColor: '#1E2237', zIndex: 1 }, styles.toggle]}></View>
        <View style={{ position: 'absolute', top: 90, left: 60 }}>
            <Text style={[styles.numberText, { backgroundColor: 'yellow' }]}>1</Text>
        </View>
        <View style={[styles.smallCircleContainer, {backgroundColor: 'yellow', top: 90, left: 60, position: 'absolute' }]}></View>
        <View style={{ position: 'absolute', top: -260, left: 155 }}>
            <Text style={[styles.numberText, { backgroundColor: 'green' }]}>2</Text>
        </View>
        <View style={{ position: 'absolute', top: -203, left: 255 }}>
            <Text style={[styles.numberText, { backgroundColor: 'lightblue' }]}>3</Text>
        </View>
            
        </ScrollView>
    );
}


function NationalPage() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'green' }}>
            {/* Blank green background */}
        </View>
    );
}

function GlobalPage() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'yellow' }}>
            {/* Blank yellow background */}
        </View>
    );
}
