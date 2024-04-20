import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SearchResultsPage = ({ route }) => {
    const navigation = useNavigation();
    const { searchQuery } = route.params;

    // Define pre-entered data for Classical Music works and composers
    const classicalMusicWorks = [
        { id: 1, title: 'Symphony No. 5', composer: 'Ludwig van Beethoven' },
        { id: 2, title: 'Piano Sonata No. 14 "Moonlight Sonata"', composer: 'Ludwig van Beethoven' },
        { id: 3, title: 'Symphony No. 9 "From the New World"', composer: 'Antonín Dvořák' },
        { id: 4, title: 'Eine kleine Nachtmusik', composer: 'Wolfgang Amadeus Mozart' },
        { id: 5, title: 'Symphony No. 3 "Eroica"', composer: 'Ludwig van Beethoven' },
        { id: 6, title: 'Brandenburg Concertos', composer: 'Johann Sebastian Bach' },
        { id: 7, title: 'The Four Seasons', composer: 'Antonio Vivaldi' },
        { id: 8, title: 'Messiah', composer: 'George Frideric Handel' },
        { id: 9, title: 'Symphony No. 6 "Pastoral"', composer: 'Ludwig van Beethoven' },
        { id: 10, title: 'Swan Lake', composer: 'Pyotr Ilyich Tchaikovsky' },
        { id: 11, title: 'Symphony No. 40', composer: 'Wolfgang Amadeus Mozart' },
        { id: 12, title: 'Carmen', composer: 'Georges Bizet' },
        { id: 13, title: 'Symphony No. 7', composer: 'Ludwig van Beethoven' },
        { id: 14, title: 'The Nutcracker', composer: 'Pyotr Ilyich Tchaikovsky' },
        { id: 15, title: 'Symphony No. 9 "Choral"', composer: 'Ludwig van Beethoven' },
        { id: 16, title: 'Symphony No. 5', composer: 'Pyotr Ilyich Tchaikovsky' },
        { id: 17, title: 'Peer Gynt Suite No. 1', composer: 'Edvard Grieg' },
        { id: 18, title: 'Water Music', composer: 'George Frideric Handel' },
        { id: 19, title: 'Symphony No. 1', composer: 'Johannes Brahms' },
        { id: 20, title: 'Symphony No. 3 "Rhenish"', composer: 'Robert Schumann' }
    ];
    

    // Filter the works based on the search query
    const filteredWorks = classicalMusicWorks.filter(work =>
        work.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        work.composer.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Render each item in the list
    const renderItem = ({ item }) => (
        <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc', left: 5 }}>
            <Text style={{ fontWeight: 'bold' }}>{item.title}</Text>
            <Text>{item.composer}</Text>
        </View>
    );

    return (
        <View style={{ flex: 1, marginTop: 40 }}>
            <TouchableOpacity
                style={{ top: 20, alignItems: 'center', left: -155, width: 60, height: 20, backgroundColor: '#e2480d', alignSelf: 'center', marginBottom: 10, borderRadius: 10 }}
                onPress={() => navigation.navigate('ListenScreen')}
            >
                <Text style={{ fontSize: 15, color: 'white', fontWeight: 'bold' }}>Back</Text>
            </TouchableOpacity>
            <View style={{ padding: 20, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', left: -5 }}>Search Results for: {searchQuery}</Text>
            </View>
            <FlatList
                data={filteredWorks}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
};

export default SearchResultsPage;
