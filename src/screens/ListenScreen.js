import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ListenScreen = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const navigation = useNavigation();

    const navigateToDetails = (category) => {
        navigation.navigate('Details', { category });
    };

    const navigateToSearchResults = () => {
        navigation.navigate('SearchResultsScreen', { searchQuery });
    };

    const renderPressableButtons = (category) => {
        // Define your array of items for each category here
        let items = [];

        if (category === 'Favorite Songs') {
            items = [
                { name: 'Song 1', image: require('../../assets/listen-nav-icon.png') },
                { name: 'Song 2', image: require('../../assets/listen-nav-icon.png') },
                { name: 'Song 3', image: require('../../assets/listen-nav-icon.png') },
                { name: 'Song 4', image: require('../../assets/listen-nav-icon.png') },
                { name: 'Song 5', image: require('../../assets/listen-nav-icon.png') },
            ];
        } else if (category === 'My Composers') {
            items = [
                { name: 'Composer 1', image: require('../../assets/listen-nav-icon.png') },
                { name: 'Composer 2', image: require('../../assets/listen-nav-icon.png') },
                { name: 'Composer 3', image: require('../../assets/listen-nav-icon.png') },
                { name: 'Composer 4', image: require('../../assets/listen-nav-icon.png') },
                { name: 'Composer 5', image: require('../../assets/listen-nav-icon.png') },
            ];
        } else if (category === 'Assigned Works') {
            items = [
                { name: 'Work 1', image: require('../../assets/listen-nav-icon.png') },
                { name: 'Work 2', image: require('../../assets/listen-nav-icon.png') },
                { name: 'Work 3', image: require('../../assets/listen-nav-icon.png') },
                { name: 'Work 4', image: require('../../assets/listen-nav-icon.png') },
                { name: 'Work 5', image: require('../../assets/listen-nav-icon.png') },
            ];
        }

        return (
            <ScrollView horizontal={true} style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    {items.map((item, index) => (
                        <TouchableOpacity
                            key={index}
                            style={{
                                backgroundColor: 'lightgray',
                                margin: 5,
                                borderRadius: 10,
                                borderBottomLeftRadius: 10,
                                borderBottomRightRadius: 10,
                                left: 6,
                                width: category === 'My Composers' ? 100 : 150, // Width of each box
                                height: category === 'My Composers' ? 100 : 150, // Height of each box
                            }}
                            onPress={() => navigateToDetails(category)}
                        >
                            <Image source={item.image} style={{ width: '100%', height: '100%', resizeMode: 'cover', borderRadius: category === 'My Composers' ? 100 : 10 }} />
                            <View style={{ borderBottomRightRadius: 10, borderBottomLeftRadius: 10, position: 'absolute', bottom: 0, left: 0, right: 0, height: 30, backgroundColor: 'rgba(0, 0, 0, 0.5)', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ color: 'white', fontSize: 15 }}>{item.name}</Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        );
    };

    const { width } = Dimensions.get('window');

    return (
        <View style={{ flex: 1 }}>
            <View style={{ backgroundColor: '#e2480d', padding: 10 }}>
                <Text style={{ left: 5, color: 'white', fontWeight: 'bold', marginTop: 45, fontSize: 25 }}>Let's listen, Julie!</Text>
            </View>

            <View style={{ padding: 10 }}>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 5, paddingHorizontal: 10 }}
                    placeholder="Search"
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                    onSubmitEditing={navigateToSearchResults} // Call navigateToSearchResults when search is submitted
                />
            </View>

            <ScrollView>
                <View style={{ marginVertical: 10 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 10 }}>Favorite Songs</Text>
                    {renderPressableButtons('Favorite Songs')}
                </View>

                <View style={{ marginVertical: 10 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 10 }}>My Composers</Text>
                    {renderPressableButtons('My Composers')}
                </View>

                <View style={{ marginVertical: 10 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 10 }}>Assigned Works</Text>
                    {renderPressableButtons('Assigned Works')}
                </View>
            </ScrollView>

            <TouchableOpacity
                style={{
                    backgroundColor: '#D7DBDB',
                    height: 100,
                    width: '95%',
                    alignSelf: 'center',
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: 20,
                    marginBottom: 10,
                    borderRadius: 10,
                    shadowOffset: 10
                }}
                onPress={() => navigation.navigate('DetailsScreen')}
            >
                <Image
                    source={require('../../assets/moonlightsonata.jpg')}
                    style={{
                        width: 60,
                        height: 60,
                        borderRadius: 10,
                    }}
                />
                <View style={{ marginLeft: 10, flex: 1 }}>
                    <Text style={{ color: 'black', fontSize: 20 }}>Moonlight Sonata</Text>
                    <View style={{ backgroundColor: 'white', height: 10, width: '115%', marginTop: 15, borderRadius: 10, zIndex: 1 }}>
                        <View style={{ backgroundColor: 'gray', height: '100%', width: '50%', borderRadius: 5 }} />
                    </View>
                </View>
                <Image source={require('../../assets/play-button.png')} style={{ width: 30, height: 30, top: -15, left: -20 }} />
                <Image source={require('../../assets/volume button.png')} style={{ width: 30, height: 30, top: -15, left: -20 }} />
            </TouchableOpacity>

        </View>
    );
};

export default ListenScreen;
