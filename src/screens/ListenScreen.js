import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native';
import { useUser, useObject } from '@realm/react';
import { User } from '../models/User';
import { BSON } from 'realm';

const ListenScreen = ({ navigation }) => {
  const user = useObject(User, BSON.ObjectId(useUser().id));
  const [searchQuery, setSearchQuery] = useState('');

  const navigateToDetails = (category) => {
    navigation.navigate('Details', { category });
  };

  const navigateToSearchResults = () => {
    navigation.navigate('SearchResultsScreen', { searchQuery });
  };

  const renderPressableButtons = (category) => {
    let items = [];
  
    if (category === 'Favorite Songs') {
      items = [
        { name: 'The Four Seasons', composer: 'Antonio Vivaldi', image: require('../../assets/4seasons.jpeg') },
        { name: 'Messiah', composer: 'George Frideric Handel', image: require('../../assets/messiah.jpeg') },
        { name: 'Symphony No. 7', composer: 'Ludwig van Beethoven', image: require('../../assets/symp7.jpeg') },
        { name: 'The Nutcracker', composer: 'Pyotr Ilyich Tchaikovsky', image: require('../../assets/nutcracker.jpg') },
        { name: 'Symphony No. 5', composer: 'Ludwig van Beethoven', image: require('../../assets/symp5.jpeg') },
      ];
    } else if (category === 'My Composers') {
      items = [
        { name: 'Ludwig van Beethoven', image: require('../../assets/beethoven1.jpeg') },
        { name: 'Frédéric Chopin', image: require('../../assets/chopin.jpeg') },
        { name: 'Antonio Vivaldi', image: require('../../assets/vivaldi.jpeg') },
        { name: 'Wolfgang Amadeus Mozart', image: require('../../assets/mozart.jpeg') },
        { name: 'Johannes Brahms', image: require('../../assets/brahms.png') },
      ];
    } else if (category === 'Assigned Works') {
      items = [
        { name: 'Water Music', composer: 'George Frideric Handel', image: require('../../assets/watermusic.jpg') },
        { name: 'Symphony No. 1', composer: 'Gustav Mahler', image: require('../../assets/symp1.jpeg') },
        { name: 'Symphony No. 3', composer: 'Ludwig van Beethoven', image: require('../../assets/symp3.jpeg') },
        { name: 'Carmen', composer: 'Georges Bizet', image: require('../../assets/carmen.jpeg') },
        { name: 'Swan Lake', composer: 'Pyotr Ilyich Tchaikovsky', image: require('../../assets/swanlake.jpg') },
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
                alignContent: 'center',
                top: 4, 
                width: category === 'My Composers' ? 100 : 150,
                height: category === 'My Composers' ? 100 : 150,
              }}
              onPress={() => navigateToDetails(category)}
            >
              <Image source={item.image} style={{ width: '100%', height: '100%', resizeMode: 'cover', borderRadius: category === 'My Composers' ? 100 : 10 }} />
              <View style={{ borderBottomRightRadius: 10, borderBottomLeftRadius: 10, position: 'absolute', bottom: 0, left: 0, right: 0, height: 50, backgroundColor: 'rgba(0, 0, 0, 0.5)', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: 'white', fontSize: 15, textAlign: 'center', fontWeight: 'bold', numberOfLines: 1, alignContent: 'center' }}>{item.name}</Text>
                <Text style={{ color: 'white', fontSize: 12, textAlign: 'center', fontWeight: 'regular', numberOfLines: 1 }}>{item.composer}</Text>
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
        <Text style={{ left: 5, color: 'white', fontWeight: 'bold', marginTop: 45, fontSize: 25 }}>Let's listen, {user.full_name.split(" ")[0]}!</Text>
      </View>

      <View style={{ padding: 10 }}>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 5, paddingHorizontal: 10 }}
          placeholder="Search"
          value={searchQuery}
          onChangeText={setSearchQuery}
          onSubmitEditing={navigateToSearchResults} 
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
        onPress={() => navigation.navigate('SongDetailsScreen')}
      >
        <Image 
          source={require('../../assets/moonlightsonata.jpg')} 
          style={{ 
            width: 65, 
            height: 65, 
            borderRadius: 10, 
          }} 
        />
        <View style={{ marginLeft: 10, flex: 1 }}>
          <Text style={{ top: 6, fontWeight: 'bold', color: 'black', fontSize: 20 }}>Moonlight Sonata</Text>
          <Text style={{ top: 4, left: -2, color: 'black', fontSize: 15 }}> Ludwig van Beethoven</Text>
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
